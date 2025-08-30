import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { CustomerList } from "@/components/CustomerList";
import { AppointmentList } from "@/components/AppointmentList";
import { TreatmentList } from "@/components/TreatmentList";
import { Reports } from "@/components/Reports";
import { Settings } from "@/components/Settings";

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
        return <TreatmentList />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
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