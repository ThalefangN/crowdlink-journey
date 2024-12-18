import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const slides = [
  {
    title: "Welcome to CrowdLink",
    description: "Connect with your community like never before",
    image: "/lovable-uploads/903eb1c7-9e72-423c-bbec-1155f43c660a.png",
  },
  {
    title: "Health, Safety & Environment",
    description: "Your well-being is our priority",
    image: "/lovable-uploads/9f235324-40fc-440d-9753-385ef28b8e58.png",
  },
  {
    title: "Report & Track",
    description: "Easy reporting and real-time tracking",
    image: "/lovable-uploads/b3494753-b418-4528-b505-f23a66f6efb6.png",
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/signup");
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col">
              <div className="relative h-2/3 p-4">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-3xl" />
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center items-center bg-background animate-fade-in">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="text-gray-600 text-center">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 bg-background">
        <div className="flex justify-center gap-2 mb-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <Button
          className="w-full flex items-center justify-center gap-2 animate-fade-in"
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