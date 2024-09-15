import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to BudgetFlow, your all-in-one solution for effortlessly
            managing your finances and keeping your budget on track.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              At BudgetFlow, our mission is to empower individuals and
              businesses to take control of their financial futures through
              intuitive and accessible budgeting tools. We strive to make
              financial management effortless by providing clear insights,
              actionable data, and seamless tracking of expenses and income.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision at BudgetFlow is to become the leading platform for
              financial empowerment, where users from all walks of life can
              effortlessly manage their finances and achieve their economic
              aspirations.
            </p>
          </div>

          {/* Team Section */}
          <div className="md:w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/570/894/original/financial-growth-sign-made-of-stacks-of-us-dollar-notes-3d-rendering-of-usd-money-arranged-in-the-form-of-a-bar-graph-isolated-on-transparent-background-png.png"
              alt="Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
