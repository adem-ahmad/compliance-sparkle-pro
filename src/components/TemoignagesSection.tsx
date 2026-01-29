import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TemoignagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "J'ai enfin compris ce que je devais faire pour être en règle. Mériem a pris le temps de tout m'expliquer.",
      author: "Sophie",
      role: "Formatrice indépendante",
    },
    {
      quote:
        "Grâce à cet accompagnement, nous avons obtenu Qualiopi du premier coup. Un vrai soulagement.",
      author: "Marc",
      role: "Directeur d'organisme de formation",
    },
    {
      quote:
        "Une expertise rare, un accompagnement humain et professionnel. Je recommande vivement.",
      author: "Claire",
      role: "Consultante RH",
    },
    {
      quote:
        "Le processus NDA m'a toujours semblé complexe. Mériem a simplifié chaque étape. Merci !",
      author: "Thomas",
      role: "Coach professionnel",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-subheading font-medium text-sm uppercase tracking-wider">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
              Mes clients témoignent
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-primary mb-6" />

              {/* Testimonial */}
              <blockquote className="text-xl md:text-2xl font-body italic mb-8 min-h-[100px]">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-primary">
                    {testimonials[currentIndex].author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-subheading font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-white/70 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-white/20 text-white hover:bg-white/10 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-white/20 text-white hover:bg-white/10 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemoignagesSection;
