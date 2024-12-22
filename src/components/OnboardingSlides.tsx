import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const slides = [
  {
    title: "Welcome to CrowdLink",
    description: (
      <div className="text-center">
        Connect with your community like never before
        <div className="mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = '/admin';
            }}
            className="text-primary hover:underline font-bold"
          >
            Admin
          </button>
        </div>
      </div>
    ),
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
                  <div className="w-full h-full relative bg-white">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center items-center bg-background animate-fade-in">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                {slide.description}
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