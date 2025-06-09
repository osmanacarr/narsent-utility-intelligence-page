
import { Database, Layers, Zap, Settings, Shield } from "lucide-react";

const PlatformArchitectureSection = () => {
  const layers = [
    {
      icon: Database,
      name: "Insight Engine (SAGE)",
      description: "Behavioral learning from structured data",
      tag: "AI-first",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Layers,
      name: "Segment-as-a-Service",
      description: "Plug-and-play APIs with ready segments",
      tag: "API-first",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      name: "Risk & Action Engine",
      description: "Scoring + decisioning automation",
      tag: "Real-time",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Settings,
      name: "Orchestration Layer",
      description: "Links to CRM, ERP, field ops tools",
      tag: "Integration",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      name: "Regulation Layer",
      description: "Customizable for GDPR/KVKK/EPDK",
      tag: "Compliance",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Insight Infrastructure: How Narsent Scales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modular platform architecture designed for enterprise-scale intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${layer.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {layer.name}
                        </h3>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${layer.color} text-white`}>
                          {layer.tag}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {layer.description}
                      </p>
                    </div>

                    <div className="hidden md:block w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Visualization */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-600">Data In</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">AI Processing</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500"></div>
              <span className="text-sm font-medium text-gray-600">Actions Out</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitectureSection;
