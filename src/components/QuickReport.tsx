import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, Video, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const QuickReport = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    toast.success("Emergency report submitted successfully!");
    setTimeout(() => navigate("/home"), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Quick Report</h1>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-4">
          <h2 className="font-semibold mb-4">1. Select an Emergency Type</h2>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
              I'm being attacked
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2" />
              There's a robbery
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
              Power outage
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
              Water leak
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
              Vehicle accident
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-orange-500 mr-2" />
              Other emergency
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">2. Add Optional Details</h2>
          <Button variant="outline" className="w-full mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            Use Current Location
          </Button>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              Upload Photo
            </Button>
            <Button variant="outline">
              <Video className="h-4 w-4 mr-2" />
              Upload Video
            </Button>
          </div>
          <Textarea 
            placeholder="Describe the emergency..." 
            className="min-h-[100px]" 
          />
        </Card>

        <Card className="p-4 bg-red-50">
          <h3 className="font-semibold text-red-700 mb-2">Emergency Note</h3>
          <p className="text-sm text-red-600">
            If you're in immediate danger, call:
            <br />
            999 for police
            <br />
            998 for fire services
            <br />
            997 for ambulance
          </p>
        </Card>

        <Button 
          className="w-full" 
          size="lg"
          onClick={handleSubmit}
        >
          Submit Quick Report
        </Button>
      </div>
    </div>
  );
};

export default QuickReport;