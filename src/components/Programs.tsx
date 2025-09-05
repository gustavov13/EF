import React from 'react';
import { Heart, Users, Briefcase, Laptop, Scale } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      emoji: '🩸📚',
      title: 'SRHR Education',
      description: 'Comprehensive sexual and reproductive health rights education empowering women and girls with knowledge for informed decisions.',
      color: 'from-purple-700 to-purple-800',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Users,
      emoji: '👩‍🏫🌱',
      title: 'Mentorship & Leadership',
      description: 'Building leadership skills and connecting women with experienced mentors who guide their personal and professional growth.',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Briefcase,
      emoji: '🛍️💰',
      title: 'Women\'s Entrepreneurship',
      description: 'Supporting women entrepreneurs with business training, microfinance, and market access to achieve economic independence.',
      color: 'from-amber-700 to-amber-800',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Laptop,
      emoji: '💻🔒',
      title: 'Digital Training',
      description: 'Bridging the digital divide through technology training, digital literacy, and online safety education.',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Scale,
      emoji: '🏛️✊',
      title: 'Justice & Advocacy',
      description: 'Fighting for women\'s rights through legal advocacy, policy change, and community awareness campaigns.',
      color: 'from-orange-700 to-orange-800',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
            💻 Program Areas
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Support for Women & Girls
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through our five core program areas, we address the multiple barriers that prevent women 
            and girls from reaching their full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group ${program.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl">{program.emoji}</span>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-800 to-orange-600 hover:from-purple-900 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;