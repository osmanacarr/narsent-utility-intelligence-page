
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleGetStarted = () => {
    console.log("Get started clicked");
  };

  const handleWatchDemo = () => {
    console.log("Watch how it works clicked");
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-powered{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Utility Debt
                </span>{" "}
                Intelligence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Predict, segment, and act on every customer using your real data. 
                Transform your collections strategy with intelligent automation.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleWatchDemo}
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-primary hover:text-primary transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="text-sm text-gray-500">Trusted by leading utilities</div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Dashboard Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-3 w-16 bg-primary/20 rounded animate-pulse"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">94%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">17%</div>
                      <div className="text-xs text-gray-500">Recovery ↑</div>
                    </div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">2.3x</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                Real-time
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-500">
                AI-powered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
