import { Button } from "@/components/ui/button";
import { Home, FileEdit, Bell, Map, UserRound } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 p-4 pb-20">
        <div className="max-w-md mx-auto space-y-6 animate-fade-in">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome to CrowdLink</h1>
            <p className="text-gray-600">Stay connected with your community</p>
          </div>

          {/* Add your home screen content here */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold mb-2">Recent Reports</h2>
              <p className="text-gray-600">No reports yet</p>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold mb-2">Community Updates</h2>
              <p className="text-gray-600">No updates yet</p>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold mb-2">Nearby Events</h2>
              <p className="text-gray-600">No events yet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="max-w-md mx-auto flex justify-around p-4">
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <FileEdit className="h-5 w-5" />
            <span className="text-xs">Report</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Bell className="h-5 w-5" />
            <span className="text-xs">Alerts</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Map className="h-5 w-5" />
            <span className="text-xs">Map</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <UserRound className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;