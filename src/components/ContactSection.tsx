import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/av-assistas/audit-de-ton-business", "_blank");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Prêt·e à structurer votre activité de formation ?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              Le premier pas vers la sérénité, c'est un échange sincère sur votre situation, vos objectifs et vos priorités. L'appel découverte est un moment dédié à votre projet, sans engagement.
            </p>

            {/* What to expect */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-subheading font-semibold text-foreground mb-4">
                Pendant cet appel, nous aborderons :
              </h3>
              <ul className="space-y-2 text-muted-foreground font-body">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Votre situation actuelle et vos objectifs de développement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Les démarches prioritaires pour avancer sereinement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  L'accompagnement le plus adapté à vos besoins
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Les prochaines étapes concrètes pour structurer votre projet
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-[#f2a202] text-[#091b2e] hover:bg-[#f2a202]/90 font-subheading font-semibold text-lg px-8 group"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Réserver mon appel découverte
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Email alternative */}
            <p className="text-sm text-muted-foreground mt-6 font-body">
              Vous préférez m'écrire ?{" "}
              <a
                href="mailto:contact@meriem-formation.fr"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                <Mail className="w-4 h-4" />
                contact@meriem-formation.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
