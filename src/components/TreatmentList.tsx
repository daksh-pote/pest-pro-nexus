import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Bug, 
  Droplets, 
  Shield, 
  Calendar,
  User,
  MapPin,
  FileText
} from "lucide-react";

const treatments = [
  {
    id: 1,
    customerName: "John Smith",
    address: "123 Oak Street, Springfield, IL",
    pestType: "Ants",
    treatmentMethod: "Liquid Barrier",
    chemical: "Termidor SC",
    technician: "Mike Johnson",
    date: "2024-01-28",
    nextTreatment: "2024-04-28",
    effectiveness: "Excellent",
    notes: "Applied perimeter treatment. Customer reported immediate reduction in ant activity.",
    cost: "$150.00"
  },
  {
    id: 2,
    customerName: "ABC Restaurant",
    address: "456 Main Street, Springfield, IL",
    pestType: "Cockroaches",
    treatmentMethod: "Gel Bait + Spray",
    chemical: "Advion Gel + Phantom",
    technician: "Sarah Davis",
    date: "2024-01-25",
    nextTreatment: "2024-02-25",
    effectiveness: "Good",
    notes: "Placed gel baits in kitchen areas. Applied residual spray in cracks and crevices.",
    cost: "$275.00"
  },
  {
    id: 3,
    customerName: "Green Valley Apartments",
    address: "789 Valley Drive, Springfield, IL",
    pestType: "Rodents",
    treatmentMethod: "Bait Stations",
    chemical: "Contrac Blox",
    technician: "Tom Wilson",
    date: "2024-01-22",
    nextTreatment: "2024-02-22",
    effectiveness: "Excellent",
    notes: "Installed 12 tamper-resistant bait stations around building perimeter.",
    cost: "$320.00"
  },
  {
    id: 4,
    customerName: "Downtown Office",
    address: "321 Business Blvd, Springfield, IL",
    pestType: "Spiders",
    treatmentMethod: "Web Removal + Spray",
    chemical: "Cy-Kick CS",
    technician: "Lisa Brown",
    date: "2024-01-20",
    nextTreatment: "2024-04-20",
    effectiveness: "Good",
    notes: "Removed existing webs and applied residual treatment to entry points.",
    cost: "$125.00"
  }
];

const pestTypes = [
  { name: "Ants", count: 45, icon: Bug, color: "text-orange-500" },
  { name: "Cockroaches", count: 23, icon: Bug, color: "text-red-500" },
  { name: "Rodents", count: 18, icon: Bug, color: "text-gray-500" },
  { name: "Spiders", count: 15, icon: Bug, color: "text-purple-500" },
  { name: "Termites", count: 8, icon: Bug, color: "text-yellow-500" }
];

const getEffectivenessColor = (effectiveness: string) => {
  switch (effectiveness.toLowerCase()) {
    case "excellent":
      return "bg-success text-success-foreground";
    case "good":
      return "bg-primary text-primary-foreground";
    case "fair":
      return "bg-warning text-warning-foreground";
    case "poor":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export const TreatmentList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTreatments = treatments.filter(treatment =>
    treatment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.pestType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.chemical.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Treatments</h1>
          <p className="text-muted-foreground">Track and manage pest control treatments</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Record Treatment
        </Button>
      </div>

      {/* Pest Type Summary */}
      <div className="grid gap-4 md:grid-cols-5">
        {pestTypes.map((pest) => {
          const Icon = pest.icon;
          return (
            <Card key={pest.name}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{pest.name}</p>
                    <p className="text-2xl font-bold">{pest.count}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${pest.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search treatments by customer, pest type, or chemical..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Treatment Records */}
      <div className="space-y-4">
        {filteredTreatments.map((treatment) => (
          <Card key={treatment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{treatment.customerName}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {treatment.address}
                  </div>
                </div>
                <Badge className={getEffectivenessColor(treatment.effectiveness)}>
                  {treatment.effectiveness}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Bug className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pest Type</p>
                    <p className="font-medium">{treatment.pestType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Method</p>
                    <p className="font-medium">{treatment.treatmentMethod}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Chemical</p>
                    <p className="font-medium">{treatment.chemical}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Technician</p>
                    <p className="font-medium">{treatment.technician}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Treatment Date</p>
                  <p className="font-medium">{treatment.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Next Treatment</p>
                  <p className="font-medium text-primary">{treatment.nextTreatment}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cost</p>
                  <p className="font-medium text-success">{treatment.cost}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Treatment Notes</p>
                <p className="text-sm bg-muted p-3 rounded-lg">{treatment.notes}</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-1" />
                  View Report
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  Schedule Follow-up
                </Button>
                <Button variant="outline" size="sm">
                  Edit Treatment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};