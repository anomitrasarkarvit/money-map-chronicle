import Header from '@/components/Header';
import WalletCards from '@/components/WalletCards';
import ExpenseChart from '@/components/ExpenseChart';
import RecentExpenses from '@/components/RecentExpenses';
import QuickActions from '@/components/QuickActions';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Summary Cards */}
        <WalletCards />
        
        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExpenseChart />
          <QuickActions />
        </div>
        
        {/* Recent Expenses */}
        <RecentExpenses />
      </main>
    </div>
  );
};

export default Index;