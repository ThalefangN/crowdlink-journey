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
  Trophy,
  ChevronRight,
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

const data = [
  { name: "Crime", value: 20 },
  { name: "Utilities", value: 35 },
  { name: "Traffic", value: 45 },
];

const HomePage = () => {
  const navigate = useNavigate();

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

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer" onClick={() => navigate('/alerts')}>
            <AlertTriangle className="h-6 w-6 text-red-500 mb-2" />
            <h3 className="font-semibold">Quick Report</h3>
            <p className="text-sm text-gray-600">Emergency reporting</p>
          </Card>
          <Card className="p-4 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer" onClick={() => navigate('/map')}>
            <MapPin className="h-6 w-6 text-blue-500 mb-2" />
            <h3 className="font-semibold">Nearby Issues</h3>
            <p className="text-sm text-gray-600">8 reports nearby</p>
          </Card>
        </div>

        {/* Activity Overview */}
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Activity Overview</h3>
            <Trophy className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Reports</span>
              <span className="font-semibold">20</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Verified Reports</span>
              <span className="font-semibold">15</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Community Rank</span>
              <span className="font-semibold">#3</span>
            </div>
          </div>
        </Card>

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

        {/* Community Updates */}
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Community Updates</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate('/alerts')}>
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-red-500 mt-2" />
              <div>
                <p className="text-sm font-medium">Burglary near Pine Street</p>
                <p className="text-xs text-gray-500">20 mins ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-yellow-500 mt-2" />
              <div>
                <p className="text-sm font-medium">Traffic jam on Main Street</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Emergency Hotlines */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Emergency Hotlines</h3>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Police
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Fire
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
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
