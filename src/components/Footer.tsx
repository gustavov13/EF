import React from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Heart, Send } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Impact Stories', href: '#impact' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'SRHR Education', href: '#programs' },
    { name: 'Mentorship & Leadership', href: '#programs' },
    { name: 'Women\'s Entrepreneurship', href: '#programs' },
    { name: 'Digital Training', href: '#programs' },
    { name: 'Justice & Advocacy', href: '#programs' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/Esaete.jpg"
                alt="Esaete Foundation Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">Esaete Foundation</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering women and girls to create just communities where they thrive through opportunity, 
              digital inclusion, and unwavering support for their dreams.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <Heart className="w-4 h-4 inline mr-1 text-orange-400" />
                Every donation makes a direct impact on women's lives. Your support transforms communities.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Our Programs</h5>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-gray-300">
                Get the latest news about our programs and success stories delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Esaete Foundation. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Annual Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;