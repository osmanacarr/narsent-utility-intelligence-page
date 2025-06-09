
import { Database, Users, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Database,
      title: "Connect Data Sources",
      description: "Seamlessly integrate with your OSOS, ERP, and banking systems. Our platform unifies all customer touchpoints for complete visibility.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Intelligent Segmentation",
      description: "AI algorithms analyze payment patterns, demographics, and behavioral data to segment customers by payment likelihood and risk score.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Automated Actions",
      description: "Trigger personalized field visits, SMS campaigns, and payment plans automatically based on real-time risk assessment.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How narsent Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to transform your debt collection strategy with AI-powered intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 transform translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200" 
                       style={{ left: 'calc(50% + 60px)', width: 'calc(100% - 120px)' }}>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
