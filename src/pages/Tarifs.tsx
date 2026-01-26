import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";
import StripeCheckoutModal from "@/components/StripeCheckoutModal";

const Tarifs = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isStripeOpen, setIsStripeOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const packs = [
    {
      name: "Pack NDA",
      price: "400€",
      productKey: "pack-nda",
      description: "Gestion complète des démarches administratives pour l'obtention de votre NDA",
      forWho: "Tout professionnel souhaitant démarrer une activité de formateur en France",
      features: [
        "Constitution complète du dossier administratif",
        "Vérification de la conformité des documents",
        "Accompagnement jusqu'à l'obtention du NDA",
        "Cadrage précis, sans improvisation",
        "Suivi personnalisé tout au long du processus",
      ],
      cta: "stripe",
    },
    {
      name: "Pack Qualiopi",
      price: "2 500€",
      productKey: "pack-qualiopi",
      description: "Accompagnement complet pour obtenir ou renouveler la certification Qualiopi avec audit",
      forWho: "Organismes de formation souhaitant accéder aux financements publics",
      features: [
        "Audit interne de vos pratiques actuelles",
        "Mise en place des processus conformes au référentiel national",
        "Mise en conformité documentaire complète",
        "Préparation à l'audit de certification",
        "Accompagnement jusqu'à l'obtention de Qualiopi",
      ],
      cta: "stripe",
    },
    {
      name: "Pack Qualiopi sans audit",
      price: "1 800€",
      productKey: "pack-qualiopi-sans-audit",
      description: "Préparation et mise en conformité de tous les documents sans accompagnement à l'audit",
      forWho: "Organismes souhaitant préparer leur documentation Qualiopi en autonomie pour l'audit",
      features: [
        "Analyse de vos documents existants",
        "Mise en conformité documentaire complète",
        "Création des processus conformes au référentiel",
        "Formation à l'utilisation des documents",
        "Support pour questions avant audit",
      ],
      cta: "stripe",
    },
    {
      name: "Pack RS",
      price: "700€",
      productKey: "pack-rs",
      description: "Partenariat avec un RS existant ou accompagnement au dépôt de votre propre certification",
      forWho: "Formateurs et organismes souhaitant valoriser leurs formations via les Répertoires Spécifiques",
      features: [
        "Identification du RS pertinent pour votre activité",
        "Mise en place du partenariat",
        "Structuration administrative et contractuelle",
        "Analyse de faisabilité pour dépôt RS",
        "Mise en relation avec experte spécialisée",
      ],
      cta: "stripe",
    },
  ];

  const formules = [
    {
      name: "Formule Essentielle",
      price: "75€/h",
      description: "Services de consultante en formation disponibles à la demande",
      features: [
        "Aucune contrainte de contrat à long terme",
        "Tarification claire et ajustée selon vos besoins",
        "Accès aux services uniquement quand vous en avez besoin",
        "Flexibilité maximale",
      ],
      cta: "calendly",
    },
    {
      name: "Formule Avancée",
      price: "Sur devis",
      description: "Forfait horaire personnalisé avec nombre d'heures déterminé ensemble",
      features: [
        "Un seul paiement pour une tranquillité d'esprit totale",
        "Solution claire, sans surprises",
        "Détermination conjointe du nombre d'heures nécessaires",
        "Parfaite compréhension de ce qui est inclus",
      ],
      cta: "calendly",
    },
    {
      name: "Formule Sur-Mesure",
      price: "Sur devis",
      description: "Projets spécifiques avec objectifs et résultats définis",
      features: [
        "Axés sur des objectifs spécifiques",
        "Projets bien définis pour des résultats concrets",
        "Parfaite pour des besoins ponctuels",
        "Garantie de résultats tangibles",
      ],
      cta: "calendly",
    },
  ];

  const handleStripePayment = (productKey: string) => {
    setSelectedProduct(productKey);
    setIsStripeOpen(true);
  };

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
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-heading mb-2">
                          {pack.name}
                        </CardTitle>
                        <p className="text-3xl font-heading font-bold text-primary">
                          {pack.price}
                        </p>
                      </div>
                    </div>
                    <CardDescription className="text-base font-body mt-4">
                      {pack.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
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
                      onClick={() => pack.cta === "stripe" ? handleStripePayment(pack.productKey) : setIsCalendlyOpen(true)}
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

          {/* Formules Section */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
              Formules horaires
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {formules.map((formule, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-heading">{formule.name}</CardTitle>
                    <p className="text-3xl font-heading font-bold text-primary mt-4">
                      {formule.price}
                    </p>
                    <CardDescription className="font-body mt-2">
                      {formule.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {formule.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-body">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setIsCalendlyOpen(true)}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Demander un devis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Payment info */}
          <section className="mt-16">
            <div className="bg-navy text-white rounded-2xl p-8 text-center">
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
        open={isStripeOpen} 
        onOpenChange={setIsStripeOpen} 
        productKey={selectedProduct} 
      />
    </div>
  );
};

export default Tarifs;
