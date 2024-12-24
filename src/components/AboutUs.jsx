import React from 'react';
import campus from '../assets/SchoolCampus.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Discover BNIT Public School
        </h2>
        <div className="bg-blue-500 text-white py-16 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Our Story
          </h3>
          <p className="text-center">
            Established in 1990, BNIT Public School has grown from a modest
            institution to a beacon of educational excellence in Cuttack,
            Odisha. Our journey has been driven by a passion for nurturing young
            minds and empowering them to achieve their fullest potential.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={campus}
              alt="School Campus"
              className="rounded-lg shadow-md w-full transform hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h3>
            <p className="text-gray-700">
              At BNIT, we are committed to providing a holistic education that
              goes beyond textbooks. We foster a culture of curiosity,
              creativity, and critical thinking, preparing students to become
              lifelong learners and responsible global citizens.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">
            Key Milestones
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center transition-all duration-500 ease-in-out hover:bg-gray-200">
              <span className="text-3xl font-bold text-blue-500 mr-4">
                1990
              </span>
              <p>BNIT Public School founded</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center transition-all duration-500 ease-in-out hover:bg-gray-200">
              <span className="text-3xl font-bold text-blue-500 mr-4">
                2005
              </span>
              <p>Expanded campus with new facilities</p>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">
            Our Vision
          </h3>
          <p className="text-gray-700 text-center">
            To be a leading educational institution that inspires a love for
            learning, fosters innovation, and prepares students to make a
            positive impact on the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
