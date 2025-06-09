
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Success!",
      description: "You're now on our R&D updates list.",
    });
    setEmail("");
  };

  const handleContactClick = (type: string) => {
    console.log(`Contact clicked: ${type}`);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/745e4e1d-b603-419e-8c39-e7f0cb97fb7c.png" 
                  alt="narsent" 
                  className="h-8 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-300 leading-relaxed max-w-md">
                  AI-powered decision & insight infrastructure for regulated industries. 
                  Currently in R&D phase, building the future of utility intelligence.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:info@narsent.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => handleContactClick("email")}
                  >
                    info@narsent.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">
                    İzmir, Türkiye
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/product"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="View product overview"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Learn how it works"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="View platform vision"
                  >
                    Platform Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Partner with us"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Contact us"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter - R&D Updates */}
            <div>
              <h3 className="text-lg font-semibold mb-6">R&D Updates</h3>
              <p className="text-gray-300 mb-4">
                Get the latest on debt intelligence & strategic AI development.
              </p>
              <form onSubmit={handleNewsletterSignup} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Link to="/contact">
                  <Button 
                    type="button" 
                    className="w-full bg-primary hover:bg-blue-600"
                    aria-label="Join waitlist"
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} narsent. All rights reserved. Currently in R&D phase.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => handleContactClick("Privacy Policy")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleContactClick("KVKK")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                KVKK
              </button>
              <button
                onClick={() => handleContactClick("Terms")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/narsent/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/narsent.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
