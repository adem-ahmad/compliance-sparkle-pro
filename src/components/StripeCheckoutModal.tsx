import { useState, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

const stripePromise = loadStripe("pk_live_51Stq1O19dEKobduOWKBJNEgXtQHdVqq9t4EjZgYQ1KnCuA8usFxNnHvVIkDJXSl6eIfWqfAyiWP2cME0hPVz9Ow000NqxGjIrO");

interface StripeCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productKey: string;
  productName: string;
}

const StripeCheckoutModal = ({
  open,
  onOpenChange,
  productKey,
  productName,
}: StripeCheckoutModalProps) => {
  const [error, setError] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    try {
      setError(null);
      const { data, error: fnError } = await supabase.functions.invoke("create-payment", {
        body: { productKey },
      });

      if (fnError) {
        throw new Error(fnError.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      return data.clientSecret;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue";
      setError(message);
      throw err;
    }
  }, [productKey]);

  const options = { fetchClientSecret };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-heading">Paiement - {productName}</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4">
          {error ? (
            <div className="text-center py-8">
              <p className="text-destructive mb-4">{error}</p>
              <button
                onClick={() => setError(null)}
                className="text-primary underline"
              >
                Réessayer
              </button>
            </div>
          ) : (
            <div id="checkout" className="min-h-[400px]">
              <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StripeCheckoutModal;
