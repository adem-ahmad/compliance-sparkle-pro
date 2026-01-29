import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import CalendlyModal from "./CalendlyModal";

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8 animate-fade-up">
            <span className="text-sm font-subheading font-medium">
              Consultante Formation
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transformez votre activité de formation en{" "}
            <span className="text-primary">projet structuré, conforme et serein</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Je structure et sécurise votre activité de formation, avec clarté et méthode. 
            NDA, Qualiopi, EDOF/CPF, Répertoires Spécifiques — vous méritez un accompagnement qui clarifie chaque étape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={() => setIsCalendlyOpen(true)}
              size="lg"
              className="bg-[#f2a202] text-[#091b2e] hover:bg-[#f2a202]/90 font-subheading font-semibold text-lg px-8 py-6 group"
            >
              Réserver un appel découverte
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 font-subheading font-medium text-lg px-8 py-6"
              onClick={() => document.getElementById("accompagnements")?.scrollIntoView({ behavior: "smooth" })}
            >
              Découvrir les accompagnements
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground/70 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-body">Accompagnement personnalisé</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-body">Conformité garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-body">Charge mentale allégée</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <CalendlyModal open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen} />
    </section>
  );
};

export default HeroSection;
