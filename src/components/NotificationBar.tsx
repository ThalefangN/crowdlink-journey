import { useState } from "react";
import { Bell, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NotificationBar = () => {
  const [hasUnread] = useState(true);
  const [notifications] = useState([
    {
      id: 1,
      title: "Emergency Alert",
      message: "Power outage reported in Block 3, Gaborone",
      time: "2 minutes ago",
      unread: true,
    },
    {
      id: 2,
      title: "Community Update",
      message: "New traffic lights installed in Phase 2, Phakalane",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 3,
      title: "Safety Alert",
      message: "Suspicious activity reported near Game City Mall",
      time: "3 hours ago",
      unread: true,
    },
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {hasUnread ? <BellDot className="h-5 w-5" /> : <Bell className="h-5 w-5" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-2">
          <h3 className="font-semibold mb-2">Notifications</h3>
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="p-2 cursor-pointer">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{notification.title}</span>
                  {notification.unread && (
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationBar;