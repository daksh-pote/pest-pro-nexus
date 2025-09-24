import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar,
  Bug,
  BarChart3,
  PieChart,
  FileText
} from "lucide-react";

const monthlyRevenue = [
  { month: "Jan", revenue: 23400, treatments: 156, newCustomers: 12 },
  { month: "Feb", revenue: 25200, treatments: 168, newCustomers: 15 },
  { month: "Mar", revenue: 28100, treatments: 187, newCustomers: 18 },
  { month: "Apr", revenue: 26800, treatments: 178, newCustomers: 14 },
  { month: "May", revenue: 29500, treatments: 195, newCustomers: 20 },
  { month: "Jun", revenue: 31200, treatments: 208, newCustomers: 16 }
];

const pestBreakdown = [
  { type: "Ants", percentage: 35, count: 45, revenue: "$6,750" },
  { type: "Cockroaches", percentage: 28, count: 36, revenue: "$9,900" },
  { type: "Rodents", percentage: 20, count: 26, revenue: "$8,320" },
  { type: "Termites", percentage: 10, count: 13, revenue: "$6,500" },
  { type: "Spiders", percentage: 7, count: 9, revenue: "$1,125" }
];

const technicianPerformance = [
  { name: "Mike Johnson", treatments: 45, revenue: "$13,500", rating: 4.9, efficiency: "96%" },
  { name: "Sarah Davis", treatments: 38, revenue: "$11,400", rating: 4.8, efficiency: "94%" },
  { name: "Tom Wilson", treatments: 42, revenue: "$12,600", rating: 4.7, efficiency: "92%" },
  { name: "Lisa Brown", treatments: 35, revenue: "$10,500", rating: 4.9, efficiency: "98%" }
];

const reportTypes = [
  {
    title: "Monthly Revenue Report",
    description: "Comprehensive revenue analysis with trends and forecasts",
    type: "Financial",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "Customer Growth Report",
    description: "Customer acquisition and retention analytics",
    type: "Customer",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Treatment Effectiveness Report",
    description: "Analysis of treatment success rates by pest type",
    type: "Operational",
    icon: Bug,
    color: "text-warning"
  },
  {
    title: "Technician Performance Report",
    description: "Individual technician metrics and productivity analysis",
    type: "HR",
    icon: TrendingUp,
    color: "text-info"
  }
];

export const Reports = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Business insights and performance metrics</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue (6M)</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$164,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Treatments</CardTitle>
            <Bug className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,092</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary">+8%</span> from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-warning">+15%</span> from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Treatment Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$150</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-info">+3%</span> from last period
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyRevenue.map((month) => (
                <div key={month.month} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{month.month} 2024</p>
                    <p className="text-sm text-muted-foreground">{month.treatments} treatments</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-success">${month.revenue.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{month.newCustomers} new customers</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pest Type Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Pest Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pestBreakdown.map((pest) => (
                <div key={pest.type} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{pest.type}</span>
                    <div className="text-right">
                      <span className="text-sm font-medium">{pest.percentage}%</span>
                      <p className="text-xs text-muted-foreground">{pest.count} treatments</p>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${pest.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-success font-medium">{pest.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technician Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Technician Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Technician</th>
                  <th className="text-left p-2">Treatments</th>
                  <th className="text-left p-2">Revenue</th>
                  <th className="text-left p-2">Rating</th>
                  <th className="text-left p-2">Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {technicianPerformance.map((tech) => (
                  <tr key={tech.name} className="border-b">
                    <td className="p-2 font-medium">{tech.name}</td>
                    <td className="p-2">{tech.treatments}</td>
                    <td className="p-2 text-success font-medium">{tech.revenue}</td>
                    <td className="p-2">
                      <Badge variant="outline">{tech.rating} ⭐</Badge>
                    </td>
                    <td className="p-2">
                      <Badge className="bg-primary text-primary-foreground">{tech.efficiency}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {reportTypes.map((report) => {
              const Icon = report.icon;
              return (
                <div key={report.title} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <Icon className={`h-5 w-5 ${report.color} mt-1`} />
                    <div className="flex-1">
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <Badge variant="outline">{report.type}</Badge>
                        <Button size="sm" variant="outline">
                          <FileText className="h-3 w-3 mr-1" />
                          Generate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};