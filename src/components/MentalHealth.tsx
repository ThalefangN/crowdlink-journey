import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentalHealth = () => {
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
        <h1 className="text-lg font-semibold">Mental Health Support</h1>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4 bg-blue-50">
          <h2 className="font-semibold mb-2">24/7 Crisis Helpline</h2>
          <p className="text-sm text-gray-600 mb-4">
            Professional counselors are available 24/7 to provide support.
          </p>
          <Button 
            className="w-full"
            onClick={() => handleCall('0800-123-456')}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Helpline Now
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default MentalHealth;