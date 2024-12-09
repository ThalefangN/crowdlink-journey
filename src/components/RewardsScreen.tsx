import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Gift, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const RewardsScreen = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRedeem = (type: 'food' | 'cash') => {
    toast({
      title: "Redemption Successful!",
      description: `You have successfully redeemed your points for ${type}. Check your email for details.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <div>
            <h1 className="text-xl font-semibold">Your Rewards</h1>
            <p className="text-sm text-gray-500">Redeem your points for prizes</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Current Balance</h2>
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-yellow-500" />
              <span className="font-bold text-xl">2,500</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mb-4">
            <div className="h-2 bg-yellow-500 rounded-full w-3/4"></div>
          </div>
          <p className="text-sm text-gray-600 mb-4">500 more points until next tier!</p>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Available Rewards</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <span className="font-medium">Food Voucher</span>
                </div>
                <span className="text-sm font-semibold">1,000 points</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Get a $20 food voucher at participating restaurants</p>
              <Button 
                className="w-full"
                onClick={() => handleRedeem('food')}
              >
                Redeem Now
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-primary" />
                  <span className="font-medium">Cash Reward</span>
                </div>
                <span className="text-sm font-semibold">2,500 points</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Convert your points to cash</p>
              <Button 
                className="w-full"
                onClick={() => handleRedeem('cash')}
              >
                Redeem Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RewardsScreen;