import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DomesticViolence = () => {
  const navigate = useNavigate();

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Domestic Violence Support</h1>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4 bg-red-50">
          <Shield className="h-8 w-8 text-red-500 mb-2" />
          <h2 className="font-semibold mb-2">Emergency Help</h2>
          <p className="text-sm text-gray-600 mb-4">
            If you're in immediate danger, call emergency services.
          </p>
          <Button 
            className="w-full mb-2"
            onClick={() => handleCall('999')}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Police (999)
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DomesticViolence;