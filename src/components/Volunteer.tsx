import React, { useState } from 'react';
import { Heart, Clock, MapPin, Mail, User, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/sharedData';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  const opportunities = [
    {
      title: 'Digital Trainer',
      commitment: '6 hours/week',
      location: 'Community Centers',
      description: 'Teach digital literacy and online safety to women of all ages',
      skills: ['Tech Skills', 'Teaching', 'Patience']
    },
    {
      title: 'Workshop Facilitator',
      commitment: '8 hours/month',
      location: 'Various Locations',
      description: 'Lead workshops on SRHR education and women\'s rights advocacy',
      skills: ['Public Speaking', 'Subject Expertise', 'Empathy']
    },
    {
      title: 'Fundraising Manager',
      commitment: '10 hours/week',
      location: 'Virtual',
      description: 'Develop and implement fundraising strategies to support our programs',
      skills: ['Fundraising', 'Relationship Building', 'Strategic Planning']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Volunteer application:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
            Get Involved
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Mission of Empowerment
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your skills, passion, and time can help transform lives. Discover how you can make a 
            meaningful difference in women's and girls' lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Volunteer Opportunities */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Volunteer Opportunities</h4>
            
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h5 className="text-xl font-semibold text-gray-900">{opportunity.title}</h5>
                  <Heart className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{opportunity.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-purple-800" />
                    {opportunity.commitment}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-purple-800" />
                    {opportunity.location}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {opportunity.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-purple-800 text-xs font-medium rounded-full border border-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Apply to Volunteer</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 mr-2 text-purple-800" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 mr-2 text-purple-800" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Heart className="w-4 h-4 mr-2 text-purple-800" />
                  Area of Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
                >
                  <option value="">Select a program area</option>
                  <option value="srhr">SRHR Education</option>
                  <option value="mentorship">Mentorship & Leadership</option>
                  <option value="entrepreneurship">Women's Entrepreneurship</option>
                  <option value="digital">Digital Training</option>
                  <option value="advocacy">Justice & Advocacy</option>
                  <option value="general">General Support</option>
                </select>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 mr-2 text-purple-800" />
                  Tell Us About Yourself
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Share your experience, motivation, and how you'd like to contribute..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-800 to-orange-600 hover:from-purple-900 hover:to-orange-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              We'll review your application and get back to you within 5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;