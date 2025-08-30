import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { CustomerList } from "@/components/CustomerList";
import { AppointmentList } from "@/components/AppointmentList";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "customers":
        return <CustomerList />;
      case "appointments":
        return <AppointmentList />;
      case "treatments":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Treatments</h1>
            <p className="text-muted-foreground">Treatment tracking coming soon...</p>
          </div>
        );
      case "reports":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-muted-foreground">Reporting dashboard coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">System settings coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;