import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from 'react';

const UsersList = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const { data: users } = useQuery({
    queryKey: ['users-list'],
    queryFn: async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      return data;
    },
  });

  return (
    <>
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Registered Users</h3>
        <div className="space-y-4">
          {users?.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between py-2 border-b cursor-pointer hover:bg-gray-50"
              onClick={() => setSelectedUser(user)}
            >
              <div>
                <p className="font-medium">{user.full_name || 'Unnamed User'}</p>
                <p className="text-sm text-muted-foreground">ID: {user.omang_id || 'Not provided'}</p>
              </div>
              <Badge
                variant={user.verified ? 'success' : 'warning'}
                className="capitalize"
              >
                {user.verification_status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Personal Information</h4>
                <p>Full Name: {selectedUser.full_name || 'Not provided'}</p>
                <p>Omang ID: {selectedUser.omang_id || 'Not provided'}</p>
                <p>Phone: {selectedUser.phone || 'Not provided'}</p>
              </div>
              <div>
                <h4 className="font-semibold">Verification Status</h4>
                <Badge
                  variant={selectedUser.verified ? 'success' : 'warning'}
                  className="capitalize"
                >
                  {selectedUser.verification_status}
                </Badge>
              </div>
              {selectedUser.verification_documents && (
                <div>
                  <h4 className="font-semibold">Verification Documents</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedUser.verification_documents.map((doc: string, index: number) => (
                      <img
                        key={index}
                        src={doc}
                        alt={`Verification document ${index + 1}`}
                        className="w-full h-32 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UsersList;