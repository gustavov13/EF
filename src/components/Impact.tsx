import React from 'react';
import { testimonials } from '../data/sharedData';

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
            Our Impact
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Transforming Lives, Building Communities
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the measurable difference we're making in women's lives and communities through 
            our comprehensive empowerment programs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Impact;