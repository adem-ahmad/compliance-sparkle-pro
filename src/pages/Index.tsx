import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AproposSection from "@/components/AproposSection";
import TarifsSection from "@/components/TarifsSection";
import TemoignagesSection from "@/components/TemoignagesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AproposSection />
        <TarifsSection />
        <TemoignagesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
