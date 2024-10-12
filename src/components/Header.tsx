import React from 'react';
import { Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="text-yellow-300 mr-2" />
          <span className="font-bold text-xl">DucAnhVjpro123</span>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#destiny-calculator" className="hover:text-yellow-300">Calculate Your Destiny</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
