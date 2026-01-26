import { Layers, Shield, Zap } from "lucide-react";

const MethodeSection = () => {
  const pillars = [
    {
      number: "01",
      icon: Layers,
      title: "Structurer",
      description: "Clarifier votre offre, vos objectifs et votre positionnement",
      color: "bg-primary/10 text-primary",
    },
    {
      number: "02",
      icon: Shield,
      title: "Sécuriser",
      description: "Garantir la conformité réglementaire à chaque étape",
      color: "bg-accent/10 text-accent",
    },
    {
      number: "03",
      icon: Zap,
      title: "Simplifier",
      description: "Alléger votre charge mentale et vous libérer du temps",
      color: "bg-navy/10 text-navy",
    },
  ];

  return (
    <section id="methode" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-subheading font-medium text-sm uppercase tracking-wider">
              Ma méthode
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Une méthode éprouvée pour avancer <span className="text-primary">sereinement</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Depuis plusieurs années, j'accompagne des porteurs de projets de formation qui souhaitent développer leur activité dans un cadre clair, structuré et conforme aux exigences françaises.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all group"
              >
                {/* Number badge */}
                <span className="absolute -top-4 left-8 bg-navy text-white text-sm font-bold px-3 py-1 rounded-full font-subheading">
                  {pillar.number}
                </span>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-body">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional text */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-body max-w-3xl mx-auto">
              Chaque accompagnement est personnalisé selon votre situation, vos objectifs et votre niveau d'avancement. 
              <strong className="text-foreground"> Vous n'êtes jamais seul face aux complexités administratives.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeSection;
