import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Link, MapPin } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import heroImage from "./photos/Front page Hero Section.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 md:pt-24 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 ">
            <div className="space-y-6">
              <h1 className="font-lobster-two text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                Skip the <span className="gradient-text">Queue - </span>
                <br />
                Order Smart
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                Pre-order meals and skip the line — Qfree makes college dining easy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 shadow-glow">
                <RouterLink to="/student-login">
                  Order Now
                </RouterLink>
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('featuresection');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div id="features" className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-card rounded-xl flex items-center justify-center shadow-card">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Save Time</h3>
                  <p className="text-sm text-muted-foreground">No more waiting</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-card rounded-xl flex items-center justify-center shadow-card">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Easy Payment</h3>
                  <p className="text-sm text-muted-foreground">Quick checkout</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-card rounded-xl flex items-center justify-center shadow-card">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">QR Pickup</h3>
                  <p className="text-sm text-muted-foreground">Instant access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300">
              <img 
                src={heroImage} 
                alt="Students enjoying food with Qfree" 
                className="w-full h-auto max-h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Save up to 30 minutes per meal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;