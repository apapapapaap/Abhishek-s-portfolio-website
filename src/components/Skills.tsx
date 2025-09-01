import React from 'react';
import { Code, Database, Globe, GitBranch, Cpu, Bot } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "blue"
    },
    {
      title: "Backend Development",
      icon: <Cpu className="text-teal-600" size={24} />,
      skills: ["Node.js", "Full Stack Development"],
      color: "teal"
    },
    {
      title: "Database & Storage",
      icon: <Database className="text-green-600" size={24} />,
      skills: ["SQL Databases", "NoSQL Databases"],
      color: "green"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-purple-600" size={24} />,
      skills: ["Git", "GitHub"],
      color: "purple"
    },
    {
      title: "Emerging Technologies",
      icon: <Globe className="text-orange-600" size={24} />,
      skills: ["Web 3.0", "Blockchain Basics"],
      color: "orange"
    },
    {
      title: "AI & Research",
      icon: <Bot className="text-pink-600" size={24} />,
      skills: ["AI/ML Research", "RAG Models", "ChatGPT Analysis"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 hover:border-blue-400 hover:shadow-blue-100",
      teal: "border-teal-200 hover:border-teal-400 hover:shadow-teal-100",
      green: "border-green-200 hover:border-green-400 hover:shadow-green-100",
      purple: "border-purple-200 hover:border-purple-400 hover:shadow-purple-100",
      orange: "border-orange-200 hover:border-orange-400 hover:shadow-orange-100",
      pink: "border-pink-200 hover:border-pink-400 hover:shadow-pink-100"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning traditional engineering, modern web development, 
            and cutting-edge AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${getColorClasses(category.color)}`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Continuously learning and expanding my skill set in emerging technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;