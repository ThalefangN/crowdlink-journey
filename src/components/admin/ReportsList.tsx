import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Database } from '@/integrations/supabase/types';

interface ReportsListProps {
  departmentId: string;
}

type Profile = Database['public']['Tables']['profiles']['Row'];
type Report = Database['public']['Tables']['reports']['Row'] & {
  profiles: Profile | null;
};

const ReportsList = ({ departmentId }: ReportsListProps) => {
  const { data: reports } = useQuery({
    queryKey: ['department-reports', departmentId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reports')
        .select(`
          *,
          profiles!reports_user_id_fkey (*)
        `)
        .eq('department_id', departmentId)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      return data as Report[];
    },
  });

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
      <div className="space-y-4">
        {reports?.map((report) => (
          <div key={report.id} className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">{report.category}</p>
              <p className="text-sm text-muted-foreground">
                By: {report.profiles?.full_name || 'Anonymous'}
              </p>
              <p className="text-sm text-muted-foreground">
                {new Date(report.created_at || '').toLocaleDateString()}
              </p>
            </div>
            <Badge
              variant={report.status === 'pending' ? 'secondary' : 'default'}
              className="capitalize"
            >
              {report.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ReportsList;