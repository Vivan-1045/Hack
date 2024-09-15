import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-4xl text-blue-500 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Feature = () => {
  return (
    <div className="bg-gray-100 py-12">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Track Expenses</h1>
          <p className="text-lg text-gray-600">
            Discover how our app simplifies tracking expenses, making it easy to manage shared expenses with friends and family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H6a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V7a2 2 0 00-2-2zM21 7v10a2 2 0 01-2 2h-3a2 2 0 01-2-2V7a2 2 0 012-2h3a2 2 0 012 2z" /></svg>}
            title="Effortless Calculation"
            description="Automatically calculate the total bill of your expenses , eliminating manual calculations and errors."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10H9V5a2 2 0 012-2h2a2 2 0 012 2v5zM9 14h6v5a2 2 0 01-2 2H11a2 2 0 01-2-2v-5z" /></svg>}
            title="Split expenses easily"
            description="Quickly split your expenses just a few taps ."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-6 5H3m12 0h6M7 12v5m4-5v5m4-5v5" /></svg>}
            title="Instant Updates"
            description="Get real-time updates and notifications as bills are split and settled, keeping informed yourself about expenses."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
            title="Accurate Settlements"
            description="Ensure precise and fair settlements with our reliable system that tracks and reconciles all expenses."
          />
        </div>
      </section>
    </div>
  );
};

export default Feature;

