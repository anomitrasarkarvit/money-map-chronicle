import { CreditCard, PiggyBank, Landmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WalletCards = () => {
  const wallets = [
    {
      id: 1,
      name: 'Main Wallet',
      balance: 2450.00,
      type: 'cash',
      icon: PiggyBank,
      color: 'bg-gradient-success'
    },
    {
      id: 2,
      name: 'Credit Card',
      balance: -850.00,
      type: 'credit',
      icon: CreditCard,
      color: 'bg-gradient-primary'
    },
    {
      id: 3,
      name: 'Savings Account',
      balance: 15750.00,
      type: 'savings',
      icon: Landmark,
      color: 'bg-info'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {wallets.map((wallet) => {
        const IconComponent = wallet.icon;
        return (
          <Card key={wallet.id} className="financial-card-elevated animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${wallet.color} shadow-lg`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{wallet.name}</p>
                  <p className={`text-2xl font-bold ${wallet.balance < 0 ? 'text-destructive' : 'text-success'}`}>
                    ${Math.abs(wallet.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${wallet.color}`} 
                  style={{ width: '75%' }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {wallet.type === 'credit' ? 'Available Credit' : 'Monthly Budget'}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default WalletCards;