import React from 'react';
import { ExternalLink, FileText, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Parlor Appointment System",
      description: "A comprehensive appointment scheduling system for parlors and salons, featuring real-time booking management, customer profiles, and service scheduling.",
      technologies: ["React.js", "Node.js", "Database Management", "Full Stack Development"],
      type: "web-development",
      icon: <Calendar className="text-blue-600" size={24} />,
      link: "https://github.com/apapapapaap/-Parlor-project-Full-stack-development-",
      features: [
        "Real-time appointment booking",
        "Customer management system",
        "Service scheduling interface",
        "Responsive design"
      ]
    },
    {
      title: "ChatGPT-5 vs. Perplexity Research",
      description: "Comprehensive research analysis comparing the capabilities, performance, and use cases of ChatGPT-5 and Perplexity AI models.",
      technologies: ["AI Research", "Comparative Analysis", "Technical Writing"],
      type: "research",
      icon: <FileText className="text-teal-600" size={24} />,
      link: "https://drive.google.com/file/d/1gtB3jH7ISzKS8QlZ5cgiTj59AA5HDWH4/view?usp=sharing",
      features: [
        "Performance benchmarking",
        "Use case analysis",
        "Technical comparison",
        "Research methodology"
      ]
    },
    {
      title: "Grok AI with RAG Models",
      description: "Research paper exploring the integration of Retrieval-Augmented Generation (RAG) models with Grok AI, analyzing efficiency and practical applications.",
      technologies: ["RAG Models", "AI Architecture", "Research Analysis"],
      type: "research",
      icon: <Users className="text-orange-600" size={24} />,
      link: "https://drive.google.com/file/d/1oG1222nIdOgy_Fvi5frFRqtPQDndD8Fd/view?usp=sharing",
      features: [
        "RAG model integration",
        "Performance optimization",
        "Practical applications",
        "Technical documentation"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects & Research</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my development projects and research contributions in AI and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.type === 'web-development' ? 'bg-blue-100 text-blue-800' :
                    project.type === 'research' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.type === 'web-development' ? 'Web Development' : 'Research Paper'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    <span>
                      {project.type === 'research' ? 'View Research Paper' : 
                       project.title === 'Parlor Appointment System' ? 'View Code' : 'Learn More'}
                    </span>
                    <ExternalLink className="ml-1" size={16} />
                  </a>
                ) : (
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    <span>Learn More</span>
                    <ExternalLink className="ml-1" size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;