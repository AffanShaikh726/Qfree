import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Shield, 
  Users, 
  Store, 
  BarChart3, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Activity,
  UserCheck,
  UserX,
  Eye
} from "lucide-react";

const AdminPanel = () => {
  const { toast } = useToast();
  const [pendingVendors, setPendingVendors] = useState([
    { id: 1, name: "Mumbai Street Food", owner: "Raj Patel", cuisine: "Street Food", applied: "2 days ago", documents: "Complete" },
    { id: 2, name: "Fresh Juice Corner", owner: "Priya Sharma", cuisine: "Beverages", applied: "1 day ago", documents: "Pending" },
    { id: 3, name: "Healthy Bites", owner: "Amit Kumar", cuisine: "Health Food", applied: "3 hours ago", documents: "Complete" }
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@university.edu", type: "Student", status: "Active", joinDate: "Jan 2024" },
    { id: 2, name: "Sarah Wilson", email: "sarah@university.edu", type: "Student", status: "Active", joinDate: "Feb 2024" },
    { id: 3, name: "Raj Patel", email: "raj@spicecorner.com", type: "Vendor", status: "Active", joinDate: "Mar 2024" },
    { id: 4, name: "Mike Johnson", email: "mike@university.edu", type: "Student", status: "Suspended", joinDate: "Dec 2023" }
  ]);

  const platformStats = {
    totalUsers: 1248,
    activeVendors: 23,
    totalOrders: 3486,
    totalRevenue: 425000,
    todayOrders: 87,
    pendingApprovals: pendingVendors.length
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active": return <Badge variant="default">Active</Badge>;
      case "Suspended": return <Badge variant="destructive">Suspended</Badge>;
      case "Pending": return <Badge variant="secondary">Pending</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const approveVendor = (vendorId: number) => {
    setPendingVendors(prev => prev.filter(vendor => vendor.id !== vendorId));
    toast({
      title: "Vendor Approved",
      description: "Vendor application has been approved successfully",
    });
  };

  const rejectVendor = (vendorId: number) => {
    setPendingVendors(prev => prev.filter(vendor => vendor.id !== vendorId));
    toast({
      title: "Vendor Rejected",
      description: "Vendor application has been rejected",
      variant: "destructive"
    });
  };

  const toggleUserStatus = (userId: number) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === "Active" ? "Suspended" : "Active" }
        : user
    ));
    toast({
      title: "User Status Updated",
      description: "User status has been updated successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div>
              <h1 className="text-3xl gradient-text">Admin Panel</h1>
              <p className="text-muted-foreground">System Administrator Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>Super Admin</span>
            </Badge>
            <Button variant="outline" size="sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Alerts ({pendingVendors.length})
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+12% this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.activeVendors}</div>
              <p className="text-xs text-muted-foreground">+3 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">+8% this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{platformStats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+15% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Orders</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.todayOrders}</div>
              <p className="text-xs text-muted-foreground">Live count</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.pendingApprovals}</div>
              <p className="text-xs text-muted-foreground">Needs review</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="approvals" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="approvals">Vendor Approvals</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Platform Analytics</TabsTrigger>
            <TabsTrigger value="payments">Payment Monitoring</TabsTrigger>
            <TabsTrigger value="config">System Config</TabsTrigger>
          </TabsList>
          
          <TabsContent value="approvals" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Pending Vendor Applications
                </CardTitle>
                <CardDescription>Review and approve new vendor registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingVendors.map((vendor) => (
                    <div key={vendor.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg space-y-3 lg:space-y-0">
                      <div className="flex-1">
                        <h4 className="font-semibold">{vendor.name}</h4>
                        <p className="text-sm text-muted-foreground">Owner: {vendor.owner}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{vendor.cuisine}</span>
                          <span className="text-xs text-muted-foreground">Applied: {vendor.applied}</span>
                          <Badge variant={vendor.documents === "Complete" ? "default" : "destructive"} className="text-xs">
                            {vendor.documents} Documents
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                          <Eye className="w-3 h-3 mr-1" />
                          Review
                        </Button>
                        <Button 
                          size="sm" 
                          variant="default"
                          onClick={() => approveVendor(vendor.id)}
                          className="flex-1 sm:flex-none"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => rejectVendor(vendor.id)}
                          className="flex-1 sm:flex-none"
                        >
                          <XCircle className="w-3 h-3 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  User Management
                </CardTitle>
                <CardDescription>Manage students, vendors, and system users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg space-y-3 lg:space-y-0">
                      <div className="flex-1">
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-sm text-muted-foreground break-all">{user.email}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{user.type}</Badge>
                          <span className="text-xs text-muted-foreground">Joined: {user.joinDate}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {getStatusBadge(user.status)}
                        <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        {user.status === "Active" ? (
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => toggleUserStatus(user.id)}
                            className="flex-1 sm:flex-none"
                          >
                            <UserX className="w-3 h-3 mr-1" />
                            Suspend
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            variant="default"
                            onClick={() => toggleUserStatus(user.id)}
                            className="flex-1 sm:flex-none"
                          >
                            <UserCheck className="w-3 h-3 mr-1" />
                            Activate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Growth</CardTitle>
                  <CardDescription>User and vendor growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center text-muted-foreground">
                    Growth chart visualization would go here
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Platform revenue and commission</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center text-muted-foreground">
                    Revenue chart visualization would go here
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Payment Monitoring
                </CardTitle>
                <CardDescription>Track transactions and commission</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">₹42,500</div>
                    <p className="text-sm text-muted-foreground">Today's Transactions</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">₹2,125</div>
                    <p className="text-sm text-muted-foreground">Commission Earned</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">₹1,250</div>
                    <p className="text-sm text-muted-foreground">Pending Settlements</p>
                  </div>
                </div>
                <div className="text-center py-8 text-muted-foreground">
                  Detailed payment transactions table would go here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="config" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  System Configuration
                </CardTitle>
                <CardDescription>Manage platform settings and configurations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Platform Settings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Commission Rate</span>
                        <span className="text-sm font-semibold">5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Minimum Order Value</span>
                        <span className="text-sm font-semibold">₹50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Max Preparation Time</span>
                        <span className="text-sm font-semibold">30 minutes</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Notification Settings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Email Notifications</span>
                        <Badge variant="default">Enabled</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">SMS Notifications</span>
                        <Badge variant="default">Enabled</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Push Notifications</span>
                        <Badge variant="default">Enabled</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button variant="outline">Edit Platform Settings</Button>
                  <Button variant="outline">Manage Notifications</Button>
                  <Button variant="outline">System Maintenance</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;