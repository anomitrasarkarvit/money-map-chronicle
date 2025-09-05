import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Smartphone, Play } from 'lucide-react';
import heroImage from '@/assets/expense-tracker-hero.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="tech-badge">📱 Mobile App Project</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Expense
              <span className="block bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent animate-glow">
                Tracker
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg">
              A beautiful, intuitive expense tracking mobile app built with React Native, Expo Router, and Firebase. 
              Track your daily expenses with style and precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-[var(--shadow-hero)] hover-glow"
              asChild
            >
              <a 
                href="https://github.com/LavanyaVajpayee/expense-tracker" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Live Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 text-white/70 text-sm justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Built by <a href="https://lavanyavajpayee.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors underline">Lavanya Vajpayee</a></span>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-info/20 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500" />
            <div className="relative hero-card rounded-3xl overflow-hidden shadow-[var(--shadow-hero)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-spring)]">
              <img 
                src={heroImage} 
                alt="Expense Tracker App Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 hero-card rounded-2xl p-4 animate-float">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute -bottom-6 -left-6 hero-card rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
            <span className="text-2xl">💰</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;