import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, Video, Plus, Loader, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "sonner";

const ReportScreen = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success(`Uploaded ${file.name}`);
    }
  };

  const handleSubmit = () => {
    if (!selectedCategory) {
      toast.error("Please select a category");
      return;
    }
    if (!selectedSeverity) {
      toast.error("Please select severity level");
      return;
    }

    setIsSubmitting(true);
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
              Re batla thuso... (Searching for help...)
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
            {[
              { name: "Crime", color: "red" },
              { name: "Traffic", color: "yellow" },
              { name: "Utilities", color: "green" },
              { name: "Environment", color: "orange" }
            ].map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className={`justify-start ${selectedCategory === category.name ? 'bg-primary' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span className={`h-2 w-2 rounded-full bg-${category.color}-500 mr-2`} />
                {category.name}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">2. Add Details</h2>
          <Button variant="outline" className="w-full mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            Use Current Location (Gaborone, Botswana)
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
            placeholder="Type your description here..." 
            className="min-h-[100px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">3. Severity Level</h2>
          <div className="grid grid-cols-3 gap-2">
            {["Low", "Moderate", "High"].map((level) => (
              <Button
                key={level}
                variant={selectedSeverity === level ? "default" : "outline"}
                className={selectedSeverity === level ? 'bg-primary' : ''}
                onClick={() => setSelectedSeverity(level)}
              >
                {level}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">4. Privacy Options</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label>Share my identity with authorities</label>
              <Switch onClick={() => toast.success("Privacy setting updated")} />
            </div>
            <div className="flex items-center justify-between">
              <label>Submit report anonymously</label>
              <Switch onClick={() => toast.success("Anonymous reporting enabled")} />
            </div>
          </div>
        </Card>

        <Button 
          className="w-full" 
          size="lg" 
          onClick={handleSubmit}
        >
          Submit Report
        </Button>
      </div>
    </div>
  );
};

export default ReportScreen;