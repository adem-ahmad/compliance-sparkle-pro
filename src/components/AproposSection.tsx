import { Heart, Target, Shield, Users, Sparkles, Coffee } from "lucide-react";

const AproposSection = () => {
  const values = [
    {
      icon: Target,
      title: "Clarté",
      description: "Chaque démarche est expliquée simplement, sans jargon inutile.",
    },
    {
      icon: Shield,
      title: "Rigueur",
      description: "La conformité ne tolère aucune approximation. Chaque dossier est construit avec précision.",
    },
    {
      icon: Users,
      title: "Fiabilité",
      description: "Vous pouvez compter sur un accompagnement constant et des engagements tenus.",
    },
    {
      icon: Heart,
      title: "Humanité",
      description: "Derrière chaque dossier, il y a un projet humain. Je prends le temps d'écouter.",
    },
    {
      icon: Sparkles,
      title: "Engagement",
      description: "Votre réussite est ma priorité. Je m'investis pleinement pour que votre projet aboutisse.",
    },
    {
      icon: Coffee,
      title: "Sérénité",
      description: "Mon objectif : alléger votre charge mentale pour que vous puissiez vous concentrer sur l'essentiel.",
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-subheading font-medium text-sm uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Qui suis-je ?
            </h2>
          </div>

          {/* About content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-navy to-navy/80 rounded-2xl p-8 text-white">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl font-heading font-bold text-primary">M</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-center mb-2">
                  Mériem
                </h3>
                <p className="text-primary font-subheading text-center mb-6">
                  Consultante Formation
                </p>
                <div className="space-y-3 text-sm text-white/80">
                  <p className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Experte en conformité réglementaire
                  </p>
                  <p className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Spécialiste NDA, Qualiopi, CPF
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Accompagnement personnalisé
                  </p>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground font-body leading-relaxed">
                Depuis plusieurs années, j'accompagne les acteurs de la formation professionnelle en France dans leurs démarches de conformité, de structuration et de développement.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Mon parcours m'a permis de développer une connaissance approfondie du cadre réglementaire français, des attentes des organismes certificateurs et des réalités terrain des formateurs et organismes de formation.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r">
                <p className="text-foreground font-subheading font-medium italic">
                  "La conformité ne doit jamais être un frein à l'ambition. Elle doit au contraire devenir un levier de crédibilité, de sérénité et de croissance durable."
                </p>
              </blockquote>
              <p className="text-muted-foreground font-body leading-relaxed">
                Mon engagement auprès de vous : clarifier ce qui semble complexe, sécuriser ce qui paraît risqué, et vous permettre d'avancer avec confiance vers vos objectifs.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-center mb-8">
              Les valeurs qui guident chaque accompagnement
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold text-foreground mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AproposSection;
