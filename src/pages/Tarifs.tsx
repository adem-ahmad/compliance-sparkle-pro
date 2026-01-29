import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import CalendlyModal from "@/components/CalendlyModal";
import StripeCheckoutModal from "@/components/StripeCheckoutModal";

const Tarifs = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [stripeModal, setStripeModal] = useState<{ open: boolean; productKey: string; productName: string }>({
    open: false,
    productKey: "",
    productName: "",
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPayment = (productKey: string, productName: string) => {
    setStripeModal({ open: true, productKey, productName });
  };

  const packs = [
    {
      name: "Pack NDA",
      price: "400€ TTC",
      productKey: "pack-nda",
      description: "Assistance pour l'obtention de votre NDA avec gestion complète des démarches administratives et suivi régulier tout au long du processus.",
      forWho: "Tout professionnel souhaitant démarrer une activité de formateur en France",
      features: [
        "Constitution complète du dossier administratif",
        "Vérification de la conformité des documents",
        "Accompagnement jusqu'à l'obtention du NDA",
        "Cadrage précis, sans improvisation",
        "Suivi personnalisé tout au long du processus",
      ],
    },
    {
      name: "Pack Qualiopi",
      price: "2 500€ TTC",
      productKey: "pack-qualiopi",
      description: "Obtenir ou renouveler la certification Qualiopi : Audit interne, mise en conformité documentaire, préparation complète à l'audit officiel.",
      forWho: "Organismes de formation souhaitant accéder aux financements publics",
      features: [
        "Audit interne de vos pratiques actuelles",
        "Mise en place des processus conformes au référentiel national",
        "Mise en conformité documentaire complète",
        "Préparation à l'audit de certification",
        "Accompagnement jusqu'à l'obtention de Qualiopi",
      ],
    },
    {
      name: "Pack Qualiopi sans audit",
      price: "1 800€ TTC",
      productKey: "pack-qualiopi-sans-audit",
      description: "Préparation et mise en conformité de tous les documents.",
      forWho: "Organismes souhaitant préparer leur documentation Qualiopi en autonomie pour l'audit",
      features: [
        "Analyse de vos documents existants",
        "Mise en conformité documentaire complète",
        "Création des processus conformes au référentiel",
        "Formation à l'utilisation des documents",
        "Support pour questions avant audit",
      ],
    },
    {
      name: "Pack RS",
      price: "700€ TTC",
      productKey: "pack-rs",
      description: "Pack Partenariats et répertoires spécifiques (RS) pour les formateurs et organismes souhaitant s'adosser à un RS existant ou déposer leur propre certification.",
      forWho: "Formateurs et organismes souhaitant valoriser leurs formations via les Répertoires Spécifiques",
      features: [
        "Identification du RS pertinent pour votre activité",
        "Mise en place du partenariat",
        "Structuration administrative et contractuelle",
        "Analyse de faisabilité pour dépôt RS",
        "Mise en relation avec experte spécialisée",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Tarifs & Prestations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Découvrez en détail chaque accompagnement et choisissez celui qui correspond à vos besoins.
            </p>
          </div>

          {/* Packs Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
              Packs d'accompagnement
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {packs.map((pack, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="flex flex-col items-center">
                      <CardTitle className="text-2xl font-heading mb-2">
                        {pack.name}
                      </CardTitle>
                      <p className="text-3xl font-heading font-bold text-primary">
                        {pack.price}
                      </p>
                    </div>
                    <CardDescription className="text-base font-body mt-4 min-h-[72px] flex items-center justify-center">
                      {pack.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                      <p className="text-sm font-subheading font-medium text-foreground">
                        Pour qui ?
                      </p>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        {pack.forWho}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-subheading font-medium text-foreground mb-3">
                        Ce qui est inclus :
                      </p>
                      <ul className="space-y-2">
                        {pack.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-body">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      onClick={() => openPayment(pack.productKey, pack.name)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Commander maintenant
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Payment info */}
          <section className="mt-16">
            <div className="bg-[#0d1b2a] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Paiement sécurisé
              </h3>
              <p className="text-white/80 font-body max-w-2xl mx-auto mb-4">
                Tous les paiements sont sécurisés via Stripe. Vos données personnelles sont protégées et jamais partagées avec des tiers.
              </p>
              <p className="text-white/60 text-sm font-body">
                Méthodes acceptées : Carte bancaire, virement, paiement en plusieurs fois selon les montants
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <CalendlyModal open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen} />
      <StripeCheckoutModal
        open={stripeModal.open}
        onOpenChange={(open) => setStripeModal((prev) => ({ ...prev, open }))}
        productKey={stripeModal.productKey}
        productName={stripeModal.productName}
      />
    </div>
  );
};

export default Tarifs;
