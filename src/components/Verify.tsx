import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Verify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    new Audio("/click.mp3").play().catch(console.error);
    toast.success("Account verified successfully!");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Verify Your Account</h1>
          <p className="text-gray-600">
            Enter the verification code sent to your email
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="text-center text-2xl letter-spacing-2"
            maxLength={6}
            required
          />

          <Button type="submit" className="w-full">
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Verify;