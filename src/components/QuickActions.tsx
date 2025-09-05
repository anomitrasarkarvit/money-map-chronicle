import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Target, TrendingUp, Download, Smartphone } from 'lucide-react';

const QuickActions = () => {
  return (
    <Card className="financial-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          className="w-full bg-gradient-primary text-white hover:shadow-[var(--shadow-financial)] transition-[var(--transition-spring)]"
          size="lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Expense
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full hover:bg-muted transition-[var(--transition-smooth)]"
        >
          <Target className="h-4 w-4 mr-2" />
          Set Budget Goal
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full hover:bg-muted transition-[var(--transition-smooth)]"
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          View Analytics
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full hover:bg-muted transition-[var(--transition-smooth)]"
        >
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>

        {/* Mobile App Placeholder */}
        <div className="mt-6 p-4 bg-gradient-card rounded-lg border border-dashed border-muted-foreground/30">
          <div className="text-center space-y-3">
            <div className="bg-muted p-3 rounded-full w-fit mx-auto">
              <Smartphone className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Mobile App Coming Soon</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Built with React Native & Expo Router
              </p>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>✓ Firebase Backend Integration</p>
              <p>✓ REST API Endpoints</p>
              <p>✓ Cross-platform Support</p>
              <p>✓ Real-time Sync</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-3"
              disabled
            >
              <Download className="h-3 w-3 mr-2" />
              Download APK (Coming Soon)
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;