import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AproposSection from "@/components/AproposSection";
import AccompagnementsSection from "@/components/AccompagnementsSection";
import TarifsSection from "@/components/TarifsSection";
import TemoignagesSection from "@/components/TemoignagesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AproposSection />
        <AccompagnementsSection />
        <TarifsSection />
        <TemoignagesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
