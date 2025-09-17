import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "./photos/Logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
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

  const navLinks = [
    { href: "#featuresection", text: "Features" },
    { href: "#how-it-works", text: "How It Works" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Qfree Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-2xl tracking-tight font-lobster-two">Qfree</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href.substring(1))}
                className="text-muted-foreground hover:text-foreground transition-smooth group"
              >
                {link.text}
                <div className="bg-primary h-[2.4px] w-0 group-hover:w-full transition-all duration-500"></div>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-muted-foreground hover:text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
            <Link to="/student-login">
              <Button variant="hero" size="sm">
                Student
              </Button>
            </Link>
            <Link to="/vendor-login">
              <Button 
                variant="default" 
                className="font-bold text-white bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500" 
                size="sm"
              >
                Vendor
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
                      <ThemeToggle />
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href.substring(1))}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-2 border-t border-border">
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link to="/student-login" className="block w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="hero" size="default" className="w-full">
                      Student
                    </Button>
                  </Link>
                  <Link to="/vendor-login" className="block w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      variant="default" 
                      className="font-bold w-full text-white bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500" 
                      size="default"
                    >
                      Vendor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;