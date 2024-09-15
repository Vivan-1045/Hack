import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about our mission, vision, and the team driving innovation in the fintech space.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Mission and Vision */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Our mission is to empower individuals and businesses with innovative financial tools and solutions. We strive to make financial management more accessible, secure, and efficient for everyone.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where financial technology bridges the gap between traditional banking and digital innovation, creating a seamless experience for users worldwide.
            </p>
          </div>

          {/* Team Section */}
          <div className="md:w-1/2">
            {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Team Member 1 */}
              {/* <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://via.placeholder.com/150?text=Person+1"
                  alt="Team Member 1"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Jane Doe</h3>
                <p className="text-gray-600">Co-Founder & CEO</p>
              </div>
               */}
              {/* Team Member 2 */}
              {/* <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://via.placeholder.com/150?text=Person+2"
                  alt="Team Member 2"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">John Smith</h3>
                <p className="text-gray-600">Co-Founder & CTO</p>
              </div> */}
              
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
