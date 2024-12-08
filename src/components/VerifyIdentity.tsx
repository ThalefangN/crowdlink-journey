import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { User } from "lucide-react";

const VerifyIdentity = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idNumber: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    new Audio("/click.mp3").play().catch(console.error);
    toast.success("Verification pending. Please wait...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Verify Your Identity</h1>
          <p className="text-gray-600">Please provide your ID information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="ID Number"
              className="pl-10"
              value={formData.idNumber}
              onChange={(e) =>
                setFormData({ ...formData, idNumber: e.target.value })
              }
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Verify Identity
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentity;