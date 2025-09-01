import React from 'react';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm a passionate technologist with a unique blend of Mechatronics engineering background 
                and cutting-edge AI/ML expertise. My journey began with a diploma from the prestigious 
                Nettur Technical Training Foundation (NTTF), followed by real-world experience at 
                Micropack Pvt. Ltd., an ISRO client company.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Currently pursuing B.Tech in Robotics and Artificial Intelligence & Machine Learning 
                while working as a Full Stack Developer Intern, I bring both theoretical knowledge 
                and practical industry experience to every project I undertake.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">
                B.Tech in Robotics & AI/ML from Srinivas University, Diploma in Mechatronics from NTTF
              </p>
            </div>

            <div className="text-center p-6 bg-teal-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">
                Industry experience at ISRO client company, currently Full Stack Developer Intern
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600">
                Authored research papers on AI models including ChatGPT-5, Perplexity, and Grok AI with RAG
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;