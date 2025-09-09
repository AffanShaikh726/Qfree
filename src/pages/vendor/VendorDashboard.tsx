import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Store, 
  Bell, 
  TrendingUp, 
  Settings, 
  Package, 
  DollarSign,
  Clock,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Edit,
  Plus,
  Eye
} from "lucide-react";

const VendorDashboard = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState([
    { id: "ORD001", customer: "John D.", items: "Chicken Biryani x1", amount: 120, status: "pending", time: "2 min ago" },
    { id: "ORD002", customer: "Sarah M.", items: "Masala Dosa x2, Coffee x1", amount: 185, status: "preparing", time: "5 min ago" },
    { id: "ORD003", customer: "Mike R.", items: "Paneer Roll x1", amount: 70, status: "ready", time: "8 min ago" },
    { id: "ORD004", customer: "Emma W.", items: "Veg Burger x2", amount: 100, status: "completed", time: "15 min ago" }
  ]);

  const [menuItems] = useState([
    { id: 1, name: "Chicken Biryani", price: 120, available: true, category: "Main Course" },
    { id: 2, name: "Masala Dosa", price: 80, available: true, category: "South Indian" },
    { id: 3, name: "Paneer Roll", price: 70, available: false, category: "Snacks" },
    { id: 4, name: "Filter Coffee", price: 25, available: true, category: "Beverages" }
  ]);

  const stats = {
    todayRevenue: 2850,
    todayOrders: 24,
    pendingOrders: orders.filter(o => o.status === "pending" || o.status === "preparing").length
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="w-4 h-4 text-white-500" />;
      case "preparing": return <AlertCircle className="w-4 h-4 text-black-500" />;
      case "ready": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "completed": return <CheckCircle className="w-4 h-4 text-gray-500" />;
      default: return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "destructive",
      preparing: "default",
      ready: "secondary",
      completed: "outline"
    };
    return variants[status as keyof typeof variants] || "outline";
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast({
      title: "Order Updated",
      description: `Order ${orderId} status changed to ${newStatus}`,
    });
  };

  const getNextStatus = (currentStatus: string) => {
    const statusFlow = {
      pending: "preparing",
      preparing: "ready",
      ready: "completed",
      completed: "completed"
    };
    return statusFlow[currentStatus as keyof typeof statusFlow] || currentStatus;
  };

  return (
    <div className="min-h-screen bg-background p-3 pt-5 sm:p-4  md:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link 
              to="/" 
              className="shrink-0 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">Vendor Dashboard</h1>
              <p className="text-sm sm:text-base text-muted-foreground pl-[2px]">Spice Corner - Main Campus</p>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="gap-1 h-8">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notifications</span>
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full bg-primary text-primary-foreground ml-1">3</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:p-4">
              <CardTitle className="text-xs sm:text-sm font-medium">Today's Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-3 sm:p-4 pt-0">
              <div className="!text-3xl sm:text-xl md:text-2xl">₹{stats.todayRevenue}</div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:p-4">
              <CardTitle className="text-xs sm:text-sm font-medium">Orders Today</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-3 sm:p-4 pt-0">
              <div className="!text-3xl sm:text-xl md:text-2xl">{stats.todayOrders}</div>
              {/* <p className="text-xs text-muted-foreground">+3 from yesterday</p> */}
            </CardContent>
          </Card>
          <Card className="h-full border-destructive/50 dark:border-destructive/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:p-4">
              <CardTitle className="text-xs sm:text-sm font-medium">Pending</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-3 sm:p-4 pt-0">
              <div className="text-2xl sm:text-3xl font-semibold">
                {stats.pendingOrders > 0 ? (
                  <span className="flex items-center gap-1">
                    {stats.pendingOrders}
                    {stats.pendingOrders > 0 && (
                      <span className="ml-1 inline-flex h-2 w-2 rounded-full bg-destructive"></span>
                    )}
                  </span>
                ) : '0'}
              </div>
              <p className="text-xs text-muted-foreground">
                {stats.pendingOrders > 0 ? 'Needs attention' : 'All clear'}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="flex w-full flex-wrap gap-1 sm:gap-2">
            <TabsTrigger value="orders" className="flex-1 min-w-[120px] text-xs sm:text-sm">Live Orders</TabsTrigger>
            <TabsTrigger value="menu" className="flex-1 min-w-[120px] text-xs sm:text-sm">Menu</TabsTrigger>
            {/* <TabsTrigger value="analytics" className="flex-1 min-w-[100px] text-xs sm:text-sm">Analytics</TabsTrigger> */}
            <TabsTrigger value="settings" className="flex-1 min-w-[100px] text-xs sm:text-sm">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="mt-4">
            <Card className="overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      <span>Real-time Orders</span>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Manage and update order status in real-time
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <Button variant="outline" size="sm" className="gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span className="hidden sm:inline">Order History</span>
                    </Button> */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y border-t mt-4">
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <div key={order.id} className="p-4 hover:bg-muted/10 transition-colors !border-b">
                        <div className="space-y-3">
                          {/* Top Row */}
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                              <Badge 
                                  variant={getStatusBadge(order.status) as any}
                                  className="text-xs h-5 px-1.5 flex items-center gap-1"
                                >
                                  {getStatusIcon(order.status)}
                                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </Badge>
                                <span className="font-medium">Order #{order.id}</span>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {order.customer} • {order.time}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-2xl">₹{order.amount}</div>
                            </div>
                          </div>
                          
                          {/* Order Items */}
                          <div className="bg-muted/5 border rounded-md p-3 -mx-1">
                            <div className="text-sm">{order.items}</div>
                          </div>
                          
                          {/* Action Button */}
                          <div>
                            <Button 
                              size="sm" 
                              className={`w-full sm:w-40 ${order.status !== "completed" ? 'bg-green-600 hover:bg-green-700' : ''}`}
                              variant={order.status === "completed" ? "outline" : "default"}
                              onClick={() => updateOrderStatus(order.id, getNextStatus(order.status))}
                              disabled={order.status === "completed"}
                            >
                              {order.status === "completed" ? "Order Completed" : "Mark as " + getNextStatus(order.status)[0].toUpperCase() + getNextStatus(order.status).slice(1)}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center">
                      <Package className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                      <h4 className="font-medium">No active orders</h4>
                      <p className="text-sm text-muted-foreground mt-1">New orders will appear here</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu" className="space-y-6 mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Menu Items</h3>
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                Add New Item
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <Badge variant={item.available ? "default" : "destructive"}>
                        {item.available ? "Available" : "Out of Stock"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">₹{item.price}</span>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* <TabsContent value="analytics" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Trends</CardTitle>
                  <CardDescription>Revenue over the last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center text-muted-foreground">
                    Chart visualization would go here
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Popular Items</CardTitle>
                  <CardDescription>Best selling items this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Chicken Biryani</span>
                      <span className="font-semibold">45 orders</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Masala Dosa</span>
                      <span className="font-semibold">32 orders</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Filter Coffee</span>
                      <span className="font-semibold">28 orders</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent> */}

          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Stall Settings
                </CardTitle>
                <CardDescription>Manage your stall configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold">Stall Name</label>
                    <p className="text-muted-foreground">Spice Corner</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Cuisine Type</label>
                    <p className="text-muted-foreground">North Indian</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Operating Hours</label>
                    <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Contact</label>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button variant="outline">Edit Details</Button>
                  <Button variant="outline">Payment Settings</Button>
                  <Button variant="outline">Notification Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;