
import { MapPin, Users, Zap } from "lucide-react";

const GlobalStrategySection = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Vertical Focus in Türkiye",
      description: "Energy → Banking → Municipality sectors",
      status: "Current Phase",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Pilot Launches",
      description: "Regulated emerging markets (MENA, Balkans)",
      status: "Planning",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Plugin-Based API Model",
      description: "Global expansion through integration partnerships",
      status: "Vision",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Narsent's Go-to-Market Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic expansion roadmap for AI-powered utility intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          step.status === 'Current Phase' ? 'bg-green-100 text-green-800' :
                          step.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {step.status}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="hidden md:block w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partnership Call */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Looking for Sector Partners & Innovation Leaders</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join us in shaping the future of utility AI. We're seeking forward-thinking organizations 
                to collaborate on pilot programs and strategic partnerships.
              </p>
              <button 
                onClick={() => console.log("Partnership inquiry clicked")}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStrategySection;
