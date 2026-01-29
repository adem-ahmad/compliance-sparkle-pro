import { ArrowLeft, ArrowRight, Download, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Ebook = () => {
  const [email, setEmail] = useState("");

  const freeEbooks = [
    {
      title: "Les fondamentaux du NDA",
      description:
        "Tout ce qu'il faut savoir avant de démarrer votre activité de formateur : démarches, pièges à éviter, calendrier réaliste",
      icon: BookOpen,
    },
    {
      title: "Qualiopi en 10 questions",
      description:
        "Comprendre les enjeux de la certification, les critères essentiels et les erreurs fréquentes à anticiper",
      icon: BookOpen,
    },
    {
      title: "CPF et EDOF : mode d'emploi",
      description:
        "Découvrez comment proposer vos formations sur Mon Compte Formation et accéder à ce levier commercial stratégique",
      icon: BookOpen,
    },
  ];

  const paidEbooks = [
    {
      title: "Guide complet Qualiopi",
      description:
        "Une méthodologie pas à pas pour préparer votre audit en toute sérénité, avec modèles de documents et checklist détaillée",
      price: "47€",
    },
    {
      title: "Répertoires Spécifiques : stratégie et faisabilité",
      description:
        "Analyse approfondie des opportunités RS, critères de décision, et processus de partenariat ou de dépôt",
      price: "67€",
    },
    {
      title: "Créer son organisme de formation de A à Z",
      description:
        "Du statut juridique à la première vente, toutes les étapes structurées pour lancer votre activité en toute conformité",
      price: "97€",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Merci ! Vous recevrez votre guide gratuit par email.");
    setEmail("");
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
              Ebooks & Ressources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Que vous soyez en phase de réflexion ou déjà engagé dans votre projet, ces ressources sont conçues pour vous informer, vous rassurer et vous préparer à prendre les bonnes décisions.
            </p>
          </div>

          {/* Free Guide Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-subheading font-medium mb-4">
                    Guide gratuit
                  </span>
                  <h2 className="text-3xl font-heading font-bold mb-4">
                    Obtiens ton Guide NDA Gratuit Maintenant !
                  </h2>
                  <p className="text-white/80 font-body mb-6">
                    Ce guide a été conçu pour t'accompagner étape par étape dans le processus d'obtention de ton NDA. Que tu sois un formateur indépendant ou un organisme de formation, tu trouveras ici des conseils pratiques et des explications claires.
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </form>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="w-48 h-64 bg-white/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Free Ebooks */}
          <section className="mb-20">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
              Ebooks gratuits
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Pour découvrir et comprendre les fondamentaux
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {freeEbooks.map((ebook, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <ebook.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-heading">{ebook.title}</CardTitle>
                    <CardDescription className="font-body">
                      {ebook.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button
                      className="w-full bg-[#f2a202] text-[#0d1b2a] hover:bg-[#f2a202]/90"
                    >
                      Télécharger gratuitement
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Paid Ebooks */}
          <section className="mb-20">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
              Ebooks premium
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Pour approfondir et structurer votre projet
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {paidEbooks.map((ebook, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col">
                  <div className="absolute top-4 right-4 bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {ebook.price}
                  </div>
                  <CardHeader className="pt-12">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardTitle className="text-lg font-heading">{ebook.title}</CardTitle>
                    <CardDescription className="font-body">
                      {ebook.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button className="w-full bg-[#f2a202] text-[#0d1b2a] hover:bg-[#f2a202]/90">
                      Commander
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Guarantee */}
          <section>
            <div className="bg-muted/50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Garantie satisfait ou remboursé 14 jours
              </h3>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Accès immédiat après paiement sécurisé. Formats PDF téléchargeables. Si vous n'êtes pas satisfait, nous vous remboursons intégralement sous 14 jours.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ebook;
