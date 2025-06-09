
import { Button } from "@/components/ui/button";
import { Brain, Database, Zap, Users, Shield, Settings, BarChart3, Workflow } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const ProductOverview = () => {
  const modules = [
    {
      icon: Brain,
      title: "SAGE (Insight Engine)",
      description: "Behavioral learning from structured operational data",
      sampleUse: "Predicts payment behavior with 94% accuracy",
      status: "R&D",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Dynamic Segmentation",
      description: "Real-time customer risk profiling and categorization",
      sampleUse: "Auto-segments 10K+ customers in seconds",
      status: "Prototype",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Risk & Action Engine",
      description: "Automated decisioning and campaign triggers",
      sampleUse: "Triggers field visits for high-risk segments",
      status: "API-first",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Utility Correlation Engine",
      description: "Correlates consumption patterns with payment shifts",
      sampleUse: "Summer spike → delay cutoff campaigns",
      status: "R&D",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Predictive Utility AI",
      description: "Learns from consumption and payment history",
      sampleUse: "Payment decline predicted 2 weeks ahead",
      status: "Prototype",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Workflow,
      title: "Orchestration Layer",
      description: "Seamless integration with CRM, ERP, and field systems",
      sampleUse: "Auto-sync with existing utility workflows",
      status: "API-first",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Regulation Compliance",
      description: "Built-in GDPR, KVKK, and EPDK alignment",
      sampleUse: "Automatic compliance checks for all actions",
      status: "R&D",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Settings,
      title: "Early Warning System",
      description: "Detects emerging risk patterns and economic triggers",
      sampleUse: "New high-risk segment detected in Zone 5",
      status: "Prototype",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "R&D": return "bg-blue-100 text-blue-800";
      case "Prototype": return "bg-purple-100 text-purple-800";
      case "API-first": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Modular AI Platform for Utilities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sector-agnostic architecture with plug-and-play modules. Built for regulated industries, 
              designed for scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
                      {module.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-xs text-gray-500 font-medium mb-1">Sample Use:</p>
                    <p className="text-xs text-gray-600 italic">
                      "{module.sampleUse}"
                    </p>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to See These Modules in Action?
              </h2>
              <p className="text-gray-600 mb-6">
                Schedule a technical walkthrough with our R&D team and explore how these modules 
                can be configured for your specific use case.
              </p>
              <Link to="/contact">
                <Button
                  className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  aria-label="See it in action"
                >
                  See It in Action
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductOverview;
