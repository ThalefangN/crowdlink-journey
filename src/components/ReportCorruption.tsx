import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ReportCorruption = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Report submitted. Your identity will be protected.");
    setTimeout(() => navigate("/home"), 2000);
  };

  const handleLocation = () => {
    toast.success("Location saved. Authorities have been notified.");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Report Corruption</h1>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-4 bg-red-50">
          <h2 className="font-semibold mb-4">Important Notice</h2>
          <p className="text-sm text-gray-600 mb-4">
            Your identity will be protected. All reports are encrypted and anonymous.
          </p>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Card className="p-4">
            <h2 className="font-semibold mb-4">Location Details</h2>
            <Button 
              variant="outline" 
              className="w-full mb-4"
              onClick={handleLocation}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Share Location
            </Button>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Incident Details</h2>
            <Textarea 
              placeholder="Describe the corruption incident..."
              className="min-h-[150px] mb-4"
            />
          </Card>

          <Button type="submit" className="w-full">Submit Report</Button>
        </form>
      </div>
    </div>
  );
};

export default ReportCorruption;