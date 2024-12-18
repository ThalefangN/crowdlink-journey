import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, BellRing, MapPin, Phone, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const DomesticViolence = () => {
  const navigate = useNavigate();
  const [isPanicMode, setIsPanicMode] = useState(false);

  const handlePanic = () => {
    setIsPanicMode(true);
    // Trigger immediate location sharing
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast.success("Location shared. Emergency services have been notified.");
          // In a real app, this would trigger an emergency alert to authorities
        },
        () => {
          toast.error("Please enable location services for emergency assistance.");
        }
      );
    }
    // Simulate emergency response
    setTimeout(() => {
      toast.success("Emergency services are on their way.");
      setIsPanicMode(false);
    }, 2000);
  };

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Report Domestic Violence</h1>
      </div>

      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        {/* Panic Button */}
        <Card className="p-4 bg-red-50">
          <Button 
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 text-lg animate-pulse"
            onClick={handlePanic}
            disabled={isPanicMode}
          >
            <BellRing className="h-6 w-6 mr-2" />
            {isPanicMode ? "Alerting Emergency Services..." : "PANIC BUTTON"}
          </Button>
          <p className="text-sm text-red-600 mt-2 text-center">
            Press in case of immediate danger
          </p>
        </Card>

        {/* Emergency Contacts */}
        <Card className="p-4">
          <h2 className="font-semibold mb-4">Emergency Contacts</h2>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handleEmergencyCall("999")}
            >
              <Phone className="h-4 w-4" />
              Police (999)
            </Button>
            <Button 
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => handleEmergencyCall("3911270")}
            >
              <Phone className="h-4 w-4" />
              Helpline
            </Button>
          </div>
        </Card>

        {/* Report Form */}
        <form className="space-y-4">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Location Details</h2>
            <Button 
              variant="outline" 
              className="w-full mb-4"
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  () => toast.success("Location shared securely"),
                  () => toast.error("Please enable location services")
                );
              }}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Share Location Securely
            </Button>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Incident Details</h2>
            <Textarea 
              placeholder="Describe the situation (This will be kept confidential)..."
              className="min-h-[150px] mb-4"
            />
            <Button type="submit" className="w-full">
              <ShieldAlert className="h-4 w-4 mr-2" />
              Submit Report Confidentially
            </Button>
          </Card>
        </form>

        {/* Safety Information */}
        <Card className="p-4 bg-blue-50">
          <h2 className="font-semibold mb-2">Safety Tips</h2>
          <ul className="text-sm space-y-2 text-blue-800">
            <li>• Have an escape plan ready</li>
            <li>• Keep important documents accessible</li>
            <li>• Save emergency numbers</li>
            <li>• Tell someone you trust</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default DomesticViolence;