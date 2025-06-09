
import { Clock, Zap, TrendingUp } from "lucide-react";

const WhyNarsentSection = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Legacy ERPs record the past. We predict the future.",
      description: "Traditional systems tell you what happened yesterday. Narsent's AI learns from patterns to show you what will happen tomorrow.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "CRMs run workflows. Narsent triggers the right one.",
      description: "Stop manual decision-making. Our intelligent orchestration layer automatically selects and executes the optimal strategy for each customer.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Reports tell you what happened. Narsent tells you what to do next.",
      description: "Move beyond reactive analytics. Get prescriptive insights with clear actions that drive measurable outcomes.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why We're Building Narsent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            The world is still reactive. Let's build proactivity into operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in p-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyNarsentSection;
