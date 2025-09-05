import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      techs: ['React Native', 'Expo Router', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      techs: ['Firebase', 'Cloud Firestore', 'Firebase Auth', 'Cloud Functions']
    },
    {
      category: 'Development',
      techs: ['Expo CLI', 'React Navigation', 'Async Storage', 'React Hook Form']
    },
    {
      category: 'Analytics & UI',
      techs: ['Recharts', 'React Native Reanimated', 'Expo Notifications', 'Expo Camera']
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Built with modern technologies for performance, scalability, and maintainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, index) => (
            <Card 
              key={index} 
              className="portfolio-card-elevated bg-white/10 border-white/20 backdrop-blur-xl hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="tech-badge w-full text-center transition-[var(--transition-smooth)] hover:bg-white/20"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Repository CTA */}
        <div className="text-center mt-16">
          <Card className="portfolio-card-elevated bg-white/5 border-white/20 backdrop-blur-xl hover-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                🚀 Full Source Code Available
              </h3>
              <p className="text-white/70 mb-6">
                Explore the complete codebase, including REST API endpoints, Firebase integration, 
                and mobile app architecture on GitHub.
              </p>
              <a 
                href="https://github.com/LavanyaVajpayee/expense-tracker"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 tech-badge hover:bg-white/20 transition-[var(--transition-spring)]"
              >
                View Repository →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;