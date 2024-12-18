import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, MapPin, TreePine, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRef } from "react";

const Environmental = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`Photo uploaded: ${file.name}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Report Environmental Issue</h1>
      </div>

      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        <Card className="p-4 bg-green-50">
          <h2 className="font-semibold mb-2">Report Types</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Button variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Pollution
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              Illegal Dumping
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Water Issues
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Deforestation
            </Button>
          </div>
        </Card>

        <form className="space-y-4">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Location Details</h2>
            <Button 
              variant="outline" 
              className="w-full mb-4"
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  () => toast.success("Location shared"),
                  () => toast.error("Please enable location services")
                );
              }}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Share Location
            </Button>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Evidence</h2>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <Button 
              variant="outline" 
              className="w-full mb-4"
              onClick={() => fileInputRef.current?.click()}
            >
              <Camera className="h-4 w-4 mr-2" />
              Take Photo
            </Button>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Issue Details</h2>
            <Textarea 
              placeholder="Describe the environmental issue..."
              className="min-h-[150px] mb-4"
            />
            <Button type="submit" className="w-full">
              <TreePine className="h-4 w-4 mr-2" />
              Submit Report
            </Button>
          </Card>
        </form>

        <Card className="p-4 bg-green-50">
          <h2 className="font-semibold mb-2">Environmental Tips</h2>
          <ul className="text-sm space-y-2 text-green-800">
            <li>• Document the issue with photos</li>
            <li>• Note the exact location</li>
            <li>• Report persistent issues</li>
            <li>• Avoid direct confrontation</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Environmental;