import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Gift, Coins, Star, Award, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const RewardsScreen = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRedeem = (type: 'food' | 'cash' | 'voucher') => {
    toast({
      title: "Redemption Successful!",
      description: `You have successfully redeemed your points for ${type}. Check your email for details.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 shadow-sm text-white">
        <div className="flex items-center gap-4">
          <Trophy className="h-12 w-12" />
          <div>
            <h1 className="text-2xl font-bold">Your Rewards</h1>
            <p className="text-sm opacity-90">Redeem your points for exciting rewards!</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        <Card className="p-4 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Current Balance</h2>
            <div className="flex items-center gap-2">
              <Coins className="h-6 w-6 text-yellow-500" />
              <span className="font-bold text-2xl">2,500</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mb-4">
            <div className="h-2 bg-yellow-500 rounded-full w-3/4"></div>
          </div>
          <p className="text-sm text-gray-600">500 more points until Gold tier!</p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Your Tier Benefits</span>
              </div>
              <Badge>Silver</Badge>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Priority Support
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Exclusive Rewards
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Monthly Bonuses
              </li>
            </ul>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Next Tier</span>
              </div>
              <Badge variant="outline">Gold</Badge>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-yellow-500" />
                VIP Support
              </li>
              <li className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-yellow-500" />
                Double Points
              </li>
              <li className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-yellow-500" />
                Special Events Access
              </li>
            </ul>
          </Card>
        </div>

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

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <span className="font-medium">Shopping Voucher</span>
                </div>
                <span className="text-sm font-semibold">1,500 points</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Get a $30 shopping voucher for local stores</p>
              <Button 
                className="w-full"
                onClick={() => handleRedeem('voucher')}
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