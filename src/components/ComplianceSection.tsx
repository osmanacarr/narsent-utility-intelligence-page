
import { Shield, Lock, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ComplianceSection = () => {
  const complianceItems = [
    {
      id: "kvkk",
      title: "KVKK Alignment",
      description: "Designed with Turkey's Personal Data Protection Law (KVKK) requirements in mind. Our architecture ensures data processing compliance from day one.",
      details: "Built-in data minimization, purpose limitation, and consent management frameworks ready for KVKK compliance."
    },
    {
      id: "gdpr",
      title: "GDPR Ready Architecture",
      description: "European General Data Protection Regulation compliant design for international operations and data transfers.",
      details: "Privacy by design principles, data subject rights management, and cross-border data transfer safeguards integrated into our platform architecture."
    },
    {
      id: "epdk",
      title: "EPDK-Driven Architecture",
      description: "Platform designed for Turkey's Energy Market Regulatory Authority requirements and utility sector compliance needs.",
      details: "Specialized processes for energy sector data handling, customer protection requirements, and regulatory reporting capabilities."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-primary mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Designed with KVKK & GDPR Alignment
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Ready for EPDK-driven architecture and compliance-first sectors
            </p>
          </div>

          {/* Compliance Badges */}
          <div className="flex justify-center items-center space-x-8 mb-12 animate-slide-in-right">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 group-hover:shadow-xl transition-shadow">
                <span className="text-2xl font-bold text-primary">K</span>
              </div>
              <div className="text-sm font-medium text-gray-700">KVKK Ready</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 group-hover:shadow-xl transition-shadow">
                <span className="text-2xl font-bold text-primary">G</span>
              </div>
              <div className="text-sm font-medium text-gray-700">GDPR Ready</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 group-hover:shadow-xl transition-shadow">
                <span className="text-2xl font-bold text-primary">E</span>
              </div>
              <div className="text-sm font-medium text-gray-700">EPDK Aligned</div>
            </div>
          </div>

          {/* Compliance Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {complianceItems.map((item, index) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left hover:text-primary">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-8 space-y-3">
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                        {item.details}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center animate-fade-in">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-600">All data encrypted in transit and at rest (planned)</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Security Framework</h3>
              <p className="text-sm text-gray-600">Enterprise-grade security controls (in development)</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Compliance Framework</h3>
              <p className="text-sm text-gray-600">Information security management (roadmap)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
