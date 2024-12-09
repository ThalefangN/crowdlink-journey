import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Plus, Minus } from "lucide-react";

const MapScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search Location or Incident"
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
      </div>

      <div className="relative h-[calc(100vh-200px)] bg-gray-200">
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <Button variant="outline" size="icon" className="bg-white">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white">
            <Minus className="h-4 w-4" />
          </Button>
        </div>

        <Button
          variant="outline"
          className="absolute bottom-4 right-4 bg-white"
          size="sm"
        >
          <MapPin className="h-4 w-4 mr-2" />
          Center on My Location
        </Button>
      </div>

      <Card className="m-4 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Legend</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Crime
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            Traffic
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Utilities
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Environment
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MapScreen;