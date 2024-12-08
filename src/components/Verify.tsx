import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Verify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    new Audio("/click.mp3").play().catch(console.error);
    toast.success("Account verified successfully!");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/signin");
  };

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Verify Your Account</h1>
          <p className="text-gray-600 mt-2">
            Enter the verification code sent to your email
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-8">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-semibold border-2 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-background"
                required
              />
            ))}
          </div>

          <Button type="submit" className="w-full">
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Verify;