import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { createCheckoutSession } from '../lib/stripe';

interface PricingTier {
  price: number;
  hours: string;
  description: string;
  priceId: string;
}

const OnDemand = () => {
  const navigate = useNavigate();

  const pricingTiers: PricingTier[] = [
    {
      price: 2500,
      hours: "18-25",
      description: "Covers approximately 18-25 labor hours. If material costs are required for your project, the number of available labor hours will be adjusted accordingly.",
      priceId: import.meta.env.VITE_STRIPE_PRICE_2500
    },
    {
      price: 5000,
      hours: "36-50",
      description: "Covers approximately 36-50 labor hours. If material costs are required for your project, the number of available labor hours will be adjusted accordingly.",
      priceId: import.meta.env.VITE_STRIPE_PRICE_5000
    },
    {
      price: 10000,
      hours: "72-100",
      description: "Covers approximately 72-100 labor hours. If material costs are required for your project, the number of available labor hours will be adjusted accordingly.",
      priceId: import.meta.env.VITE_STRIPE_PRICE_10000
    }
  ];

  const handleCheckout = async (tier: PricingTier) => {
    try {
      await createCheckoutSession(tier.priceId);
    } catch (error) {
      toast.error('Failed to initiate checkout. Please try again.');
    }
  };

  return (
    <div className="pt-32 pb-16">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            On-Demand Design and Prototyping
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Catalyst Engineering offers easy-to-purchase time and material blocks for rapid design and prototyping. 
            Purchase blocks tailored to your needs, ranging from engineering analysis to detailed drafting. 
            These blocks can be applied toward labor or materials, depending on your project scope.
          </p>
        </div>

        {/* Contact First Section */}
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-4 mb-4">
            <AlertCircle className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Before You Purchase</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Contact us to confirm details of your On Demand project.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all hover:scale-105"
          >
            Contact Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.price}
              className="bg-gray-800 rounded-xl p-8 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">${tier.price.toLocaleString()}</h3>
                </div>
                <Clock className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              <button
                onClick={() => handleCheckout(tier)}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all"
              >
                Buy Now
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Availability Section */}
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Availability</h2>
          <p className="text-gray-300">
            We aim to allocate resources within a few of days for most projects. However, depending on our workload, 
            availability may be extended. Contact us to confirm timelines before purchasing.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300">
            When you purchase a time and material block, you're purchasing a budget that Catalyst Engineering 
            will bill against for your design and prototyping needs. This may include labor hours, materials, 
            or a combination of both, depending on your project requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnDemand;