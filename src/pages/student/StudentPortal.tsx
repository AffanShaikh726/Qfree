import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  History,
  ShoppingCart,
  User,
  MapPin,
  QrCode,
  Utensils,
} from "lucide-react";

const StudentPortal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab based on current path
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/student" || path === "/student/" || path.startsWith("/student/home"))
      return "home";
    if (path.startsWith("/student/restaurant")) return "restaurant";
    if (path.startsWith("/student/cart")) return "cart";
    if (path.startsWith("/student/orders")) return "orders";
    if (path.startsWith("/student/history")) return "history";
    if (path.startsWith("/student/profile")) return "profile";
    return "";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  // Update active tab when path changes
  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location.pathname]);

  // Handle tab click
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    switch (value) {
      case "home":
        navigate("/student/home");
        break;
      case "restaurant":
        navigate("/student/restaurant");
        break;
      case "cart":
        navigate("/student/cart");
        break;
      case "orders":
        navigate("/student/orders");
        break;
      case "history":
        navigate("/student/history");
        break;
      case "profile":
        navigate("/student/profile");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Qfree</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Block A</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <QrCode className="w-4 h-4" />
              <span className="hidden sm:inline">Scan QR</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content area where nested routes will be rendered */}
      <main className="flex-1 pb-16 overflow-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 shadow-lg">
        <div className="flex justify-around items-center h-16 px-2">
          {/* Home */}
          <button
            onClick={() => handleTabChange("home")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeTab === "home"
                ? "text-primary"
                : "text-gray-500 hover:text-primary/80"
            }`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </button>

          {/* Restaurant */}
          <button
            onClick={() => handleTabChange("restaurant")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeTab === "restaurant"
                ? "text-primary"
                : "text-gray-500 hover:text-primary/80"
            }`}
          >
            <Utensils className="h-6 w-6" />
            <span className="text-xs mt-1">Restaurants</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => handleTabChange("cart")}
            className={`flex flex-col items-center justify-center w-full h-full relative transition-colors ${
              activeTab === "cart"
                ? "text-primary"
                : "text-gray-500 hover:text-primary/80"
            }`}
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs mt-1">Cart</span>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Orders */}
          <button
            onClick={() => handleTabChange("orders")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeTab === "orders"
                ? "text-primary"
                : "text-gray-500 hover:text-primary/80"
            }`}
          >
            <History className="h-6 w-6" />
            <span className="text-xs mt-1">Orders</span>
          </button>

          {/* History */}
          <button
            onClick={() => handleTabChange("history")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeTab === "history"
                ? "text-primary"
                : "text-gray-500 hover:text-primary/80"
            }`}
          >
            <History className="h-6 w-6" />
            <span className="text-xs mt-1">History</span>
          </button>

          {/* Profile */}
          <button
            onClick={() => handleTabChange("profile")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeTab === "profile"
                ? "text-primary"
                : "text-gray-500 hover:text-primary/80"
            }`}
          >
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default StudentPortal;
