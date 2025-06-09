
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Users, Building, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const programs = [
    {
      icon: Users,
      title: "Pilot Program",
      subtitle: "Proof of Concept",
      description: "Perfect for utilities exploring AI-driven insights",
      features: [
        "Limited dataset integration",
        "Core segmentation engine",
        "Basic risk scoring",
        "Monthly progress reviews",
        "R&D collaboration"
      ],
      ideal: "Small to medium utilities",
      cta: "Start Pilot",
      color: "from-blue-500 to-blue-600",
      badge: "Most Popular"
    },
    {
      icon: Building,
      title: "Partner Program",
      subtitle: "Co-Development",
      description: "Strategic partnership for platform development",
      features: [
        "Full platform access",
        "Custom module development",
        "API integration support",
        "Dedicated R&D team",
        "Revenue sharing model"
      ],
      ideal: "Large utilities & enterprises",
      cta: "Become Partner",
      color: "from-purple-500 to-purple-600",
      badge: "Strategic"
    },
    {
      icon: Zap,
      title: "API Access",
      subtitle: "Developer Ready",
      description: "Direct API access for custom integrations",
      features: [
        "RESTful API endpoints",
        "Real-time data processing",
        "Webhook integrations",
        "Developer documentation",
        "Technical support"
      ],
      ideal: "Tech teams & integrators",
      cta: "Get API Access",
      color: "from-orange-500 to-orange-600",
      badge: "Coming Soon"
    }
  ];

  const faqs = [
    {
      question: "Do you have traditional pricing plans?",
      answer: "Not yet. We're currently in R&D phase and co-building with partners. Our approach is collaborative rather than transactional — we work together to shape the platform."
    },
    {
      question: "Is there API access available?",
      answer: "Yes — all our modules are API-first. We provide RESTful endpoints for seamless integration with existing utility systems including OSOS, CRM, and ERP platforms."
    },
    {
      question: "What's included in the Pilot Program?",
      answer: "The pilot includes core AI modules, basic integration support, monthly reviews, and direct collaboration with our R&D team. It's designed to prove value before larger commitments."
    },
    {
      question: "How does the Partner Program work?",
      answer: "Partners get full platform access, custom development, and revenue sharing opportunities. We co-develop features based on your specific utility challenges and market needs."
    },
    {
      question: "What about data security and compliance?",
      answer: "We're built for regulated industries with GDPR, KVKK, and EPDK alignment. All data processing follows strict compliance protocols with full audit trails."
    },
    {
      question: "Can we integrate with existing systems?",
      answer: "Absolutely. Our orchestration layer is designed to connect with OSOS, CRM, ERP, and field management systems through APIs and standard protocols."
    }
  ];

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Partnership Engagement Models
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't sell licenses yet — we co-develop with forward-thinking utilities. 
              Choose the collaboration model that fits your innovation timeline.
            </p>
          </div>

          {/* Partnership Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in p-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {program.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                        {program.badge}
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{program.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Ideal for:</strong> {program.ideal}
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button
                      className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white font-medium transition-all duration-300 group-hover:shadow-lg`}
                      aria-label={`${program.cta} - ${program.title}`}
                    >
                      {program.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Shape the Future Together?
              </h2>
              <p className="text-gray-600 mb-6">
                Join our network of forward-thinking utilities and help us build the next generation 
                of AI-powered operational intelligence.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  aria-label="Become a partner"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PricingPage;
