import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();
  
  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle initial scroll if URL has hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const quickLinks = [
    { name: "Features", href: "#featuresection" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Student Portal", href: "/student-login" },
    { name: "Vendor Dashboard", href: "/vendor-login" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/legal/privacypolicy" },
    { name: "Terms & Conditions", href: "/legal/terms" },
    { name: "Cancellation & Refund", href: "/legal/cancellation-refund" },
    { name: "Shipping & Delivery", href: "/legal/shipping-delivery" },
    { name: "Contact Us", href: "/legal/contact" }
  ];

  return (
    <footer id="contact" className="relative bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <span className="text-3xl tracking-tight font-lobster-two">Qfree</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Revolutionizing college dining with smart pre-ordering and queue-free pickup.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={link.href.startsWith('#') ? (e) => scrollToSection(e, link.href.substring(1)) : undefined}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={link.href.startsWith('#') ? (e) => scrollToSection(e, link.href.substring(1)) : undefined}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Contact Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>📧 support@qfree.com</p>
              <p>📱 monishspeaks@gmail.com</p>
              <p>🏢 College Campus, India</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground"> 
            © 2025 <span className="font-lobster-two">Qfree</span>. All rights reserved by Monish | Developed by Affan Shaikh and Monish
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;