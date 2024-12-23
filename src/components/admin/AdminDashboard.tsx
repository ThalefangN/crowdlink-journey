import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { supabase } from '@/integrations/supabase/client';
import DepartmentStats from './DepartmentStats';
import ReportsList from './ReportsList';
import UsersList from './UsersList';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const AdminDashboard = () => {
  const [departmentId, setDepartmentId] = useState<string | null>(null);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  useEffect(() => {
    const getAdminDepartment = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setAdminEmail(user.email);
        const { data: department } = await supabase
          .from('departments')
          .select('id')
          .eq('email', user.email)
          .single();
        
        if (department) {
          setDepartmentId(department.id);
        }
      }
    };

    getAdminDepartment();
  }, []);

  if (!departmentId) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <DepartmentStats departmentId={departmentId} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <ReportsList departmentId={departmentId} />
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Location Overview</h3>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Active Reports by Location</span>
            </div>
            <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-lg">
              {/* Map visualization will be implemented in the next iteration */}
              <p className="text-muted-foreground">Map Visualization</p>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <UsersList />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
