
import { Button } from "@/components/ui/button";
import { Check, Users, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const PricingPage = () => {
  const pricingCards = [
    {
      icon: Users,
      title: "Pilot Program",
      description: "Perfect for utility companies ready to test AI-driven insights",
      audience: "Mid-size utilities (10K-100K customers)",
      features: [
        "3-month pilot implementation",
        "Core segmentation module",
        "Basic automation triggers",
        "Weekly progress reviews",
        "Technical support included"
      ],
      highlight: "Co-development opportunity",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Rocket,
      title: "Partner Program",
      description: "Strategic collaboration for platform development",
      audience: "Large utilities & enterprise organizations",
      features: [
        "Full platform access",
        "Custom module development",
        "API integration support",
        "Joint R&D initiatives",
        "Revenue sharing model"
      ],
      highlight: "Shape the product roadmap",
      color: "from-purple-500 to-purple-600",
      featured: true
    },
    {
      icon: Zap,
      title: "Full API Access",
      description: "Complete platform integration for technology partners",
      audience: "Software vendors & system integrators",
      features: [
        "All platform modules",
        "White-label opportunities",
        "Technical documentation",
        "Developer support",
        "Flexible deployment options"
      ],
      highlight: "Build on our foundation",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const faqs = [
    {
      question: "Do you have traditional pricing?",
      answer: "Not yet. We're in R&D phase and co-building with strategic partners. Our focus is on creating value together rather than traditional licensing."
    },
    {
      question: "Is there API access available?",
      answer: "Yes — all modules are API-first. We provide comprehensive documentation and developer support for seamless integration."
    },
    {
      question: "What does the pilot program include?",
      answer: "A 3-month implementation with core modules, dedicated support, and the opportunity to influence product development based on your specific needs."
    },
    {
      question: "How do you handle data privacy?",
      answer: "We're built with GDPR and KVKK compliance from the ground up. All data processing follows strict regulatory requirements for utility and financial sectors."
    },
    {
      question: "What's the commitment level?",
      answer: "We're flexible. Whether you want to pilot specific modules or become a strategic development partner, we'll work with your timeline and requirements."
    }
  ];

  const handleBecomePartner = () => {
    console.log("Become a Partner clicked");
  };

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Partnership Engagement Model
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't sell licenses yet. We co-develop with partners. Choose how you want to 
              shape the future of utility intelligence.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border animate-fade-in ${
                    card.featured ? "border-primary scale-105" : "border-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {card.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-1">Ideal for:</p>
                      <p className="text-sm text-gray-600">{card.audience}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`bg-gradient-to-r ${card.color} p-4 rounded-lg mb-6`}>
                      <p className="text-white font-medium text-center text-sm">
                        {card.highlight}
                      </p>
                    </div>

                    <Link to="/contact">
                      <Button className="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-blue-100 mb-6">
                Join utilities and tech companies already shaping the future of AI-driven operations.
              </p>
              <Link to="/contact">
                <Button
                  onClick={handleBecomePartner}
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
                >
                  Become a Partner
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
