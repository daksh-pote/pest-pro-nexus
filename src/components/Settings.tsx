import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Save, 
  User, 
  Building2, 
  Bell, 
  Shield, 
  Palette,
  Database,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export const Settings = () => {
  const [notifications, setNotifications] = useState({
    emailReminders: true,
    smsAlerts: false,
    appointmentConfirmations: true,
    paymentNotifications: true,
    systemUpdates: false
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: "Integrated Pest Control Services",
    address: "123 Business Drive, Springfield, IL 62701",
    phone: "(555) 123-PEST",
    email: "info@integratedpest.com",
    website: "www.integratedpest.com",
    license: "IL-PC-2024-001"
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your system preferences and company information</p>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyInfo.name}
                    onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">License Number</Label>
                  <Input
                    id="license"
                    value={companyInfo.license}
                    onChange={(e) => setCompanyInfo({...companyInfo, license: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Input
                  id="address"
                  value={companyInfo.address}
                  onChange={(e) => setCompanyInfo({...companyInfo, address: e.target.value})}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={companyInfo.website}
                    onChange={(e) => setCompanyInfo({...companyInfo, website: e.target.value})}
                  />
                </div>
              </div>

              <Button className="w-full md:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Company Information
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Active Users</h3>
                <Button>Add New User</Button>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Mike Johnson", role: "Technician", email: "mike@integratedpest.com", status: "Active" },
                  { name: "Sarah Davis", role: "Technician", email: "sarah@integratedpest.com", status: "Active" },
                  { name: "Tom Wilson", role: "Technician", email: "tom@integratedpest.com", status: "Active" },
                  { name: "Lisa Brown", role: "Office Manager", email: "lisa@integratedpest.com", status: "Active" },
                  { name: "Admin User", role: "Administrator", email: "admin@integratedpest.com", status: "Active" }
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium">{user.role}</span>
                      <span className="text-sm text-success">{user.status}</span>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Reminders</p>
                    <p className="text-sm text-muted-foreground">Receive email notifications for upcoming appointments</p>
                  </div>
                  <Switch
                    checked={notifications.emailReminders}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, emailReminders: checked})
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Alerts</p>
                    <p className="text-sm text-muted-foreground">Get text messages for urgent updates</p>
                  </div>
                  <Switch
                    checked={notifications.smsAlerts}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, smsAlerts: checked})
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Appointment Confirmations</p>
                    <p className="text-sm text-muted-foreground">Send confirmation messages to customers</p>
                  </div>
                  <Switch
                    checked={notifications.appointmentConfirmations}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, appointmentConfirmations: checked})
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment Notifications</p>
                    <p className="text-sm text-muted-foreground">Notify when payments are received or overdue</p>
                  </div>
                  <Switch
                    checked={notifications.paymentNotifications}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, paymentNotifications: checked})
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Updates</p>
                    <p className="text-sm text-muted-foreground">Get notified about system maintenance and updates</p>
                  </div>
                  <Switch
                    checked={notifications.systemUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, systemUpdates: checked})
                    }
                  />
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-4">Password Policy</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Minimum password length: 8 characters</span>
                      <span className="text-success">✓ Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Require uppercase letters</span>
                      <span className="text-success">✓ Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Require numbers</span>
                      <span className="text-success">✓ Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Require special characters</span>
                      <span className="text-success">✓ Enabled</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Session Management</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Auto-logout after inactivity (30 minutes)</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Two-factor authentication</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Data Protection</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Encrypt customer data</span>
                      <span className="text-success">✓ Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Regular security backups</span>
                      <span className="text-success">✓ Enabled</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Update Security Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Application Settings</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Default appointment duration</Label>
                      <Input value="2 hours" readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label>Business hours</Label>
                      <Input value="8:00 AM - 6:00 PM" readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label>Time zone</Label>
                      <Input value="Central Time (CT)" readOnly />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Database Status</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Database status</span>
                      <span className="text-success">Healthy</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last backup</span>
                      <span>2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage used</span>
                      <span>2.3 GB / 10 GB</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Database className="h-4 w-4 mr-2" />
                      Create Backup
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">System Information</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Version</p>
                    <p className="font-bold">v2.1.0</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Uptime</p>
                    <p className="font-bold">99.9%</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Last Update</p>
                    <p className="font-bold">Jan 15, 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};