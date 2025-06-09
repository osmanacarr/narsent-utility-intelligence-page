
import { ArrowRight, Target, BarChart3, Zap, TrendingUp } from "lucide-react";

const InsightEconomySection = () => {
  const steps = [
    { icon: BarChart3, label: "Insight", color: "text-blue-600" },
    { icon: Target, label: "Segment", color: "text-purple-600" },
    { icon: Zap, label: "Action", color: "text-orange-600" },
    { icon: TrendingUp, label: "ROI", color: "text-green-600" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Insight Economy Framework
            </h2>
            
            {/* Flow Visualization */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-white rounded-full shadow-lg border-2 border-gray-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{step.label}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <p className="text-2xl font-semibold text-gray-900">
              This is not just software.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Narsent builds internal insight economies for every enterprise.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Automated decisions. Scalable intelligence. Sector-agnostic.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Automated Decisions</h3>
              <p className="text-blue-600 text-sm">AI-driven choices without human intervention</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Scalable Intelligence</h3>
              <p className="text-purple-600 text-sm">Grows with your operational complexity</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">Sector-Agnostic</h3>
              <p className="text-orange-600 text-sm">Adaptable across regulated industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightEconomySection;
