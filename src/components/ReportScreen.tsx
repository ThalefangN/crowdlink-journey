import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Camera, Video, Loader, MapPin, X, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "sonner";

const ReportScreen = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string, type: 'image' | 'video' }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => [...prev, { name: file.name, type }]);
      toast.success(`Uploaded ${file.name}`);
    }
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(file => file.name !== fileName));
    toast.success(`Removed ${fileName}`);
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
          <div className="text-center space-y-4">
            <div className="relative w-16 h-16 mx-auto">
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-2 bg-blue-500 rounded-full opacity-50"></div>
            </div>
            <div className="animate-pulse text-xl font-semibold text-white">
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
              onChange={(e) => handleFileUpload(e, 'image')}
            />
            <input
              type="file"
              accept="video/*"
              className="hidden"
              ref={videoInputRef}
              onChange={(e) => handleFileUpload(e, 'video')}
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

          {/* Uploaded Files Display */}
          {uploadedFiles.length > 0 && (
            <div className="mb-4 space-y-2">
              {uploadedFiles.map((file) => (
                <div key={file.name} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => removeFile(file.name)}
                  >
                    <X className="h-4 w-4 text-gray-500 hover:text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          )}

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
              <label className="text-lg">Share my identity with authorities</label>
              <Switch onClick={() => toast.success("Privacy setting updated")} />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-lg">Submit report anonymously</label>
              <Switch onClick={() => toast.success("Anonymous reporting enabled")} />
            </div>
          </div>
        </Card>

        <Button 
          className="w-full py-6 text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]" 
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