import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const ProfileScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">User Name</h1>
            <p className="text-sm text-gray-500">user@example.com</p>
            <Badge className="mt-1">✓ Verified</Badge>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        <Card className="p-4">
          <h2 className="font-semibold mb-4">Activity Overview</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Reports</span>
              <span className="font-medium">20</span>
            </div>
            <div className="flex justify-between">
              <span>Verified Reports</span>
              <span className="font-medium">15</span>
            </div>
            <div className="flex justify-between">
              <span>Pending Reports</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between">
              <span>Community Rank</span>
              <span className="font-medium">#3</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Report History</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Traffic Jam on Elm Street</p>
                <p className="text-sm text-gray-500">Pending</p>
              </div>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Broken Streetlight on River Rd</p>
                <p className="text-sm text-gray-500">Verified</p>
              </div>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            View Full Report History
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label>Push Notifications</label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <label>Email Alerts</label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <label>Report Updates</label>
              <Switch />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Account Management</h2>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-between">
              Change Email
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Change Password
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="destructive" className="w-full">
              Delete Account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileScreen;