import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const slides = [
  {
    title: "Welcome to CrowdLink",
    description: "Connect with your community like never before",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Report & Share",
    description: "Keep your neighborhood informed and safe",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    title: "Stay Connected",
    description: "Real-time updates that matter to you",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const OnboardingSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = async () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      toast.success("Getting everything ready...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      navigate("/signup");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="text-gray-600">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6">
        <div className="flex justify-center gap-2 mb-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <Button
          className="w-full flex items-center justify-center gap-2"
          onClick={handleNext}
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingSlides;