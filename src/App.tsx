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
import ReportScreen from "./components/ReportScreen";
import AlertsScreen from "./components/AlertsScreen";
import MapScreen from "./components/MapScreen";
import ProfileScreen from "./components/ProfileScreen";
import QuickReport from "./components/QuickReport";
import NearbyIssues from "./components/NearbyIssues";
import RewardsScreen from "./components/RewardsScreen";
import ForgotPassword from "./components/ForgotPassword";
import ReportCorruption from "./components/ReportCorruption";
import MentalHealth from "./components/MentalHealth";
import DomesticViolence from "./components/DomesticViolence";
import Environmental from "./components/Environmental";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

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
          <Route path="/report" element={<ReportScreen />} />
          <Route path="/alerts" element={<AlertsScreen />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/quick-report" element={<QuickReport />} />
          <Route path="/nearby-issues" element={<NearbyIssues />} />
          <Route path="/rewards" element={<RewardsScreen />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/report-corruption" element={<ReportCorruption />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/domestic-violence" element={<DomesticViolence />} />
          <Route path="/environmental" element={<Environmental />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;