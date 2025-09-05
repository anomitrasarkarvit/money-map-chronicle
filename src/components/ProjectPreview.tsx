import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { CreditCard, PiggyBank, Landmark, Smartphone } from 'lucide-react';

const ProjectPreview = () => {
  // Sample data for preview
  const categoryData = [
    { name: 'Food', value: 450, color: '#EF4444' },
    { name: 'Transport', value: 320, color: '#3B82F6' },
    { name: 'Shopping', value: 280, color: '#8B5CF6' },
    { name: 'Bills', value: 650, color: '#64748B' }
  ];

  const weeklyData = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 78 },
    { day: 'Wed', amount: 125 },
    { day: 'Thu', amount: 89 },
    { day: 'Fri', amount: 156 },
    { day: 'Sat', amount: 234 },
    { day: 'Sun', amount: 67 }
  ];

  const wallets = [
    { name: 'Main Wallet', balance: 2450.00, icon: PiggyBank, color: 'bg-success' },
    { name: 'Credit Card', balance: -850.00, icon: CreditCard, color: 'bg-info' },
    { name: 'Savings', balance: 15750.00, icon: Landmark, color: 'bg-primary' }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            App Preview
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get a glimpse of the beautiful, intuitive interface designed for seamless expense tracking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Wallet Overview */}
          <Card className="portfolio-card-elevated bg-white/10 border-white/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl">💰 Wallet Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {wallets.map((wallet, index) => {
                const IconComponent = wallet.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${wallet.color}`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{wallet.name}</span>
                    </div>
                    <span className={`font-bold ${wallet.balance < 0 ? 'text-red-400' : 'text-green-400'}`}>
                      ${Math.abs(wallet.balance).toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card className="portfolio-card-elevated bg-white/10 border-white/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl">📊 Spending Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Amount']}
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.1)', 
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(12px)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Trends */}
        <Card className="portfolio-card-elevated bg-white/10 border-white/20 backdrop-blur-xl mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl">📈 Weekly Spending Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="day" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Amount']}
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.1)', 
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(12px)'
                    }}
                  />
                  <Bar dataKey="amount" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Mobile App Status */}
        <div className="text-center">
          <Card className="portfolio-card-elevated bg-white/5 border-white/20 backdrop-blur-xl max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                  <Smartphone className="h-12 w-12 text-white" />
                </div>
                <Badge variant="outline" className="border-green-400 text-green-400 bg-green-400/10">
                  🚀 In Development
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Mobile App Coming Soon
              </h3>
              <p className="text-white/70 mb-6 text-lg">
                Full React Native mobile application with cross-platform support, 
                offline capabilities, and real-time synchronization.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/60">
                <div>✓ iOS & Android Support</div>
                <div>✓ Offline-First Architecture</div>
                <div>✓ Push Notifications</div>
                <div>✓ Biometric Authentication</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;