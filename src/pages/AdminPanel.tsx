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
      <div className="max-w-7xl mx-auto space-y-6 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <div className=" sm:block h-6 w-px bg-border" />
            <div>
              <h1 className="text-2xl sm:text-3xl gradient-text">Admin Panel</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">System Administrator Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Badge variant="secondary" className="flex items-center space-x-1 text-xs sm:text-sm">
              <Shield className="w-3 h-3" />
              <span>Super Admin</span>
            </Badge>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm flex-1 sm:flex-none">
              <AlertTriangle className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Alerts</span> ({pendingVendors.length})
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {[
            { title: "Total Users", value: platformStats.totalUsers, icon: Users, trend: "+12% this month" },
            { title: "Active Vendors", value: platformStats.activeVendors, icon: Store, trend: "+3 this week" },
            { title: "Total Orders", value: platformStats.totalOrders, icon: BarChart3, trend: "+8% this week" },
            { title: "Total Revenue", value: `₹${platformStats.totalRevenue.toLocaleString()}`, icon: DollarSign, trend: "+15% this month" },
            { title: "Today's Orders", value: platformStats.todayOrders, icon: Activity, trend: "Live count" },
            { title: "Pending Approvals", value: platformStats.pendingApprovals, icon: Clock, trend: "Needs review" }
          ].map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </div>
                <div className="mt-1">
                  <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.trend}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="approvals" className="w-full">
        <div
  className="
    relative w-full overflow-x-auto 
    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
  "
  style={{ scrollbarWidth: "thin", msOverflowStyle: "none" }} // Firefox + IE/Edge cleanup
>
  <TabsList
    className="
      flex w-max gap-2 whitespace-nowrap
      sm:grid sm:w-full sm:grid-cols-5 sm:gap-2
    "
  >
    <TabsTrigger value="approvals" className="whitespace-nowrap">Vendor Approvals</TabsTrigger>
    <TabsTrigger value="users" className="whitespace-nowrap">User Management</TabsTrigger>
    <TabsTrigger value="analytics" className="whitespace-nowrap">Platform Analytics</TabsTrigger>
    <TabsTrigger value="payments" className="whitespace-nowrap">Payment Monitoring</TabsTrigger>
    <TabsTrigger value="config" className="whitespace-nowrap">System Config</TabsTrigger>
  </TabsList>
</div>

          
          <TabsContent value="approvals" className="mt-4 sm:mt-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Pending Vendor Applications
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Review and approve new vendor registrations</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  {pendingVendors.map((vendor) => (
                    <div key={vendor.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base truncate">{vendor.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">Owner: {vendor.owner}</p>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          <span className="text-[10px] sm:text-xs text-muted-foreground">{vendor.cuisine}</span>
                          <span className="text-[10px] sm:text-xs text-muted-foreground">• Applied: {vendor.applied}</span>
                          <Badge variant={vendor.documents === "Complete" ? "default" : "destructive"} className="text-[10px] sm:text-xs h-5">
                            {vendor.documents} Documents
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm h-8 sm:h-9 flex-1 sm:flex-none">
                          <Eye className="w-3 h-3 sm:mr-1" />
                          <span className="hidden sm:inline">Review</span>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="default"
                          onClick={() => approveVendor(vendor.id)}
                          className="h-8 sm:h-9 flex-1 sm:flex-none"
                        >
                          <CheckCircle className="w-3 h-3 sm:mr-1" />
                          <span className="hidden sm:inline">Approve</span>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => rejectVendor(vendor.id)}
                          className="h-8 sm:h-9 flex-1 sm:flex-none"
                        >
                          <XCircle className="w-3 h-3 sm:mr-1" />
                          <span className="hidden sm:inline">Reject</span>
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