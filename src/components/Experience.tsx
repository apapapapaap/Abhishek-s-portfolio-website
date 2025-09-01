import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Inlighn Tech Pvt. Ltd.",
      location: "Current Position",
      period: "Present",
      description: "Working on full-stack development projects, gaining hands-on experience with modern web technologies and contributing to real-world applications.",
      type: "current"
    },
    {
      title: "Mechatronics Engineer",
      company: "Micropack Pvt. Ltd.",
      location: "ISRO Client Company",
      period: "1 Year",
      description: "Gained valuable industry experience working with a client of the Indian Space Research Organisation, applying mechatronics principles to real-world projects.",
      type: "past"
    },
    {
      title: "Diploma in Mechatronics",
      company: "NTTF (Nettur Technical Training Foundation)",
      location: "Foundation Studies",
      period: "Completed",
      description: "Comprehensive foundation in mechatronics engineering, combining mechanical, electrical, and computer engineering principles.",
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-500 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    exp.type === 'current' ? 'border-l-4 border-teal-500' :
                    exp.type === 'past' ? 'border-l-4 border-blue-500' :
                    'border-l-4 border-orange-500'
                  }`}>
                    <div className="flex items-center mb-2">
                      <Building className={`mr-2 ${
                        exp.type === 'current' ? 'text-teal-600' :
                        exp.type === 'past' ? 'text-blue-600' :
                        'text-orange-600'
                      }`} size={20} />
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'current' ? 'bg-teal-100 text-teal-800' :
                        exp.type === 'past' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">{exp.company}</h4>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="mr-1" size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;