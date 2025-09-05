import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
                  Empowering Women & Girls
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Creating a World of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {' '}Dignity & Opportunity
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We empower women and girls to create just communities where they thrive through opportunity, 
                digital inclusion, and unwavering support for their dreams and aspirations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-800 to-orange-600 hover:from-purple-900 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl">
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group border-2 border-purple-300 hover:border-purple-400 text-purple-800 hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center hover:bg-purple-50">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Our Impact
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-800">Together</div>
                <div className="text-sm text-gray-600">We Empower Women</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">Creating Opportunities</div>
                <div className="text-sm text-gray-600">Inspiring Leadership</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">Impacting Lives</div>
                <div className="text-sm text-gray-600">Serving Communities</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/First.jpg"
                alt="Esaete Foundation"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-800 font-bold text-sm">Impact</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Empowering Women</div>
                  <div className="text-sm text-gray-600">Creating lasting change</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200/50 to-orange-200/50 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-200/50 to-purple-200/50 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;