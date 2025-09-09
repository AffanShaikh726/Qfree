import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  CreditCard, 
  QrCode, 
  History, 
  ShoppingCart,
  Star,
  MapPin,
  Timer,
  Plus
} from "lucide-react";

const StudentPortal = () => {
  const [cart, setCart] = useState([
    { id: 1, item: "Chicken Biryani", stall: "Spice Corner", price: 120, quantity: 1 },
    { id: 2, item: "Masala Dosa", stall: "South Indian Express", price: 80, quantity: 2 }
  ]);

  const orderHistory = [
    { id: 1, items: "Chicken Biryani, Lassi", total: 150, status: "Completed", date: "Today, 1:30 PM", stall: "Spice Corner" },
    { id: 2, items: "Masala Dosa x2", total: 160, status: "Completed", date: "Yesterday, 12:45 PM", stall: "South Indian Express" },
    { id: 3, items: "Paneer Roll, Cold Coffee", total: 110, status: "Cancelled", date: "2 days ago", stall: "Quick Bites" }
  ];

  const stalls = [
    { 
      name: "Spice Corner", 
      cuisine: "North Indian", 
      rating: 4.5, 
      estimatedTime: "15-20 min",
      popular: ["Chicken Biryani ₹120", "Mutton Curry ₹140", "Garlic Naan ₹30"]
    },
    { 
      name: "South Indian Express", 
      cuisine: "South Indian", 
      rating: 4.3, 
      estimatedTime: "10-15 min",
      popular: ["Masala Dosa ₹80", "Idli Sambhar ₹60", "Filter Coffee ₹25"]
    },
    { 
      name: "Quick Bites", 
      cuisine: "Fast Food", 
      rating: 4.0, 
      estimatedTime: "5-10 min",
      popular: ["Paneer Roll ₹70", "Veg Burger ₹50", "Cold Coffee ₹40"]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">Student Portal</h1>
            <p className="text-sm sm:text-base text-muted-foreground pl-[2px]">Welcome back, John!</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Block A</span>
            </Badge>
            {/* <Button size="sm" variant="outline" className="gap-1">
              <QrCode className="w-4 h-4" />
              <span className="hidden sm:inline">Scan QR</span>
            </Button> */}
          </div>
        </div>

        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            <TabsTrigger value="browse" className="text-xs sm:text-sm p-2">Browse</TabsTrigger>
            <TabsTrigger value="cart" className="text-xs sm:text-sm p-2">
              Cart ({cart.length})
            </TabsTrigger>
            <TabsTrigger value="orders" className="text-xs sm:text-sm p-2">Orders</TabsTrigger>
            <TabsTrigger value="profile" className="text-xs sm:text-sm p-2">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {stalls.map((stall, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <CardTitle className="text-base sm:text-lg">{stall.name}</CardTitle>
                        <CardDescription>{stall.cuisine}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {stall.rating}
                      </Badge>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Timer className="w-3 h-3 mr-1" />
                      {stall.estimatedTime}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Popular Items</h4>
                      {stall.popular.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="truncate pr-2">{item}</span>
                          <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                      <Button className="w-full mt-2" size="sm">
                        View Menu
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cart" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Your Cart
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length > 0 ? (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{item.item}</h4>
                          <p className="text-sm text-muted-foreground">{item.stall}</p>
                        </div>
                        <div className="text-right">
                          <p>₹{item.price * item.quantity}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                    <div className="space-y-3 mt-4">
                      <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span>₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</span>
                      </div>
                      <Button className="w-full">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Proceed to Pay
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="w-5 h-5 mr-2" />
                  Order History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{order.items}</h4>
                        <p className="text-sm text-muted-foreground">{order.stall} • {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{order.total}</p>
                        <Badge 
                          variant={order.status === "Completed" ? "default" : "destructive"}
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold">Name</label>
                    <p className="text-muted-foreground">John Doe</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Email</label>
                    <p className="text-muted-foreground">john@university.edu</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Student ID</label>
                    <p className="text-muted-foreground">STU2024001</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Campus</label>
                    <p className="text-muted-foreground">Main Campus</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentPortal;