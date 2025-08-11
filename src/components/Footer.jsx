import { Coffee, Mail, Phone, MapPin } from 'react-feather';

const currentYear = new Date().getFullYear();
const displayYear = currentYear > 2025 ? `2025-${currentYear}` : "2025";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-200 text-white">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">
                QueueFree
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Revolutionizing college dining with smart pre-ordering and queue-free pickup.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Vendor Dashboard</a></li>
            </ul>
          </div>

          {/* Support 
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>*/}

          {/* Contact */}
          <div className="space-y-4" id="contact">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <span>support@queuefree.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span>monishspeaks@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span>College Campus, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {displayYear} QueueFree. All rights reserved with monish. | For SRM STUDENTS Exclusively available</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
