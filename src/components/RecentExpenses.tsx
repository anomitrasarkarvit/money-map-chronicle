import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, ShoppingCart, Car, Utensils, Gamepad2, Zap, Heart } from 'lucide-react';

const RecentExpenses = () => {
  const expenses = [
    {
      id: 1,
      description: 'Grocery Shopping',
      amount: -85.50,
      category: 'food',
      date: '2024-01-15',
      icon: Utensils
    },
    {
      id: 2,
      description: 'Gas Station',
      amount: -45.00,
      category: 'transport',
      date: '2024-01-14',
      icon: Car
    },
    {
      id: 3,
      description: 'Netflix Subscription',
      amount: -15.99,
      category: 'entertainment',
      date: '2024-01-14',
      icon: Gamepad2
    },
    {
      id: 4,
      description: 'Online Shopping',
      amount: -129.99,
      category: 'shopping',
      date: '2024-01-13',
      icon: ShoppingCart
    },
    {
      id: 5,
      description: 'Electricity Bill',
      amount: -78.50,
      category: 'bills',
      date: '2024-01-12',
      icon: Zap
    },
    {
      id: 6,
      description: 'Gym Membership',
      amount: -39.99,
      category: 'health',
      date: '2024-01-11',
      icon: Heart
    }
  ];

  const getCategoryBadge = (category: string) => {
    const categoryStyles = {
      food: 'expense-category-food',
      transport: 'expense-category-transport',
      shopping: 'expense-category-shopping',
      entertainment: 'expense-category-entertainment',
      bills: 'expense-category-bills',
      health: 'expense-category-health'
    };
    
    return categoryStyles[category as keyof typeof categoryStyles] || 'bg-muted';
  };

  return (
    <Card className="financial-card animate-slide-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Recent Expenses</CardTitle>
        <Button className="bg-gradient-primary text-white shadow-[var(--shadow-financial)]">
          <Plus className="h-4 w-4 mr-2" />
          Add Expense
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenses.map((expense) => {
            const IconComponent = expense.icon;
            return (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 bg-gradient-card rounded-lg border hover:shadow-md transition-[var(--transition-smooth)]"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${getCategoryBadge(expense.category)}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{expense.description}</p>
                    <p className="text-sm text-muted-foreground">{expense.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={getCategoryBadge(expense.category)}>
                    {expense.category}
                  </Badge>
                  <span className="font-semibold text-lg text-destructive">
                    ${Math.abs(expense.amount).toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentExpenses;