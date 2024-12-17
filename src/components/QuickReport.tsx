import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, Video, MapPin, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState, useRef } from "react";

const QuickReport = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`Uploaded ${file.name}`);
    }
  };

  const handleSubmit = () => {
    if (!selectedType) {
      toast.error("Please select an emergency type");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Emergency services have been notified!");
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-center text-white space-y-4">
            <div className="animate-spin">
              <Loader className="h-12 w-12" />
            </div>
            <div className="animate-pulse text-xl font-semibold">
              Re romela thuso... (Help is on the way...)
            </div>
          </div>
        </div>
      )}

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
            {[
              { type: "attack", label: "I'm being attacked", color: "red" },
              { type: "robbery", label: "There's a robbery", color: "yellow" },
              { type: "power", label: "Power outage", color: "blue" },
              { type: "water", label: "Water leak", color: "green" },
              { type: "accident", label: "Vehicle accident", color: "red" },
              { type: "other", label: "Other emergency", color: "orange" }
            ].map(({ type, label, color }) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                className={`justify-start ${selectedType === type ? 'bg-primary' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                <span className={`h-2 w-2 rounded-full bg-${color}-500 mr-2`} />
                {label}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">2. Add Optional Details</h2>
          <Button 
            variant="outline" 
            className="w-full mb-4"
            onClick={() => toast.success("Location shared")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Use Current Location
          </Button>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <input
              type="file"
              accept="video/*"
              className="hidden"
              ref={videoInputRef}
              onChange={handleFileUpload}
            />
            <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
              <Camera className="h-4 w-4 mr-2" />
              Upload Photo
            </Button>
            <Button variant="outline" onClick={() => videoInputRef.current?.click()}>
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