
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, Zap, BarChart3, Download, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const HowItWorksPage = () => {
  const dataFlow = [
    {
      icon: Database,
      title: "Data Sources",
      description: "OSOS, CRM, ERP, Banking APIs",
      items: ["Customer records", "Payment history", "Consumption data", "Demographic info"]
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "SAGE Engine Analysis",
      items: ["Behavioral patterns", "Risk scoring", "Segmentation", "Prediction models"]
    },
    {
      icon: Zap,
      title: "Intelligent Actions",
      description: "Automated Orchestration",
      items: ["Field visit triggers", "SMS campaigns", "Payment plans", "Dashboard updates"]
    }
  ];

  const insightLoop = [
    {
      title: "Insight",
      description: "AI identifies patterns and anomalies in customer behavior",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Segment",
      description: "Customers automatically grouped by risk, behavior, and potential",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Action",
      description: "Targeted campaigns and interventions triggered automatically",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "ROI",
      description: "Measurable outcomes feed back to improve future predictions",
      color: "from-green-500 to-green-600"
    }
  ];

  const handleDownload = () => {
    console.log("Download Platform Overview clicked");
  };

  const handleSchedule = () => {
    console.log("Schedule a Walkthrough clicked");
  };

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How narsent Transforms Data into Action
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw utility data to intelligent automation - understand the complete flow 
              of insight-driven operations.
            </p>
          </div>

          {/* Data Flow Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
              Platform Logic & AI Flow
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {dataFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in"
                         style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                      
                      <ul className="text-sm text-gray-500 space-y-1">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Arrow */}
                    {index < dataFlow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Insight Loop Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
              The Insight → Action → ROI Loop
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insightLoop.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center animate-fade-in hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Process Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What Enters → How AI Interprets → What Happens
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What Enters</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Real-time consumption data</p>
                  <p>• Payment transaction history</p>
                  <p>• Customer service interactions</p>
                  <p>• Economic indicators</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">AI Interpretation</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Behavioral pattern recognition</p>
                  <p>• Risk probability calculation</p>
                  <p>• Optimal timing prediction</p>
                  <p>• Channel preference analysis</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Automated Actions</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Personalized payment reminders</p>
                  <p>• Field technician dispatch</p>
                  <p>• Payment plan offers</p>
                  <p>• Dashboard alerts</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to See the Platform in Detail?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get comprehensive documentation or schedule a technical walkthrough 
                with our R&D team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleDownload}
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Platform Overview
                </Button>
                <Button
                  onClick={handleSchedule}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-medium"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Walkthrough
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HowItWorksPage;
