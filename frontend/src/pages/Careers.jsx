import React from 'react';
import { assets } from '../assets/assets';

export const Careers = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Open Positions Available</h2>
            <p className="text-gray-600 mb-6">
              We're not currently hiring, but we're always looking for passionate individuals to join our team. 
              Please check back later for new opportunities!
            </p>
            <div className="w-32 h-32 mx-auto mb-6">
              <img 
                src={assets.careers_icon} 
                alt="Careers" 
                className="w-full h-full object-contain opacity-50"
              />
            </div>
          </div>
          
          <div className="border-t pt-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Why Work With Us?</h3>
            <p className="text-gray-600 mb-6">
              At ASUK, we value creativity, innovation, and a passion for design. 
              When positions become available, we look for team members who share our vision and values.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Creative Environment</h4>
                <p className="text-sm text-gray-600">Work in a space that encourages innovation and creative thinking.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Growth Opportunities</h4>
                <p className="text-sm text-gray-600">We support your professional development and career growth.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Great Perks</h4>
                <p className="text-sm text-gray-600">Enjoy employee discounts, flexible hours, and more.</p>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Want to be the first to know about new job openings? Drop us your email below.
              </p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
