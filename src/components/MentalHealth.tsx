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

      <div className="p-4 space-y-6">
        <Card className="p-4 bg-purple-50">
          <h2 className="font-semibold mb-4">24/7 Crisis Support</h2>
          <p className="text-sm text-gray-600 mb-4">
            Professional help is available 24/7. Don't hesitate to reach out.
          </p>
          <Button 
            className="w-full"
            onClick={() => handleCall("0800123456")}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Crisis Hotline
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Support Resources</h2>
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleCall("0800111222")}
            >
              Counseling Services
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleCall("0800333444")}
            >
              Youth Support Line
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleCall("0800555666")}
            >
              Substance Abuse Help
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MentalHealth;