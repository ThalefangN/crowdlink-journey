import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { User, Calendar, FileText, MapPin, Upload, Home, FileEdit, Bell, Map, UserRound } from "lucide-react";

const VerifyIdentity = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    idNumber: "",
    placeOfBirth: "",
    document: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    new Audio("/click.mp3").play().catch(console.error);
    toast.success("Verification pending. Please wait...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 p-4 pb-20">
        <div className="max-w-md mx-auto space-y-6 animate-fade-in">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Account Verification</h1>
            <p className="text-gray-600">Please provide your verification details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Full Name"
                className="pl-10"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="date"
                className="pl-10"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                required
              />
            </div>

            <div className="relative">
              <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="National ID/Passport Number"
                className="pl-10"
                value={formData.idNumber}
                onChange={(e) =>
                  setFormData({ ...formData, idNumber: e.target.value })
                }
                required
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Place of Birth"
                className="pl-10"
                value={formData.placeOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, placeOfBirth: e.target.value })
                }
                required
              />
            </div>

            <div className="relative">
              <Upload className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="file"
                className="pl-10"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    document: e.target.files ? e.target.files[0] : null,
                  })
                }
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit for Verification
            </Button>
          </form>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="max-w-md mx-auto flex justify-around p-4">
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <FileEdit className="h-5 w-5" />
            <span className="text-xs">Report</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Bell className="h-5 w-5" />
            <span className="text-xs">Alerts</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Map className="h-5 w-5" />
            <span className="text-xs">Map</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <UserRound className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyIdentity;