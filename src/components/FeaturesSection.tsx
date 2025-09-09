import { 
  Clock, 
  Smartphone, 
  CreditCard, 
  QrCode, 
  Users, 
  TrendingUp,
  BarChart3,
  Star,
  Shield
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Time Slot Booking",
      description: "Choose your preferred pickup time and avoid long queues during peak hours.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Intuitive mobile app designed for quick ordering on the go between classes.",
      color: "text-accent"
    },
    {
      icon: CreditCard,
      title: "UPI Payments",
      description: "Secure payments through GPay, PhonePe, and Paytm. No cash, no hassles.",
      color: "text-primary"
    },
    {
      icon: QrCode,
      title: "QR Code Pickup",
      description: "Show your QR code or student ID for instant order verification and pickup.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Multiple Stalls",
      description: "Browse menus from all canteen stalls in one place. More variety, more choice.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Real-time Updates",
      description: "Live menu availability, preparation status, and pickup notifications.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Vendor Analytics",
      description: "Staff owners get insights on popular items, peak hours, and revenue tracking.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Reviews & Ratings",
      description: "Rate your meals and help fellow students discover the best food options.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Student Portal",
      description: "Personalized dashboard with order history, favorites, and quick reorders.",
      color: "text-primary"
    }
  ];

  return (
    <section id="featuresection" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            Everything you need for <span className="gradient-text">smart dining</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Qfree brings together students, staff owners, and technology to create the ultimate college dining experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group p-6 rounded-2xl card-gradient border border-border hover:shadow-glow transition-smooth hover:border-primary/50"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-card group-hover:scale-110 transition-bounce`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;