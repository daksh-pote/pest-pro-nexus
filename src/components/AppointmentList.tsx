import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  MapPin,
  User,
  Wrench
} from "lucide-react";

const appointments = [
  {
    id: 1,
    customerName: "John Smith",
    service: "Quarterly Treatment",
    address: "123 Oak Street, Springfield, IL",
    date: "2024-01-30",
    time: "9:00 AM",
    technician: "Mike Johnson",
    status: "confirmed",
    duration: "2 hours",
    priority: "normal"
  },
  {
    id: 2,
    customerName: "ABC Restaurant",
    service: "Pest Inspection",
    address: "456 Main Street, Springfield, IL",
    date: "2024-01-30",
    time: "11:30 AM",
    technician: "Sarah Davis",
    status: "in-progress",
    duration: "1.5 hours",
    priority: "high"
  },
  {
    id: 3,
    customerName: "Green Valley Apartments",
    service: "Rodent Control",
    address: "789 Valley Drive, Springfield, IL",
    date: "2024-01-30",
    time: "2:00 PM",
    technician: "Tom Wilson",
    status: "pending",
    duration: "3 hours",
    priority: "urgent"
  },
  {
    id: 4,
    customerName: "Downtown Office",
    service: "Ant Treatment",
    address: "321 Business Blvd, Springfield, IL",
    date: "2024-01-30",
    time: "4:30 PM",
    technician: "Lisa Brown",
    status: "completed",
    duration: "1 hour",
    priority: "normal"
  },
  {
    id: 5,
    customerName: "Family Home",
    service: "Termite Inspection",
    address: "654 Residential Ave, Springfield, IL",
    date: "2024-01-31",
    time: "10:00 AM",
    technician: "Mike Johnson",
    status: "confirmed",
    duration: "2.5 hours",
    priority: "normal"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4 text-success" />;
    case "in-progress":
      return <Clock className="h-4 w-4 text-warning" />;
    case "pending":
      return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    default:
      return <CheckCircle2 className="h-4 w-4 text-primary" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-success text-success-foreground";
    case "in-progress":
      return "bg-warning text-warning-foreground";
    case "pending":
      return "bg-muted text-muted-foreground";
    case "confirmed":
      return "bg-primary text-primary-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "bg-destructive text-destructive-foreground";
    case "high":
      return "bg-warning text-warning-foreground";
    case "normal":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const AppointmentList = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Manage service appointments and schedules</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* Today's Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule - January 30, 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.filter(apt => apt.date === "2024-01-30").map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  {getStatusIcon(appointment.status)}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{appointment.customerName}</h3>
                      <Badge className={getPriorityColor(appointment.priority)} variant="outline">
                        {appointment.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {appointment.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {appointment.technician}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {appointment.address}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.filter(apt => apt.date !== "2024-01-30").map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  {getStatusIcon(appointment.status)}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{appointment.customerName}</h3>
                      <Badge className={getPriorityColor(appointment.priority)} variant="outline">
                        {appointment.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{appointment.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {appointment.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {appointment.technician}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};