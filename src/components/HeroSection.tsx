
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const handleSeeHowItWorks = () => {
    console.log("See how it works clicked");
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Vision Badge */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
          Currently in R&D – Partner with us to shape the future
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-powered{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Decision & Insight
                </span>{" "}
                Infrastructure
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-4">
                More than dashboards. Narsent predicts, explains, and acts — intelligently.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                From risk segmentation to strategic automation, Narsent becomes your AI partner for data-driven operations.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  aria-label="Join the waitlist"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-primary hover:text-primary transition-all duration-300 group"
                  aria-label="See how it works"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-700 italic">
                "We are building the AI co-pilot for utility-scale operations."
              </p>
            </div>
          </div>

          {/* Visual - Dashboard Mockup */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Dashboard Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-32 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-3 w-20 bg-primary/20 rounded animate-pulse"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">AI</div>
                      <div className="text-xs text-gray-500">Predictive</div>
                    </div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">R&D</div>
                      <div className="text-xs text-gray-500">Vision</div>
                    </div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">API</div>
                      <div className="text-xs text-gray-500">First</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-primary/30 to-primary/10 rounded w-full"></div>
                  <div className="h-2 bg-gradient-to-r from-accent/30 to-accent/10 rounded w-4/5"></div>
                  <div className="h-2 bg-gradient-to-r from-green-300 to-green-100 rounded w-3/5"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                Vision-stage
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-500">
                R&D-powered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
