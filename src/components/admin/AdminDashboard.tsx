import React from 'react';
import { Layout } from './Layout';
import { Card } from '@/components/ui/card';
import {
  BarChart,
  Users,
  AlertTriangle,
  MapPin,
  Shield,
  Leaf,
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: <Users className="h-6 w-6" />,
      change: '+12%',
    },
    {
      title: 'Active Reports',
      value: '156',
      icon: <AlertTriangle className="h-6 w-6" />,
      change: '+8%',
    },
    {
      title: 'Environmental Cases',
      value: '89',
      icon: <Leaf className="h-6 w-6" />,
      change: '+23%',
    },
    {
      title: 'Emergency Alerts',
      value: '45',
      icon: <Shield className="h-6 w-6" />,
      change: '+5%',
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-muted-foreground">{stat.icon}</div>
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.title}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
            <div className="space-y-4">
              {/* Placeholder for reports list */}
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Environmental Report #123</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                  Pending
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Domestic Violence Case #456</p>
                  <p className="text-sm text-muted-foreground">5 hours ago</p>
                </div>
                <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                  Urgent
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Location Overview</h3>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Active Reports by Location</span>
            </div>
            <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-lg">
              {/* Placeholder for map visualization */}
              <p className="text-muted-foreground">Map Visualization</p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;