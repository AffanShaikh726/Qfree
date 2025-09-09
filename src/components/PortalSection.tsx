import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Store, 
  Shield, 
  Clock,
  CreditCard,
  BarChart3,
  Settings,
  Users,
  Bell,
  TrendingUp,
  Star,
  Zap
} from "lucide-react";

const PortalSection = () => {
  const portals = [
    {
      title: "Students",
      icon: GraduationCap,
      description: "Pre-order meals, skip queues, and enjoy hassle-free dining across classes.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      buttonVariant: "hero" as const,
      features: [
        { icon: Clock, text: "Browse multiple stall menus" },
        { icon: Zap, text: "Choose pickup time slots" },
        { icon: CreditCard, text: "UPI payment integration" },
        { icon: Bell, text: "Order history & reorders" },
        { icon: Star, text: "QR code pickup" }
      ]
    },
    {
      title: "Staff Owners",
      icon: Store,
      description: "Manage your menu, track orders, and grow your business with data insights.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      buttonVariant: "default" as const,
      features: [
        { icon: BarChart3, text: "Real-time order management" },
        { icon: Settings, text: "Menu & pricing control" },
        { icon: TrendingUp, text: "Sales analytics & reports" },
        { icon: Bell, text: "Customer feedback system" },
        { icon: Users, text: "Inventory tracking" }
      ]
    },
    {
      title: "Admin Panel",
      icon: Shield,
      description: "Oversee the entire system, manage users, and monitor platform performance.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      buttonVariant: "secondary" as const,
      features: [
        { icon: Users, text: "User management system" },
        { icon: Shield, text: "Staff approval process" },
        { icon: BarChart3, text: "Platform analytics" },
        { icon: Settings, text: "Payment monitoring" },
        { icon: Bell, text: "System configuration" }
      ]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            Choose Your <span className="gradient-text">Portal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Different experiences tailored for students, vendors, and administrators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <Card key={portal.title} className="relative card-gradient border-border hover:shadow-glow transition-smooth group">
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${portal.bgColor} flex items-center justify-center shadow-card group-hover:scale-110 transition-bounce`}>
                    <Icon className={`w-8 h-8 ${portal.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{portal.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {portal.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {portal.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <FeatureIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  <Button 
                    variant={portal.buttonVariant} 
                    className={`w-full font-semibold ${portal.title === "Staff Owners" ? 'text-white bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500' : ''}`}
                    size="lg"
                    asChild
                  >
                    <Link to={
                      portal.title === "Students" ? "/student-portal" : 
                      portal.title === "Staff Owners" ? "/vendor-dashboard" : 
                      "/admin-panel"
                    }>
                      {portal.title === "Students" ? "Student Portal" : 
                       portal.title === "Staff Owners" ? "Vendor Dashboard" : 
                       "Admin Access"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortalSection;