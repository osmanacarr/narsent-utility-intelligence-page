
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, Zap, BarChart3 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect OSOS, ERP, CRM, and payment systems",
      details: "Seamless API integration with existing utility infrastructure",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "SAGE engine learns patterns and predicts behavior",
      details: "Behavioral learning from structured operational data",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Smart Actions",
      description: "Automated decisioning and campaign triggers",
      details: "Risk-adjusted actions based on real-time segmentation",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Insight Loop",
      description: "Continuous learning and optimization",
      details: "ROI tracking and strategy refinement",
      color: "from-green-500 to-green-600"
    }
  ];

  const dataFlow = [
    {
      stage: "Input",
      items: ["OSOS Data", "Payment History", "CRM Records", "Field Reports"]
    },
    {
      stage: "Processing",
      items: ["Risk Scoring", "Behavioral Analysis", "Pattern Recognition", "Predictive Modeling"]
    },
    {
      stage: "Output",
      items: ["Smart Segments", "Action Triggers", "Field Instructions", "Campaign Automation"]
    }
  ];

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How Narsent Transforms Data Into Action
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw utility data to intelligent automation — see how our AI-powered platform 
              creates actionable insights in real-time.
            </p>
          </div>

          {/* Platform Flow */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Data → Intelligence → Action
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {dataFlow.map((flow, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{flow.stage}</h3>
                      <ul className="space-y-2">
                        {flow.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600 bg-white rounded-lg py-2 px-3">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {index < dataFlow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Four-Stage Intelligence Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in p-6"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs text-gray-600 italic">
                        {step.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to See the Platform in Action?
              </h2>
              <p className="text-gray-600 mb-6">
                Schedule a technical walkthrough and explore how our AI processes your specific 
                utility data into actionable intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                    aria-label="Schedule walkthrough"
                  >
                    Schedule a Walkthrough
                  </Button>
                </Link>
                <Link to="/product">
                  <Button
                    variant="outline"
                    className="px-8 py-3 rounded-lg font-medium border-2 border-gray-300 hover:border-primary hover:text-primary transition-colors"
                    aria-label="Explore platform modules"
                  >
                    Explore Platform Modules
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HowItWorksPage;
