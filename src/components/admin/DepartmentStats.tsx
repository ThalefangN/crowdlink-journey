import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { BarChart, Users, AlertTriangle, Shield } from 'lucide-react';

interface DepartmentStatsProps {
  departmentId: string;
}

const DepartmentStats = ({ departmentId }: DepartmentStatsProps) => {
  const { data: stats } = useQuery({
    queryKey: ['department-stats', departmentId],
    queryFn: async () => {
      const { data: reports } = await supabase
        .from('reports')
        .select('*')
        .eq('department_id', departmentId);

      const { data: totalUsers } = await supabase
        .from('profiles')
        .select('count');

      return {
        totalReports: reports?.length || 0,
        pendingReports: reports?.filter(r => r.status === 'pending').length || 0,
        resolvedReports: reports?.filter(r => r.status === 'resolved').length || 0,
        totalUsers: totalUsers?.[0]?.count || 0,
      };
    },
  });

  const statItems = [
    {
      title: 'Total Reports',
      value: stats?.totalReports || 0,
      icon: <BarChart className="h-6 w-6" />,
      change: '+12%',
    },
    {
      title: 'Pending Reports',
      value: stats?.pendingReports || 0,
      icon: <AlertTriangle className="h-6 w-6" />,
      change: '+8%',
    },
    {
      title: 'Resolved Reports',
      value: stats?.resolvedReports || 0,
      icon: <Shield className="h-6 w-6" />,
      change: '+23%',
    },
    {
      title: 'Total Users',
      value: stats?.totalUsers || 0,
      icon: <Users className="h-6 w-6" />,
      change: '+5%',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((stat, index) => (
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
  );
};

export default DepartmentStats;