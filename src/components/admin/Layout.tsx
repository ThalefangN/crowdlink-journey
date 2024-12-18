import React from 'react';
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileText,
  AlertTriangle,
  Settings,
  LogOut,
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const menuItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard', active: true },
    { icon: <Users className="h-5 w-5" />, label: 'Users', active: false },
    { icon: <FileText className="h-5 w-5" />, label: 'Reports', active: false },
    { icon: <AlertTriangle className="h-5 w-5" />, label: 'Alerts', active: false },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', active: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b px-6 py-4">
            <h1 className="text-xl font-bold">Admin Portal</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={cn(
                  "flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium",
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="border-t p-4">
            <button className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="pl-64">
        {children}
      </main>
    </div>
  );
};