import React from 'react';
import { Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <Star className="text-yellow-300 mr-2" />
          <span className="font-bold text-xl">Destiny Matrix</span>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} All rights reserved</p>
        <p>Discover your destiny and unlock your potential</p>
      </div>
    </footer>
  );
};

export default Footer;