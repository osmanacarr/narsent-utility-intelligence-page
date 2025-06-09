
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "", consent: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Let's Build the Future Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the AI co-pilot for regulated sectors. Partner with us to shape the future of utility intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Currently in R&D phase, we're actively seeking utility partners, pilot programs, 
                  and strategic collaborations. Let's explore how we can work together.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@narsent.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">İzmir, Türkiye</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pilot programs with utility companies</li>
                    <li>• R&D collaborations</li>
                    <li>• Strategic partnerships</li>
                    <li>• Technology integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Start a Conversation</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full"
                      placeholder="Tell us about your use case or partnership interest..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to be contacted regarding narsent and confirm that my data will be processed 
                      in accordance with GDPR and KVKK regulations.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
