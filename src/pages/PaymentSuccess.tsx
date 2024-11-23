import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect after 5 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-400 animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-300 mb-6">
            Thank you for your purchase! A member of our team will reach out shortly to confirm project details.
          </p>
          <p className="text-gray-400 text-sm">
            You will be automatically redirected to the home page in 5 seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;