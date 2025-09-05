import HeroSection from '@/components/HeroSection';
import ProjectFeatures from '@/components/ProjectFeatures';
import TechStack from '@/components/TechStack';
import ProjectPreview from '@/components/ProjectPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Project Features */}
      <ProjectFeatures />
      
      {/* Tech Stack */}
      <TechStack />
      
      {/* App Preview */}
      <ProjectPreview />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;