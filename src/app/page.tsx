import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import AIShowcase from "@/components/AIShowcase";
import EmbeddedSystems from "@/components/EmbeddedSystems";
import ProjectShowcase from "@/components/ProjectShowcase";
import QuickDelivery from "@/components/QuickDelivery";
import MaintenancePlan from "@/components/MaintenancePlan";
import UIRetouch from "@/components/UIRetouch";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <AIShowcase />
      <EmbeddedSystems />
      <ProjectShowcase />
      <QuickDelivery />
      <MaintenancePlan />
      <UIRetouch />
      <Work />
      <Footer />
    </main>
  );
}
