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
  AlertTriangle,
  MapPin,
  Heart,
  Leaf,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import ActivityOverview from "./ActivityOverview";

const data = [
  { name: "Crime", value: 20 },
  { name: "Utilities", value: 35 },
  { name: "Traffic", value: 45 },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handlePhoneCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Search Bar */}
      <div className="sticky top-0 bg-white shadow-sm p-4 z-10">
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
        {/* Welcome Message */}
        <div className="bg-primary/10 rounded-xl p-4">
          <h2 className="font-semibold text-primary">Hello, User!</h2>
          <p className="text-sm text-gray-600">Stay safe and informed today.</p>
        </div>

        {/* Report Types */}
        <Card className="p-4 space-y-4">
          <h3 className="font-semibold">Types of Reports</h3>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <Button variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Crime
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              Traffic
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Utilities
            </Button>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1" onClick={() => navigate('/report')}>
              <Plus className="h-4 w-4 mr-2" />
              Make a Report
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => navigate('/alerts')}>
              View All
            </Button>
          </div>
        </Card>

        {/* Extended Incident Categories */}
        <div className="grid grid-cols-2 gap-4 p-4">
          <Card 
            className="p-4 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer"
            onClick={() => navigate('/report-corruption')}
          >
            <AlertTriangle className="h-6 w-6 text-red-500 mb-2" />
            <h3 className="font-semibold">Report Corruption</h3>
            <p className="text-sm text-gray-600">Anonymous reporting available</p>
          </Card>
          
          <Card 
            className="p-4 bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer"
            onClick={() => navigate('/mental-health')}
          >
            <Heart className="h-6 w-6 text-purple-500 mb-2" />
            <h3 className="font-semibold">Mental Health Support</h3>
            <p className="text-sm text-gray-600">24/7 crisis helpline</p>
          </Card>

          <Card 
            className="p-4 bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer"
            onClick={() => navigate('/domestic-violence')}
          >
            <Home className="h-6 w-6 text-orange-500 mb-2" />
            <h3 className="font-semibold">Domestic Violence</h3>
            <p className="text-sm text-gray-600">Get help immediately</p>
          </Card>

          <Card 
            className="p-4 bg-green-50 hover:bg-green-100 transition-colors cursor-pointer"
            onClick={() => navigate('/environmental')}
          >
            <Leaf className="h-6 w-6 text-green-500 mb-2" />
            <h3 className="font-semibold">Environmental Issues</h3>
            <p className="text-sm text-gray-600">Report environmental concerns</p>
          </Card>
        </div>

        {/* Activity Overview */}
        <ActivityOverview />

        {/* Incident Overview Graph */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Incident Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Updated Emergency Hotlines */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Emergency Hotlines</h3>
          <div className="grid grid-cols-3 gap-2">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handlePhoneCall('999')}
            >
              <Phone className="h-4 w-4" />
              Police
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handlePhoneCall('998')}
            >
              <Phone className="h-4 w-4" />
              Fire
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handlePhoneCall('997')}
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
