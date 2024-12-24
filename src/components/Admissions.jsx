import React, { useState } from 'react';

const Admissions = () => {
  const [activeClass, setActiveClass] = useState('Playschool');

  const handleClassChange = (className) => {
    setActiveClass(className);
  };

  const classDetails = {
    Playschool: {
      ageGroup: '2-3 years',
      curriculum: 'Play-based learning, social interaction, and sensory exploration',
      facilities: 'Colorful classrooms, play area, and dedicated caregivers',
    },
    'LKG': {
      ageGroup: '3-4 years',
      curriculum: 'Introduction to literacy and numeracy, creative arts, and physical development',
      facilities: 'Well-equipped classrooms, activity center, and outdoor play area',
    },
    'UKG': {
      ageGroup: '4-5 years',
      curriculum: 'Building foundational skills, language development, and pre-writing activities',
      facilities: 'Interactive learning spaces, library corner, and multimedia resources',
    },
    'Class I': {
      ageGroup: '5-6 years',
      curriculum: 'Formal introduction to core subjects, development of reading, writing, and mathematical skills',
      facilities: 'Spacious classrooms, science lab, and computer lab',
    },
    'Class II': {
      ageGroup: '6-7 years',
      curriculum: 'Strengthening subject knowledge, introduction to environmental studies, and focus on co-curricular activities',
      facilities: 'Well-stocked library, sports facilities, and music room',
    },
    'Class III': {
      ageGroup: '7-8 years',
      curriculum: 'Expanding subject understanding, introduction to a third language, and emphasis on critical thinking',
      facilities: 'Advanced science lab, language lab, and art studio',
    },
    'Class IV': {
      ageGroup: '8-9 years',
      curriculum: 'Developing advanced concepts, project-based learning, and focus on analytical skills',
      facilities: 'Specialized labs, digital classrooms, and innovation hub',
    },
    'Class V': {
      ageGroup: '9-10 years',
      curriculum: 'Preparing for middle school, advanced problem-solving, and focus on research and presentation skills',
      facilities: 'Dedicated middle school block, advanced computer lab, and counseling services',
    },
    'Class VI': {
      ageGroup: '10-11 years',
      curriculum: 'Introduction to specialized subjects, focus on conceptual understanding, and development of independent learning skills',
      facilities: 'Subject-specific labs, multimedia resources, and career guidance center',
    },
    'Class VII': {
      ageGroup: '11-12 years',
      curriculum: 'In-depth subject knowledge, preparation for competitive exams, and focus on holistic development',
      facilities: 'Advanced labs, digital library, and sports complex',
    },
    'Class VIII': {
      ageGroup: '12-13 years',
      curriculum: 'Comprehensive coverage of subjects, focus on board exam preparation, and development of leadership skills',
      facilities: 'Dedicated exam preparation resources, mentorship programs, and personality development workshops',
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Admissions for 2025-26 (CBSE Pattern)
      </h2>

      <div className="flex justify-center mb-8">
        <ul className="flex space-x-4">
          <li className="cursor-pointer" onClick={() => handleClassChange('Playschool')}>Playschool</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('LKG')}>LKG</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('UKG')}>UKG</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class I')}>Class I</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class II')}>Class II</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class III')}>Class III</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class IV')}>Class IV</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class V')}>Class V</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class VI')}>Class VI</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class VII')}>Class VII</li>
          <li className="cursor-pointer" onClick={() => handleClassChange('Class VIII')}>Class VIII</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">{activeClass}</h3>
        <p className="text-gray-700">
          <span className="font-medium">Age Group:</span> {classDetails[activeClass].ageGroup}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Curriculum:</span> {classDetails[activeClass].curriculum}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Facilities:</span> {classDetails[activeClass].facilities}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Places for Admission</h3>
        <ul className="flex space-x-4">
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md">CDA-10-Cuttack</li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md">Athagarh</li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded-md">Gopapur-Baramba</li>
        </ul>
      </div>
    </div>
  );
};

export default Admissions;
