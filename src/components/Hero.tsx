import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Abhishek A P</span>
            <span className="block text-teal-300 text-3xl md:text-4xl font-medium mt-2">
              Full Stack Developer & AI Enthusiast
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between Mechatronics, AI/ML, and Full Stack Development
            with hands-on industry experience and cutting-edge research.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="mailto:abhishekap0726@gmail.com" className="text-blue-200 hover:text-white transition-colors duration-200">
              <Mail size={24} />
            </a>
            <a href="https://github.com/apapapapaap" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-ashok-pattanashetti-a71265225/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-white/70 hover:text-white transition-colors duration-200" />
      </button>
    </section>
  );
};

export default Hero;