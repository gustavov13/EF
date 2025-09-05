import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@esaetefoundation.org'],
      color: 'from-amber-700 to-amber-800'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Work Together for Change
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs? Want to partner with us? We'd love to hear from you 
            and explore how we can collaborate for women's empowerment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-200"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{info.title}</h5>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-purple-800 to-orange-600 rounded-2xl p-8 text-white">
              <h5 className="text-xl font-bold mb-4">Stay Connected</h5>
              <p className="text-purple-100 mb-6">
                Subscribe to our newsletter for updates on our programs and success stories.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <MessageCircle className="w-6 h-6 text-purple-800" />
                <h4 className="text-2xl font-bold text-gray-900">Send Us a Message</h4>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition-colors duration-200"
                  >
                    <option value="">Select a topic</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="program">Program Information</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-800 to-orange-600 hover:from-purple-900 hover:to-orange-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;