import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight } from "lucide-react";

const AlertsScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 shadow-sm">
        <h1 className="text-lg font-semibold mb-4">Community Alerts</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search Alerts by Category or Location"
            className="pl-10"
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
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

        <div className="space-y-4">
          {[
            {
              type: "crime",
              title: "Burglary reported near Pine Street",
              time: "10 mins ago",
              status: "Active",
            },
            {
              type: "utilities",
              title: "Power outage resolved in Elmwood",
              time: "1 hr ago",
              status: "Resolved",
            },
          ].map((alert, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start gap-3">
                <span
                  className={`h-2 w-2 rounded-full mt-2 ${
                    alert.type === "crime" ? "bg-red-500" : "bg-green-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="font-medium">{alert.title}</p>
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                    <span>{alert.time}</span>
                    <span>{alert.status}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Button className="w-full" variant="outline">
          Load More Alerts
        </Button>
      </div>
    </div>
  );
};

export default AlertsScreen;