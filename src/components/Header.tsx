import { Wallet, Plus, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-[var(--shadow-financial)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Expense Tracker</h1>
              <p className="text-primary-foreground/80 text-sm">
                by <a 
                  href="https://lavanyavajpayee.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-white transition-colors"
                >
                  Lavanya Vajpayee
                </a>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;