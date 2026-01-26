import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemeSection from "@/components/ProblemeSection";
import MethodeSection from "@/components/MethodeSection";
import AccompagnementsSection from "@/components/AccompagnementsSection";
import TarifsSection from "@/components/TarifsSection";
import AproposSection from "@/components/AproposSection";
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
        <ProblemeSection />
        <MethodeSection />
        <AccompagnementsSection />
        <TarifsSection />
        <AproposSection />
        <TemoignagesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
