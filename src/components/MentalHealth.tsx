import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Phone, MessageSquare, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MentalHealth = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: "Hello! I'm here to help. How are you feeling today?" }
  ]);

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatMessages(prev => [...prev, { type: "user", text: message }]);
    setMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: "bot", 
        text: "I understand how you're feeling. Remember, it's okay to ask for help. Would you like to talk to a professional counselor?" 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white p-4 flex items-center gap-4 shadow-sm">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Mental Health Support</h1>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-4 bg-purple-50">
          <h2 className="font-semibold mb-4">24/7 Crisis Support</h2>
          <p className="text-sm text-gray-600 mb-4">
            Professional help is available 24/7. Don't hesitate to reach out.
          </p>
          <Button 
            className="w-full"
            onClick={() => handleCall("0800123456")}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Crisis Hotline
          </Button>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Daily Motivation</h2>
          <p className="text-sm text-gray-600 italic">
            "Every day is a new beginning. Take a deep breath, smile, and start again."
          </p>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Mental Health Tips</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Practice mindful breathing for 5 minutes daily</li>
            <li>• Take regular breaks from work</li>
            <li>• Stay connected with loved ones</li>
            <li>• Maintain a regular sleep schedule</li>
            <li>• Exercise for at least 30 minutes daily</li>
          </ul>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold mb-4">Chat with Mental Health Assistant</h2>
          <div className="h-[300px] overflow-y-auto mb-4 space-y-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' ? 'bg-primary text-white' : 'bg-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MentalHealth;