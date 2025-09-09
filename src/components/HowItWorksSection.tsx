import { Search, ShoppingCart, CreditCard, QrCode } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Browse Stalls",
      description: "Students explore available stalls, view live menus, prices, and preparation times.",
      color: "text-primary"
    },
    {
      step: "02", 
      icon: ShoppingCart,
      title: "Place Order",
      description: "Select items, choose pickup time slot, and add special instructions if needed.",
      color: "text-accent"
    },
    {
      step: "03",
      icon: CreditCard,
      title: "Secure Payment", 
      description: "Complete payment through UPI (GPay/PhonePe/Paytm) for a cashless experience.",
      color: "text-primary"
    },
    {
      step: "04",
      icon: QrCode,
      title: "Quick Pickup",
      description: "Show QR code or student ID at pickup for instant order verification.",
      color: "text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="absolute inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.05]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            How <span className="gradient-text">Qfree</span> Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Simple, fast, and efficient. Get your favorite meals in just a few taps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.step} 
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                {/* Step Number */}
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-16 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
                  )}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-gradient-to-br from-card to-card/80 border border-border/20 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Icon className={`w-7 h-7 ${step.color}`} />
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>

        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-card rounded-2xl p-6 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold">Download the App</h4>
              <p className="text-sm text-muted-foreground">Available for iOS and Android</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;