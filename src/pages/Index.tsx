
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyNarsentSection from "@/components/WhyNarsentSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import VisionaryStackSection from "@/components/VisionaryStackSection";
import PlatformArchitectureSection from "@/components/PlatformArchitectureSection";
import InsightEconomySection from "@/components/InsightEconomySection";
import FeatureCards from "@/components/FeatureCards";
import ComplianceSection from "@/components/ComplianceSection";
import GlobalStrategySection from "@/components/GlobalStrategySection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <HeroSection />
        <WhyNarsentSection />
        <HowItWorksSection />
        <InsightEconomySection />
        <VisionaryStackSection />
        <PlatformArchitectureSection />
        <CaseStudyCard />
        <FeatureCards />
        <ComplianceSection />
        <GlobalStrategySection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
