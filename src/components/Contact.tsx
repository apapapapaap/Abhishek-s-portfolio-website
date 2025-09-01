import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    const mailtoLink = `mailto:abhishekap0726@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "abhishekap0726@gmail.com",
      link: "mailto:abhishekap0726@gmail.com"
    },
    {
      icon: <Phone className="text-teal-600" size={24} />,
      title: "Phone",
      value: "+91 9731559148",
      link: "tel:+919731559148"
    },
    {
      icon: <MapPin className="text-orange-600" size={24} />,
      title: "Location",
      value: "Mangalore, Karnataka",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in AI, Full Stack Development, or Research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href="mailto:abhishekap0726@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/apapapapaap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-ashok-pattanashetti-a71265225/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;