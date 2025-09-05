import React from 'react';
import { Scale, Zap, Shield, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Scale,
      title: 'Equity',
      description: 'We stand for fairness and justice in all we do, ensuring every woman and girl has equal opportunities to succeed.',
      color: 'from-purple-700 to-purple-800'
    },
    {
      icon: Zap,
      title: 'Empowerment',
      description: 'We strengthen women and girls to lead and thrive, building confidence and capabilities for lasting change.',
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We act with honesty and accountability, maintaining transparency in everything we do.',
      color: 'from-amber-700 to-amber-800'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We build partnerships and sisterhood for greater impact, working together towards our shared vision.',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
            Our Story & Values
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Building a World of Dignity & Equality
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Vision & Mission */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                🌍 <span className="ml-2">Our Vision</span>
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every woman and girl lives with dignity, equality, digital inclusion and opportunity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                🚀 <span className="ml-2">Our Mission</span>
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Empower women and girls to create a just community where they thrive through opportunity and digital inclusion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                🎯 <span className="ml-2">Our Goal</span>
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading force in bridging gender, health, education, economic and digital divides by equipping 
                women and girls in marginalized communities with the skills, knowledge and support they need for 
                well-being, independence and leadership in society.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="Second.jpg"
              alt="Women in leadership and collaboration"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-200/60 to-pink-200/60 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-200/60 to-purple-200/60 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">💎 Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These values guide every decision we make and every program we implement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;