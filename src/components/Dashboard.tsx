import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Today's Appointments",
    value: "8",
    change: "+3",
    icon: Calendar,
    color: "text-info"
  },
  {
    title: "Monthly Revenue",
    value: "$24,500",
    change: "+8%",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "Growth Rate",
    value: "15%",
    change: "+2%",
    icon: TrendingUp,
    color: "text-warning"
  }
];

const recentAppointments = [
  {
    customer: "Smith Residence",
    service: "Quarterly Treatment",
    time: "9:00 AM",
    status: "confirmed",
    technician: "Mike Johnson"
  },
  {
    customer: "ABC Restaurant",
    service: "Pest Inspection",
    time: "11:30 AM",
    status: "in-progress",
    technician: "Sarah Davis"
  },
  {
    customer: "Green Valley Apartments",
    service: "Rodent Control",
    time: "2:00 PM",
    status: "pending",
    technician: "Tom Wilson"
  },
  {
    customer: "Downtown Office Complex",
    service: "Ant Treatment",
    time: "4:30 PM",
    status: "completed",
    technician: "Lisa Brown"
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

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(appointment.status)}
                    <div>
                      <p className="font-medium">{appointment.customer}</p>
                      <p className="text-sm text-muted-foreground">{appointment.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{appointment.time}</p>
                    <p className="text-sm text-muted-foreground">{appointment.technician}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-4 text-left rounded-lg border border-border hover:bg-accent transition-colors">
              <h3 className="font-medium">Schedule New Appointment</h3>
              <p className="text-sm text-muted-foreground">Book a service for existing or new customers</p>
            </button>
            <button className="w-full p-4 text-left rounded-lg border border-border hover:bg-accent transition-colors">
              <h3 className="font-medium">Add New Customer</h3>
              <p className="text-sm text-muted-foreground">Register a new customer to the system</p>
            </button>
            <button className="w-full p-4 text-left rounded-lg border border-border hover:bg-accent transition-colors">
              <h3 className="font-medium">Record Treatment</h3>
              <p className="text-sm text-muted-foreground">Log completed pest control treatments</p>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};