import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingSlides from "./components/OnboardingSlides";
import SignUp from "./components/SignUp";
import Verify from "./components/Verify";
import SignIn from "./components/SignIn";
import VerifyIdentity from "./components/VerifyIdentity";
import HomePage from "./components/Home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingSlides />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify-identity" element={<VerifyIdentity />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;