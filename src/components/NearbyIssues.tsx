import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NearbyIssues = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 space-y-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search for incidents"
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button variant="outline" size="sm">
            <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
            Crime
          </Button>
          <Button variant="outline" size="sm">
            <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2" />
            Traffic
          </Button>
          <Button variant="outline" size="sm">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
            Utilities
          </Button>
        </div>

        <select className="w-full p-2 rounded-md border border-gray-200">
          <option value="1">Within 1 km</option>
          <option value="5">Within 5 km</option>
          <option value="10">Within 10 km</option>
          <option value="20">Within 20 km</option>
        </select>
      </div>

      <div className="p-4 space-y-4">
        {[
          {
            type: "Crime",
            title: "Burglary at Block 6, Gaborone",
            time: "10 mins ago",
            distance: "2 km away",
            status: "Active",
            color: "bg-red-500"
          },
          {
            type: "Power",
            title: "Power outage in Mogoditshane",
            time: "30 mins ago",
            distance: "4 km away",
            status: "Pending",
            color: "bg-yellow-500"
          },
          {
            type: "Traffic",
            title: "Traffic jam at Fairgrounds, Gaborone",
            time: "1 hr ago",
            distance: "3.5 km away",
            status: "Resolved",
            color: "bg-green-500"
          }
        ].map((issue, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start gap-3">
              <span className={`h-2 w-2 rounded-full ${issue.color} mt-2`} />
              <div className="flex-1">
                <h3 className="font-medium">{issue.title}</h3>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>{issue.time}</p>
                  <p>{issue.distance}</p>
                  <p>Status: {issue.status}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}

        <Button variant="outline" className="w-full">
          Load More Issues
        </Button>

        <Button 
          className="w-full" 
          onClick={() => navigate('/map')}
        >
          <MapPin className="h-4 w-4 mr-2" />
          View Nearby Issues on Map
        </Button>
      </div>
    </div>
  );
};

export default NearbyIssues;