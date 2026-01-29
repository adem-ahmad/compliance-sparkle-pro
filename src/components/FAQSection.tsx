import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Comment fonctionne la tarification de vos services ?",
      answer:
        "La tarification est flexible et adaptée à vos besoins. Vous pouvez opter pour un tarif horaire si vous avez besoin de services ponctuels ou choisir un forfait si vous souhaitez une assistance régulière. Lors de notre premier échange, nous définirons ensemble la meilleure option pour vous.",
    },
    {
      question: "Combien de temps faut-il pour obtenir le NDA ?",
      answer:
        "Le délai d'obtention du NDA varie généralement entre 1 à 3 mois selon la DREETS de votre région. Mon accompagnement vous permet de constituer un dossier complet dès le départ, évitant ainsi les allers-retours et les délais supplémentaires.",
    },
    {
      question: "Quelle est la différence entre Qualiopi et le NDA ?",
      answer:
        "Le NDA (Numéro de Déclaration d'Activité) est obligatoire pour exercer légalement en tant qu'organisme de formation. Qualiopi est une certification qualité qui vous permet d'accéder aux financements publics et mutualisés (OPCO, CPF, etc.). Les deux sont complémentaires.",
    },
    {
      question: "Puis-je proposer mes formations sur le CPF sans Qualiopi ?",
      answer:
        "Non, la certification Qualiopi est obligatoire depuis janvier 2022 pour proposer des formations éligibles au CPF. C'est une condition préalable à l'inscription sur l'EDOF et au référencement CPF.",
    },
    {
      question: "Que se passe-t-il après notre premier appel découverte ?",
      answer:
        "Suite à notre appel, je vous envoie une proposition personnalisée détaillant l'accompagnement recommandé, le planning prévisionnel et les conditions. Vous disposez de tout le temps nécessaire pour prendre votre décision, sans aucune pression.",
    },
    {
      question: "Proposez-vous un accompagnement à distance ?",
      answer:
        "Oui, tous mes accompagnements sont réalisables à distance. Je travaille avec des clients dans toute la France grâce aux outils de visioconférence et de partage de documents sécurisés.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-subheading font-medium text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-foreground font-body">
              Vous avez des questions ? Voici les réponses aux interrogations les plus courantes.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-subheading font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground font-body pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
