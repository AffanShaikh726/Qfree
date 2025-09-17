import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentLogin from "./pages/student/StudentLogin";
import VendorLogin from "./pages/vendor/VendorLogin";
import StudentPortal from "./pages/student/StudentPortal";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import AdminPanel from "./pages/AdminPanel";
import PrivacyPolicy from "./pages/legal/privacypolicy";
import TermsAndConditions from "./pages/legal/terms";
import CancellationRefund from "./pages/legal/cancellation-refund";
import ShippingDelivery from "./pages/legal/shipping-delivery";
import ContactUs from "./pages/legal/contact";
import { RestaurantPage } from "./pages/student/RestaurantPage";
import { StudentHome } from "./pages/student/StudentHome";
import { Cart } from "./components/cart/Cart";
import Orders from "./pages/student/Orders";

// Custom Theme Provider (React Router friendly)
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Sonner />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/vendor-login" element={<VendorLogin />} />

          {/* Student Portal (nested routes) */}
          <Route path="/student" element={<StudentPortal />}>
            <Route index element={<StudentHome />} />
            <Route path="home" element={<StudentHome />} />
            <Route path="restaurant" element={<RestaurantPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route 
              path="history" 
              element={
                <div className="container mx-auto p-4 max-w-2xl">
                  <h2 className="text-2xl font-bold mb-4">Order History</h2>
                  <p className="text-muted-foreground">
                    Your order history will appear here
                  </p>
                </div>
              }
            />
            <Route
              path="profile"
              element={
                <div className="container mx-auto p-4 max-w-2xl">
                  <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
                  <p className="text-muted-foreground">
                    Manage your account settings and preferences
                  </p>
                </div>
              }
            />
          </Route>

          {/* Vendor & Admin */}
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/admin-panel" element={<AdminPanel />} />

          {/* Legal Pages */}
          <Route path="/legal/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<TermsAndConditions />} />
          <Route
            path="/legal/cancellation-refund"
            element={<CancellationRefund />}
          />
          <Route
            path="/legal/shipping-delivery"
            element={<ShippingDelivery />}
          />
          <Route path="/legal/contact" element={<ContactUs />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
