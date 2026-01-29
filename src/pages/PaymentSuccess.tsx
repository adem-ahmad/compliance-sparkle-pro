import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Paiement réussi !
            </h1>
            
            <p className="text-lg text-muted-foreground font-body mb-8">
              Merci pour votre confiance. Vous allez recevoir un email de confirmation avec tous les détails de votre commande.
            </p>
            
            <p className="text-muted-foreground font-body mb-8">
              Je vous contacterai très prochainement pour planifier notre premier échange et démarrer votre accompagnement.
            </p>
            
            <Link to="/">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
