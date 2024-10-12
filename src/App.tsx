<<<<<<< HEAD
import React from 'react';
import Header from './components/Header';
import DestinyCalculator from './components/DestinyCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col bg-gray-100" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <Header />
      <main className="flex-grow">
        <DestinyCalculator />
        {/* Add other components like About, Gallery, etc. here */}
      </main>
      <Footer /> {/* Ensure the footer is at the bottom */}
=======
import React, { useState } from 'react';
import { User, Calendar, ChevronDown, ChevronUp, Sun, Moon, Star, Heart, Briefcase, Home, Clock, History } from 'lucide-react';
import {
  getZodiacSign,
  getChineseZodiac,
  calculateLifePathNumber,
  getElementalAffinity,
  getPlanetaryRuler,
  getLuckyNumbers,
  getCompatibleSigns,
  getPastLifeInfo,
  getFamilyPrediction,
  getCareerPrediction,
  getFuturePrediction,
  zodiacSigns,
  elements,
  qualities,
  planets,
  houses,
  numerologyMeanings
} from './astrologyData';

interface AstrologyData {
  zodiacSign: string;
  chineseZodiac: string;
  lifePathNumber: number;
  elementalAffinity: string;
  planetaryRuler: string;
  luckyNumbers: number[];
  compatibleSigns: string[];
  pastLife: string;
  familyPrediction: string;
  careerPrediction: string;
  futurePrediction: string;
}

function App() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [astrologyData, setAstrologyData] = useState<AstrologyData | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const generateAstrologyData = () => {
    const date = new Date(dateOfBirth);
    const zodiacSign = getZodiacSign(date.getMonth() + 1, date.getDate());
    const data: AstrologyData = {
      zodiacSign,
      chineseZodiac: getChineseZodiac(date.getFullYear()),
      lifePathNumber: calculateLifePathNumber(dateOfBirth),
      elementalAffinity: getElementalAffinity(zodiacSign),
      planetaryRuler: getPlanetaryRuler(zodiacSign),
      luckyNumbers: getLuckyNumbers(dateOfBirth),
      compatibleSigns: getCompatibleSigns(zodiacSign),
      pastLife: getPastLifeInfo(zodiacSign),
      familyPrediction: getFamilyPrediction(zodiacSign),
      careerPrediction: getCareerPrediction(zodiacSign),
      futurePrediction: getFuturePrediction(zodiacSign),
    };
    setAstrologyData(data);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Comprehensive Astrology Analyzer</h1>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <div className="flex items-center border rounded-md">
            <User className="ml-2 text-gray-400" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <div className="flex items-center border rounded-md">
            <Calendar className="ml-2 text-gray-400" />
            <input
              id="dob"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <button
          onClick={generateAstrologyData}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          disabled={!name || !dateOfBirth}
        >
          Reveal Your Astrological Profile
        </button>
      </div>
      {astrologyData && (
        <div className="mt-8 bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Your Astrological Profile</h2>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('zodiac')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><Sun className="mr-2" /> Zodiac Sign</span>
                {expandedSection === 'zodiac' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'zodiac' && (
                <div className="mt-2 text-gray-600">
                  <p>Your zodiac sign is {astrologyData.zodiacSign}.</p>
                  <p>Element: {astrologyData.elementalAffinity}</p>
                  <p>Quality: {zodiacSigns.find(s => s.name === astrologyData.zodiacSign)?.quality}</p>
                  <p>Ruling Planet: {astrologyData.planetaryRuler}</p>
                  <p>{elements[astrologyData.elementalAffinity as keyof typeof elements]}</p>
                </div>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('chinese')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><Moon className="mr-2" /> Chinese Zodiac</span>
                {expandedSection === 'chinese' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'chinese' && (
                <p className="mt-2 text-gray-600">Your Chinese Zodiac sign is the {astrologyData.chineseZodiac}.</p>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('lifePath')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><Star className="mr-2" /> Life Path Number</span>
                {expandedSection === 'lifePath' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'lifePath' && (
                <div className="mt-2 text-gray-600">
                  <p>Your Life Path Number is {astrologyData.lifePathNumber}.</p>
                  <p>{numerologyMeanings[astrologyData.lifePathNumber as keyof typeof numerologyMeanings]}</p>
                </div>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('compatibility')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><Heart className="mr-2" /> Compatibility</span>
                {expandedSection === 'compatibility' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'compatibility' && (
                <div className="mt-2 text-gray-600">
                  <p>Most compatible signs: {astrologyData.compatibleSigns.join(', ')}</p>
                  <p>Lucky Numbers: {astrologyData.luckyNumbers.join(', ')}</p>
                </div>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('pastLife')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><History className="mr-2" /> Past Life</span>
                {expandedSection === 'pastLife' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'pastLife' && (
                <p className="mt-2 text-gray-600">{astrologyData.pastLife}</p>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('family')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><Home className="mr-2" /> Family</span>
                {expandedSection === 'family' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'family' && (
                <p className="mt-2 text-gray-600">{astrologyData.familyPrediction}</p>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('career')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><Briefcase className="mr-2" /> Career</span>
                {expandedSection === 'career' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'career' && (
                <p className="mt-2 text-gray-600">{astrologyData.careerPrediction}</p>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                onClick={() => toggleSection('future')}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-purple-600"
              >
                <span className="flex items-center"><Clock className="mr-2" /> Future</span>
                {expandedSection === 'future' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedSection === 'future' && (
                <p className="mt-2 text-gray-600">{astrologyData.futurePrediction}</p>
              )}
            </div>
          </div>
        </div>
      )}
>>>>>>> 4110ad45efef015a4f6c3d0ec65f4553e494f03d
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 4110ad45efef015a4f6c3d0ec65f4553e494f03d
