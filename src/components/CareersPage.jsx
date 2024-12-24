import React from 'react';

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Trained and Untrained Staff',
      department: 'Academics',
      location: 'Attagarh',
    },
    {
      id: 2,
      title: 'Music and Arts Teacher',
      department: 'Academics',
      location: 'Attagarh',
    },
    {
      id: 3,
      title: 'Physical Education Instructor',
      department: 'Sports',
      location: 'Attagarh',
    },
    {
      id: 4,
      title: 'Peon and Support Staff',
      department: 'Support Services',
      location: 'Attagarh',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg">
          At BNIT Public School, we're committed to providing quality education and fostering a supportive learning environment.
        </p>
      </section>

      {/* Current Job Openings */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-gray-100 p-4 rounded-md border border-gray-300 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">
                {job.department} - {job.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
        {/* Placeholder for culture highlights */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-600">
            We believe in collaboration, innovation, and continuous learning.
          </p>
        </div>
      </section>

      {/* Benefits and Perks */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Benefits and Perks</h2>
        {/* Placeholder for benefits overview */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-600">
            Competitive salaries, professional development opportunities, and a supportive work environment.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Application Process</h2>
        {/* Placeholder for application steps */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-600">
            Submit your resume and cover letter to our HR department.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {/* Placeholder for contact details */}
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-600">
            Email: bnitpublicschool@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
