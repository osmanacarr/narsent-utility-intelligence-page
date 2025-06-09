
import { Award, TrendingUp, Users, MapPin } from "lucide-react";

const SocialProofSection = () => {
  const backers = [
    { name: "İTÜ Çekirdek", logo: "İÇ" },
    { name: "VK Boost", logo: "VK" },
    { name: "Teknopark İzmir", logo: "TI" },
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Utility Companies", color: "text-blue-600" },
    { icon: TrendingUp, value: "€2.5M+", label: "Recovered Revenue", color: "text-green-600" },
    { icon: Award, value: "94%", label: "Prediction Accuracy", color: "text-purple-600" },
    { icon: MapPin, value: "3", label: "Countries", color: "text-orange-600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing community of utility companies transforming their operations with AI
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Backers Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 animate-slide-in-right">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Backed by Leading Innovation Partners
            </h3>
            <p className="text-gray-600">
              Supported by Turkey's top technology incubators and accelerators
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

          {/* Testimonial Quote */}
          <div className="mt-8 text-center">
            <blockquote className="text-lg text-gray-700 italic max-w-2xl mx-auto">
              "narsent represents the future of utility operations - where AI meets practical business outcomes. 
              Their approach to debt intelligence is revolutionary."
            </blockquote>
            <div className="mt-4 text-sm text-gray-500">
              - Innovation Partner Review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
