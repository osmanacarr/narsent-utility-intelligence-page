
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import FeatureCards from "@/components/FeatureCards";
import ComplianceSection from "@/components/ComplianceSection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <CaseStudyCard />
        <FeatureCards />
        <ComplianceSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
