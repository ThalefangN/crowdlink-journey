import { Button } from "@/components/ui/button";
import {
  Home,
  FileEdit,
  Bell,
  Map,
  UserRound,
  Search,
  Plus,
  Phone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ActivityOverview from "./ActivityOverview";
import NotificationBar from "./NotificationBar";
import EmergencyButton from "./EmergencyButton";
import NewsFeed from "./NewsFeed";

const HomePage = () => {
  const navigate = useNavigate();

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Search Bar and Notifications */}
      <div className="sticky top-0 bg-white shadow-sm p-4 z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-primary">Hello, User!</h2>
          <NotificationBar />
        </div>
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="search"
            placeholder="Search for reports, areas, or users"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex-1 p-4 pb-20 max-w-2xl mx-auto space-y-6">
        {/* Emergency Button */}
        <EmergencyButton />

        {/* Activity Overview */}
        <ActivityOverview />

        {/* News Feed */}
        <NewsFeed />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card 
            className="p-4 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer" 
            onClick={() => navigate('/quick-report')}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <h3 className="font-semibold">Quick Report</h3>
            </div>
            <p className="text-sm text-gray-600">Emergency reporting</p>
          </Card>
          <Card 
            className="p-4 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
            onClick={() => navigate('/nearby-issues')}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <h3 className="font-semibold">Nearby Issues</h3>
            </div>
            <p className="text-sm text-gray-600">8 reports nearby</p>
          </Card>
        </div>

        {/* Support Services */}
        <div className="grid grid-cols-2 gap-4">
          <Card 
            className="p-4 bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer"
            onClick={() => navigate('/mental-health')}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <h3 className="font-semibold">Mental Health</h3>
            </div>
            <p className="text-sm text-gray-600">24/7 crisis support</p>
          </Card>
          <Card 
            className="p-4 bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer"
            onClick={() => navigate('/report-corruption')}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <h3 className="font-semibold">Report Corruption</h3>
            </div>
            <p className="text-sm text-gray-600">Anonymous reporting</p>
          </Card>
        </div>

        {/* Emergency Hotlines */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Emergency Hotlines</h3>
          <div className="grid grid-cols-3 gap-2">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handleEmergencyCall("999")}
            >
              <Phone className="h-4 w-4" />
              Police
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handleEmergencyCall("998")}
            >
              <Phone className="h-4 w-4" />
              Fire
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handleEmergencyCall("997")}
            >
              <Phone className="h-4 w-4" />
              Medical
            </Button>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto flex justify-around p-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/home')}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/report')}
          >
            <FileEdit className="h-5 w-5" />
            <span className="text-xs">Report</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/alerts')}
          >
            <Bell className="h-5 w-5" />
            <span className="text-xs">Alerts</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/map')}
          >
            <Map className="h-5 w-5" />
            <span className="text-xs">Map</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/profile')}
          >
            <UserRound className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;