
import { Brain, Target, Workflow } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: Brain,
      title: "Dynamic Segmentation Engine",
      description: "Advanced ML algorithms continuously analyze customer behavior, payment history, and demographic data to create precise risk segments that adapt in real-time.",
      benefits: ["Real-time updates", "98% accuracy", "Auto-optimization"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Risk-Adjusted Decisioning",
      description: "Make data-driven decisions with confidence. Our AI engine provides clear risk scores and recommended actions for each customer segment.",
      benefits: ["Predictive scoring", "Action recommendations", "ROI optimization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Workflow,
      title: "Campaign Automation",
      description: "Orchestrate multi-channel campaigns automatically. From field visits to SMS reminders, execute the right strategy for each customer segment.",
      benefits: ["Multi-channel reach", "Automated triggers", "Performance tracking"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed specifically for utility companies to maximize recovery and improve customer relationships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="p-8 pb-0">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="p-8 pt-0">
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
