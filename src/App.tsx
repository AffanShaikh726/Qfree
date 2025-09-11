import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider 
    attribute="class"
    defaultTheme="light"
    enableSystem={false}
    storageKey="theme"
    disableTransitionOnChange
    >
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          {/* Legal Pages */}
          <Route path="/legal/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<TermsAndConditions />} />
          <Route path="/legal/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/legal/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/legal/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;