
import { Brain, Mic, Network, Map, AlertTriangle } from "lucide-react";

const VisionaryStackSection = () => {
  const modules = [
    {
      icon: Brain,
      name: "Predictive Utility AI",
      description: "Learns from consumption + payment patterns",
      example: "Payment decline predicted next week",
      status: "R&D Phase",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mic,
      name: "Voice-Supported Field Assistant",
      description: "AI tips for technicians in the field",
      example: "Customer unresponsive – suggest partial campaign",
      status: "Prototype",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Network,
      name: "Utility Correlation Engine",
      description: "Correlates energy use & payment shifts",
      example: "Summer dip → delay cutoffs in rural zone",
      status: "Development",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Map,
      name: "Micro-Region Cashflow Maps",
      description: "Maps by transformer / zone",
      example: "Neighborhood X down 14% last month",
      status: "Testing",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: AlertTriangle,
      name: "Early Warning System (EWS)",
      description: "Detects emerging risk segments",
      example: "Economic trigger → new segment emerging",
      status: "Concept",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            R&D-Driven Vision, Built With Utility Minds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI modules currently in development for next-generation utility intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 p-6 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {module.name}
                    </h3>
                    <div className="text-xs text-white bg-gray-600 px-2 py-1 rounded-full inline-block">
                      {module.status}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  {module.description}
                </p>

                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Sample Use:</p>
                  <p className="text-sm text-gray-600 italic">"{module.example}"</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* API-First Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full">
            <span className="font-medium">API-First Architecture</span>
            <span className="text-white/80">•</span>
            <span className="font-medium">Sector-Agnostic Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionaryStackSection;
