import { AlertTriangle, HelpCircle, Shield } from "lucide-react";

const ProblemeSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Trop d'informations contradictoires",
      description:
        "Les sources se contredisent. Les forums regorgent d'approximations. Difficile de distinguer ce qui est fiable de ce qui ne l'est pas.",
    },
    {
      icon: HelpCircle,
      title: "Aucun cadre clair",
      description:
        "Vous cherchez des réponses précises, adaptées à votre situation. Pas des généralités ou des \"ça dépend\".",
    },
    {
      icon: Shield,
      title: "La peur de mal faire",
      description:
        "Un dossier refusé. Un audit raté. Une non-conformité découverte. Les conséquences peuvent être lourdes.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Vous maîtrisez votre expertise.{" "}
              <span className="text-accent">Mais le cadre réglementaire vous échappe.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Vous excellez dans votre domaine. Pourtant, dès qu'il s'agit de structurer une activité de formation conforme, tout se complique. Les acronymes s'accumulent : NDA, Qualiopi, EDOF, CPF, RS.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="bg-navy/5 border-l-4 border-primary p-6 rounded-r-lg mb-12">
            <p className="text-lg italic text-foreground/80 font-body">
              « Je sais former. Mais je ne sais pas si je fais les choses correctement du point de vue réglementaire. »
            </p>
          </blockquote>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-subheading font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Solution intro */}
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground font-medium font-body">
              Ce dont vous avez besoin, ce n'est pas de plus d'informations.{" "}
              <strong className="text-primary">
                C'est d'un cadre structuré, d'une méthode fiable, et d'une interlocutrice qui maîtrise réellement le sujet.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemeSection;
