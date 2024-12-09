import { Card } from "@/components/ui/card";
import { Trophy, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ActivityOverview = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Activity Overview</h3>
        <div className="flex gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <button
            onClick={() => navigate('/rewards')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Coins className="h-5 w-5" />
            <span className="text-sm font-medium">2,500 pts</span>
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total Reports</span>
          <span className="font-semibold">20</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Verified Reports</span>
          <span className="font-semibold">15</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Community Rank</span>
          <span className="font-semibold">#3</span>
        </div>
      </div>
    </Card>
  );
};

export default ActivityOverview;