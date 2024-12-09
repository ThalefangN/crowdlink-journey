import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, Video, Plus, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const ReportScreen = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Help is on the way! Authorities have been notified.");
      navigate('/home');
    }, 3000);
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
              Searching for help...
            </div>
          </div>
        </div>
      )}

      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Report an Issue</h1>
      </div>

      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        <Card className="p-4">
          <h2 className="font-semibold mb-4">1. Select a Category</h2>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
              Crime
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2" />
              Traffic
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
              Utilities
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-orange-500 mr-2" />
              Environment
            </Button>
          </div>
          <Button className="w-full mt-4">
            <Plus className="h-4 w-4 mr-2" />
            View All Categories
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">2. Add Details</h2>
          <Button variant="outline" className="w-full mb-4">
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
          <Textarea placeholder="Type your description here..." className="min-h-[100px]" />
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">3. Severity Level</h2>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline">Low</Button>
            <Button variant="outline">Moderate</Button>
            <Button variant="outline">High</Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">4. Privacy Options</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label>Share my identity with authorities</label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <label>Submit report anonymously</label>
              <Switch />
            </div>
          </div>
        </Card>

        <Button className="w-full" size="lg" onClick={handleSubmit}>
          Submit Report
        </Button>
      </div>
    </div>
  );
};

export default ReportScreen;