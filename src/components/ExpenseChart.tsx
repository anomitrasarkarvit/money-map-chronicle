import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ExpenseChart = () => {
  const categoryData = [
    { name: 'Food & Dining', value: 450, color: 'hsl(var(--category-food))' },
    { name: 'Transportation', value: 320, color: 'hsl(var(--category-transport))' },
    { name: 'Shopping', value: 280, color: 'hsl(var(--category-shopping))' },
    { name: 'Entertainment', value: 180, color: 'hsl(var(--category-entertainment))' },
    { name: 'Bills & Utilities', value: 650, color: 'hsl(var(--category-bills))' },
    { name: 'Health & Fitness', value: 120, color: 'hsl(var(--category-health))' }
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

  return (
    <div className="space-y-6">
      {/* Category Breakdown */}
      <Card className="financial-card animate-fade-in">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Spending by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Trends */}
      <Card className="financial-card animate-fade-in">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">This Week's Spending</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                <Bar dataKey="amount" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseChart;