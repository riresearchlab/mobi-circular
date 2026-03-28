import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveStatsBar from "@/components/LiveStatsBar";
import SystemArchitecture from "@/components/SystemArchitecture";
import MaterialsRecovery from "@/components/MaterialsRecovery";
import RoadmapSection from "@/components/RoadmapSection";
import ImpactSection from "@/components/ImpactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LiveStatsBar />
      <SystemArchitecture />
      <MaterialsRecovery />
      <RoadmapSection />
      <ImpactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
