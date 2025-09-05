import { Github, ExternalLink, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Expense Tracker
            </h3>
            <p className="text-white/70 max-w-md mx-auto">
              A modern expense tracking solution built with cutting-edge mobile technologies.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
            <a 
              href="https://github.com/LavanyaVajpayee/expense-tracker"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub Repository
            </a>
            <a 
              href="https://lavanyavajpayee.netlify.app"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              Portfolio
            </a>
            <a 
              href="mailto:lavanya@example.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              Contact
            </a>
          </div>

          {/* Credit */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              © 2024 Built with ❤️ by{' '}
              <a 
                href="https://lavanyavajpayee.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary-light transition-colors"
              >
                Lavanya Vajpayee
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;