import React from 'react';
import { Link } from 'react-router-dom';

const View = () => {
  const expenses = [
    { category: 'Rent', amount: 500 },
    { category: 'Utilities', amount: 150 },
    { category: 'Groceries', amount: 200 },
    { category: 'Entertainment', amount: 100 },
    { category: 'Miscellaneous', amount: 50 }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Expense Breakdown</h1>
          <p className="text-lg text-gray-600">
            Here is a detailed breakdown of your expenses. Review each category to understand how your budget is allocated.
          </p>
        </div>

        {/* Detailed Breakdown Section */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Expense Categories</h2>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <span className="text-gray-800 font-semibold">{expense.category}</span>
                <span className="text-gray-600">${expense.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default View;


