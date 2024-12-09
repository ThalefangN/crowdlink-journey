import { useState } from "react";
import { AlertTriangle, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const EmergencyButton = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleEmergency = (type: string) => {
    if (navigator.geolocation) {
      setIsSearching(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setTimeout(() => {
            setIsSearching(false);
            toast.success("Help is on the way! Stay calm and stay where you are.");
          }, 3000);
        },
        () => {
          setIsSearching(false);
          toast.error("Please enable location services to get help.");
        }
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="lg" className="w-full">
          <AlertTriangle className="mr-2 h-5 w-5" />
          Emergency Help
        </Button>
      </DialogTrigger>
      <DialogContent>
        {isSearching ? (
          <div className="p-6 text-center">
            <Loader className="h-8 w-8 animate-spin mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Searching for Help</h3>
            <p className="text-sm text-gray-600">Please stay where you are...</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Emergency Assistance</DialogTitle>
              <DialogDescription>
                Select the type of emergency and share your location
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => handleEmergency("medical")}
              >
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                Medical Emergency
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => handleEmergency("police")}
              >
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
                Police Assistance
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => handleEmergency("fire")}
              >
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-2" />
                Fire Emergency
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyButton;