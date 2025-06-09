
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleCTA = () => {
    console.log("Request Demo clicked");
  };

  const handleNavClick = (section: string) => {
    console.log(`Navigation clicked: ${section}`);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/745e4e1d-b603-419e-8c39-e7f0cb97fb7c.png" 
                alt="narsent" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/product"
              onClick={() => handleNavClick("Product")}
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                isActive("/product") ? "text-primary" : ""
              }`}
            >
              Product
            </Link>
            <Link
              to="/how-it-works"
              onClick={() => handleNavClick("How It Works")}
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                isActive("/how-it-works") ? "text-primary" : ""
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/pricing"
              onClick={() => handleNavClick("Pricing")}
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                isActive("/pricing") ? "text-primary" : ""
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={() => handleNavClick("Contact")}
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                isActive("/contact") ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleCTA}
              className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                to="/product"
                onClick={() => handleNavClick("Product")}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-left"
              >
                Product
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => handleNavClick("How It Works")}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-left"
              >
                How It Works
              </Link>
              <Link
                to="/pricing"
                onClick={() => handleNavClick("Pricing")}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-left"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                onClick={() => handleNavClick("Contact")}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </Link>
              <Button
                onClick={handleCTA}
                className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors mt-4 w-full"
              >
                Request Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
