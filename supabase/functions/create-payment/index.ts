import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Map of price IDs for each product
const PRICE_IDS: Record<string, string> = {
  "pack-nda": "price_1StqAS19dEKobduOlCncnWTw",
  "pack-qualiopi": "price_1StqCU19dEKobduOL80u1wOL",
  "pack-qualiopi-sans-audit": "price_1Stqdk19dEKobduOFfv6lVVA",
  "pack-rs": "price_1StqdA19dEKobduO9elTWruQ",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productKey, customerEmail } = await req.json();

    if (!productKey || !PRICE_IDS[productKey]) {
      throw new Error("Invalid product key");
    }

    const priceId = PRICE_IDS[productKey];

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer already exists
    let customerId: string | undefined;
    if (customerEmail) {
      const customers = await stripe.customers.list({ email: customerEmail, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      }
    }

    // Create a one-time payment session with embedded checkout
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : customerEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      ui_mode: "embedded",
      return_url: `${req.headers.get("origin")}/paiement-reussi?session_id={CHECKOUT_SESSION_ID}`,
    });

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error creating payment session:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
