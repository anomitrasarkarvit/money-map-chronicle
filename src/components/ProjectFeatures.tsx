import { Card, CardContent } from '@/components/ui/card';
import { Wallet, TrendingUp, PieChart, Calendar, Shield, Zap } from 'lucide-react';

const ProjectFeatures = () => {
  const features = [
    {
      icon: Wallet,
      title: 'Multi-Wallet Support',
      description: 'Manage multiple accounts including cash, credit cards, and savings with real-time balance tracking.'
    },
    {
      icon: PieChart,
      title: 'Visual Analytics',
      description: 'Beautiful charts and graphs that help you understand your spending patterns and make better financial decisions.'
    },
    {
      icon: Calendar,
      title: 'Daily Expense Tracking',
      description: 'Quick and intuitive expense entry with smart categorization and date-based organization.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Insights',
      description: 'AI-powered spending insights and personalized recommendations to help you save money.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'End-to-end encryption with Firebase security ensuring your financial data stays protected.'
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description: 'Seamless synchronization across all your devices with offline-first architecture.'
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to take control of your finances in one beautiful, intuitive mobile app.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="portfolio-card-elevated bg-white/10 border-white/20 backdrop-blur-xl hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="bg-gradient-primary p-4 rounded-2xl shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatures;