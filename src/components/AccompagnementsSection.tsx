import { FileText, Award, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import CalendlyModal from "./CalendlyModal";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AccompagnementsSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const accompagnements = [
    {
      icon: FileText,
      title: "NDA – Numéro de Déclaration d'Activité",
      forWho: "Tout professionnel souhaitant démarrer une activité de formateur en France",
      description:
        "Constitution du dossier, vérification des pièces, accompagnement jusqu'à l'obtention du numéro",
      benefit:
        "Vous démarrez dans un cadre légal clair, sans erreur administrative ni perte de temps",
      color: "border-primary",
    },
    {
      icon: Award,
      title: "Qualiopi – Préparation et structuration",
      forWho: "Organismes de formation souhaitant obtenir ou renouveler la certification Qualiopi",
      description:
        "Audit interne, mise en conformité documentaire, préparation complète à l'audit officiel",
      benefit:
        "Vous présentez un dossier solide, structuré et conforme aux 7 critères du référentiel national",
      color: "border-accent",
    },
    {
      icon: BookOpen,
      title: "EDOF / CPF – Inscription et sécurisation",
      forWho: "Organismes souhaitant proposer des formations éligibles au CPF",
      description:
        "Inscription sur l'EDOF, sécurisation du cadre administratif et réglementaire",
      benefit:
        "Vous accédez à un levier commercial majeur en toute conformité",
      color: "border-navy",
    },
    {
      icon: Users,
      title: "Partenariats & Répertoires Spécifiques (RS)",
      forWho: "Formateurs et organismes souhaitant valoriser leurs formations",
      description:
        "Partenariat avec un RS existant ou accompagnement au dépôt de votre propre certification",
      benefit:
        "Valorisation de votre offre et accès aux financements publics",
      color: "border-primary",
    },
  ];

  return (
    <section id="accompagnements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary font-subheading font-medium text-sm uppercase tracking-wider">
              Prestations
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Des accompagnements <span className="text-primary">sur mesure</span> pour chaque étape
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Que vous soyez en phase de lancement ou de développement, chaque prestation est conçue pour répondre à un besoin précis.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {accompagnements.map((item, index) => (
              <Card
                key={index}
                className={`border-l-4 ${item.color} hover:shadow-lg transition-all duration-700 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading mb-1">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="font-subheading text-sm">
                        <strong>Pour qui :</strong> {item.forWho}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground font-body">
                      <strong className="text-foreground">Ce qui est pris en charge :</strong>{" "}
                      {item.description}
                    </p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-body">
                      <strong className="text-primary">Bénéfice concret :</strong>{" "}
                      {item.benefit}
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsCalendlyOpen(true)}
                    variant="outline"
                    className="w-full mt-4 hover:bg-primary hover:text-primary-foreground border-primary text-primary"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <CalendlyModal open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen} />
    </section>
  );
};

export default AccompagnementsSection;
