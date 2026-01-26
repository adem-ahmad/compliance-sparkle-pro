import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");

interface StripeCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productKey: string | null;
}

const StripeCheckoutModal = ({ open, onOpenChange, productKey }: StripeCheckoutModalProps) => {
  const fetchClientSecret = useCallback(async () => {
    if (!productKey) return "";
    
    const { data, error } = await supabase.functions.invoke("create-payment", {
      body: { productKey },
    });

    if (error) {
      console.error("Error fetching client secret:", error);
      throw error;
    }

    return data.clientSecret;
  }, [productKey]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[85vh] p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Paiement sécurisé</DialogTitle>
        </VisuallyHidden>
        {productKey && stripePromise ? (
          <div className="w-full h-full overflow-auto p-4">
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ fetchClientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StripeCheckoutModal;
