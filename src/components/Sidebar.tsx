import { 
  Home, 
  Users, 
  Calendar, 
  ClipboardList, 
  FileText, 
  Settings,
  Bug
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "customers", label: "Customers", icon: Users },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "treatments", label: "Treatments", icon: ClipboardList },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r">
      <div className="flex items-center gap-2 p-6 border-b">
        <Bug className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-lg font-semibold">Integrated Pest Control</h1>
          <p className="text-sm text-muted-foreground">Services</p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-2 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11",
                activeSection === item.id && "bg-primary text-primary-foreground"
              )}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};