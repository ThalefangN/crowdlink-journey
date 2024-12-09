import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Environmental = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Report Environmental Issue</h1>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="font-semibold mb-4">Environmental Concern</h2>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              Add Photo
            </Button>
            <Button variant="outline">
              <Video className="h-4 w-4 mr-2" />
              Add Video
            </Button>
          </div>
          <Textarea 
            placeholder="Describe the environmental issue..." 
            className="min-h-[150px] mb-4"
          />
          <Button className="w-full">Submit Report</Button>
        </Card>
      </div>
    </div>
  );
};

export default Environmental;