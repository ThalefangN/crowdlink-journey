import { Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";

const NewsFeed = () => {
  const news = [
    {
      id: 1,
      title: "New Traffic Lights in Broadhurst",
      description: "Installation of smart traffic lights to reduce congestion",
      time: "2 hours ago",
      category: "Infrastructure",
    },
    {
      id: 2,
      title: "Community Clean-up in Old Naledi",
      description: "Volunteers needed for weekend clean-up initiative",
      time: "4 hours ago",
      category: "Community",
    },
    {
      id: 3,
      title: "Water Supply Update in Tlokweng",
      description: "Scheduled maintenance work completed ahead of schedule",
      time: "6 hours ago",
      category: "Utilities",
    },
  ];

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="h-5 w-5" />
        <h3 className="font-semibold">Local News Feed</h3>
      </div>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="border-b pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium">{item.title}</h4>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default NewsFeed;