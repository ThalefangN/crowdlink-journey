import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password reset link sent to your email");
    setTimeout(() => navigate("/signin"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold ml-2">Reset Password</h1>
        </div>

        <p className="text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>

          <div className="text-center">
            <Button
              variant="link"
              className="text-sm text-primary"
              onClick={() => navigate("/signin")}
            >
              Back to Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;