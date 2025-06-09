
import { TrendingUp, Users, Clock } from "lucide-react";

const CaseStudyCard = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Utilities
            </h2>
            <p className="text-xl text-gray-600">
              See how leading utility companies are transforming their operations with narsent
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-slide-in-right">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Company Info */}
              <div>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">XYZ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">XYZ Elektrik</h3>
                  <p className="text-gray-600">Regional electricity distribution company serving 850,000+ customers</p>
                </div>

                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                  "narsent's AI-powered segmentation helped us identify our highest-risk customers and implement targeted recovery strategies. The results exceeded our expectations."
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Mehmet Yılmaz</div>
                    <div className="text-gray-600 text-sm">Collections Director</div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">Recovery Rate</span>
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-1">+17%</div>
                  <div className="text-green-600 text-sm">Increase within 3 months</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-8 h-8 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium">Customer Segmentation</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">94%</div>
                  <div className="text-blue-600 text-sm">Prediction accuracy</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-8 h-8 text-orange-600" />
                    <span className="text-sm text-orange-600 font-medium">Process Efficiency</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-700 mb-1">-60%</div>
                  <div className="text-orange-600 text-sm">Manual work reduction</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center text-sm text-gray-500 mb-4">Implementation Timeline</div>
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                  <div className="text-xs text-gray-600">Week 1-2<br />Data Integration</div>
                </div>
                <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                  <div className="text-xs text-gray-600">Week 3-4<br />Model Training</div>
                </div>
                <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2"></div>
                  <div className="text-xs text-gray-600">Month 2-3<br />Results Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCard;
