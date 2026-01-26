import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TarifsSection = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/av-assistas/audit-de-ton-business", "_blank");
  };

  const packs = [
    {
      name: "Pack NDA",
      price: "380€",
      description: "Gestion complète des démarches administratives",
      features: [
        "Assistance pour l'obtention de votre NDA",
        "Suivi personnalisé tout au long du processus",
        "Vérification des documents",
      ],
      popular: false,
    },
    {
      name: "Pack Qualiopi",
      price: "Sur devis",
      description: "Accompagnement complet à la certification",
      features: [
        "Audit de vos pratiques actuelles",
        "Mise en conformité documentaire",
        "Préparation à l'audit officiel",
      ],
      popular: true,
    },
    {
      name: "Pack EDOF/CPF",
      price: "Sur devis",
      description: "Inscription et référencement CPF",
      features: [
        "Inscription sur la plateforme EDOF",
        "Structuration des offres éligibles",
        "Sécurisation du cadre réglementaire",
      ],
      popular: false,
    },
  ];

  const formules = [
    {
      name: "Essentielle",
      price: "75€/h",
      description: "Services à la demande, sans engagement",
    },
    {
      name: "Avancée",
      price: "Sur devis",
      description: "Forfait horaire personnalisé",
    },
    {
      name: "Sur-Mesure",
      price: "Sur devis",
      description: "Projets spécifiques et objectifs définis",
    },
  ];

  return (
    <section id="tarifs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-subheading font-medium text-sm uppercase tracking-wider">
              Tarifs
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Des offres <span className="text-primary">claires et transparentes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Choisissez l'accompagnement qui correspond à vos besoins et à votre situation.
            </p>
          </div>

          {/* Packs */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {packs.map((pack, index) => (
              <Card
                key={index}
                className={`relative ${pack.popular ? "border-primary shadow-lg scale-105" : "border-border"}`}
              >
                {pack.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Le plus demandé
                  </span>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-heading">{pack.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-heading font-bold text-primary">
                      {pack.price}
                    </span>
                  </div>
                  <CardDescription className="mt-2 font-body">
                    {pack.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-body">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={openCalendly}
                    className={`w-full ${pack.popular ? "bg-primary text-primary-foreground" : "bg-navy text-white hover:bg-navy/90"}`}
                  >
                    Réserver un appel
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formules */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
              Formules horaires
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {formules.map((formule, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h4 className="font-subheading font-semibold text-foreground mb-2">
                    {formule.name}
                  </h4>
                  <p className="text-2xl font-heading font-bold text-primary mb-2">
                    {formule.price}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {formule.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/tarifs">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                Voir tous les détails des tarifs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifsSection;
