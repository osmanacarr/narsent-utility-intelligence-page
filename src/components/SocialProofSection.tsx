
import { Award, Users, MapPin, Target } from "lucide-react";

const SocialProofSection = () => {
  const backers = [
    { name: "İTÜ Çekirdek", logo: "İÇ" },
    { name: "VK Boost", logo: "VK" },
    { name: "Teknopark İzmir", logo: "TI" },
  ];

  const goals = [
    { icon: Users, value: "Phase 1", label: "Partner Utilities", color: "text-blue-600" },
    { icon: Target, value: "R&D", label: "Current Focus", color: "text-green-600" },
    { icon: Award, value: "AI-First", label: "Architecture", color: "text-purple-600" },
    { icon: MapPin, value: "Türkiye", label: "Starting Market", color: "text-orange-600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Backed by Leading Innovation Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building the future of utility AI with Turkey's top technology ecosystem
          </p>
        </div>

        {/* R&D Goals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors`}>
                    <Icon className={`w-8 h-8 ${goal.color}`} />
                  </div>
                </div>
                <div className={`text-2xl font-bold ${goal.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {goal.value}
                </div>
                <div className="text-gray-600 font-medium">{goal.label}</div>
              </div>
            );
          })}
        </div>

        {/* Backers Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 animate-slide-in-right">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Supported by Turkey's Innovation Ecosystem
            </h3>
            <p className="text-gray-600">
              Backed by leading technology incubators and accelerators in Turkey
            </p>
          </div>

          <div className="flex justify-center items-center space-x-12">
            {backers.map((backer, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-xl font-bold text-primary">{backer.logo}</span>
                </div>
                <div className="text-sm font-medium text-gray-700">{backer.name}</div>
              </div>
            ))}
          </div>

          {/* Vision Quote */}
          <div className="mt-8 text-center">
            <blockquote className="text-lg text-gray-700 italic max-w-2xl mx-auto">
              "narsent represents the next evolution in utility operations – where AI transforms reactive systems 
              into predictive, intelligent infrastructure."
            </blockquote>
            <div className="mt-4 text-sm text-gray-500">
              - Vision Statement, R&D Phase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
