import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Plus, Minus, AlertTriangle, Zap, Car } from "lucide-react";
import { useState } from "react";

const MapScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState<null | {
    title: string;
    type: string;
    time: string;
    location: string;
  }>(null);

  const sampleEvents = [
    {
      title: "Traffic Accident",
      type: "accident",
      time: "10 mins ago",
      location: "Western Bypass, Gaborone",
      coordinates: { lat: -24.6282, lng: 25.9231 }
    },
    {
      title: "Power Outage",
      type: "utility",
      time: "30 mins ago",
      location: "Block 7, Gaborone",
      coordinates: { lat: -24.6572, lng: 25.9089 }
    },
    {
      title: "Suspicious Activity",
      type: "crime",
      time: "1 hour ago",
      location: "Phase 4, Phakalane",
      coordinates: { lat: -24.5521, lng: 25.9436 }
    }
  ];

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
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            Crime
          </Button>
          <Button variant="outline" size="sm">
            <Car className="h-4 w-4 text-yellow-500 mr-2" />
            Traffic
          </Button>
          <Button variant="outline" size="sm">
            <Zap className="h-4 w-4 text-green-500 mr-2" />
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

        {/* Sample Event Markers */}
        {sampleEvents.map((event, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="absolute bg-white"
            style={{
              top: `${30 + index * 15}%`,
              left: `${30 + index * 15}%`,
            }}
            onClick={() => setSelectedEvent(event)}
          >
            <MapPin className="h-4 w-4 text-red-500" />
          </Button>
        ))}

        {selectedEvent && (
          <Card className="absolute bottom-4 left-4 right-4 p-4 bg-white">
            <h3 className="font-semibold mb-2">{selectedEvent.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{selectedEvent.location}</p>
            <p className="text-xs text-gray-500">{selectedEvent.time}</p>
            <Button 
              className="w-full mt-2"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </Button>
          </Card>
        )}

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
            <AlertTriangle className="h-4 w-4 text-red-500" />
            Crime
          </div>
          <div className="flex items-center gap-2">
            <Car className="h-4 w-4 text-yellow-500" />
            Traffic
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-green-500" />
            Utilities
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-500" />
            Environment
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MapScreen;