import React, { useState } from 'react';
import { useEffect } from 'react';
import { Star } from 'lucide-react'; // Importing an icon for visual enhancement

interface DestinyResult {
  personalQualities: string;
  previousLife: string;
  lifeScenario: string;
  talents: string;
  destiny: string;
  money: string;
  programs: string;
  sexiness: string;
  parents: string;
  kids: string;
  relationship: string;
  lifeGuidance: string;
  yearForecast: string;
  personalBrand: string;
  health: string;
}

const calculateLifePathNumber = (birthDate: string): number => {
  const date = new Date(birthDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const sum = year.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0) +
              month.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0) +
              day.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

  return (sum % 9) || 9;
};

const calculateExpressionNumber = (name: string): number => {
  const letterValues: { [key: string]: number } = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
  };

  const sum = name.toUpperCase().split('').reduce((acc, char) => {
    return acc + (letterValues[char] || 0);
  }, 0);

  return (sum % 9) || 9;
};

const generateResult = (name: string, birthDate: string, gender: string): DestinyResult => {
  const lifePathNumber = calculateLifePathNumber(birthDate);
  const expressionNumber = calculateExpressionNumber(name);

  const getPersonalQualities = (lifePathNumber: number, expressionNumber: number): string => {
    const qualities = [
      "leadership", "cooperation", "creativity", "practicality", "freedom",
      "responsibility", "analysis", "power", "humanitarianism"
    ];
    return `Your personal qualities are shaped by your Life Path Number ${lifePathNumber} and Expression Number ${expressionNumber}. This means you have strengths in ${qualities[lifePathNumber - 1]} and ${qualities[expressionNumber - 1]}. Embrace these qualities to enhance your life!`;
  };

  const getPreviousLife = (lifePathNumber: number): string => {
    const previousLives = [
      "a leader or ruler", "a diplomat or peacemaker", "an artist or performer",
      "a builder or organizer", "an adventurer or explorer", "a teacher or healer",
      "a scholar or philosopher", "a business person or manager", "a humanitarian or visionary"
    ];
    return `In your previous life, you may have been ${previousLives[lifePathNumber - 1]}. This past experience can guide you in your current journey!`;
  };

  const getLifeScenario = (expressionNumber: number): string => {
    const scenarios = [
      "overcoming challenges to achieve personal growth",
      "building harmonious relationships and partnerships",
      "expressing yourself creatively and inspiring others",
      "creating stability and security in your life and for others",
      "embracing change and personal freedom",
      "nurturing and supporting others while finding balance",
      "seeking knowledge and understanding of life's mysteries",
      "achieving material success and personal power",
      "working towards the betterment of humanity"
    ];
    return `Your life scenario revolves around ${scenarios[expressionNumber - 1]}. This insight can help you navigate your current path with confidence!`;
  };

  // Add more functions for other aspects...

  return {
    personalQualities: getPersonalQualities(lifePathNumber, expressionNumber),
    previousLife: getPreviousLife(lifePathNumber),
    lifeScenario: getLifeScenario(expressionNumber),
    talents: `Your natural talents are influenced by your Expression Number ${expressionNumber}. You have a unique gift for ${["leading and inspiring others", "building connections and fostering cooperation", "expressing creativity and artistic skills", "organizing and executing plans", "adapting to new situations and exploring", "caring for others and solving problems", "analyzing situations and providing insights", "managing projects and achieving goals", "inspiring others through your humanitarian efforts"][expressionNumber - 1]}. Embrace these talents to shine in your endeavors.`,
    destiny: `Your destiny is shaped by the combination of your Life Path (${lifePathNumber}) and Expression (${expressionNumber}) numbers. This suggests a life purpose that involves ${["leading and motivating others", "creating harmony and understanding", "showcasing your creativity", "building a solid foundation for yourself and others", "exploring new horizons and experiences", "serving and uplifting those around you", "sharing wisdom and insights", "achieving success while empowering others", "making a positive impact on the world"][Math.floor((lifePathNumber + expressionNumber) / 2) - 1]}.`,
    money: `Your approach to finances is influenced by your Life Path Number ${lifePathNumber}. You tend to ${["be ambitious and strive for financial success", "value partnerships and seek balance in finances", "think creatively about earning money", "work diligently for financial stability", "pursue financial freedom through unique paths", "be responsible and service-oriented with your finances", "analyze and plan your financial strategies", "have the potential for wealth through influence and power", "attract financial opportunities through your humanitarian efforts"][lifePathNumber - 1]}.`,
    programs: `Based on your numbers, you may benefit from programs or courses related to ${["leadership and management skills", "building relationships and resolving conflicts", "creative arts and self-expression", "practical skills and organization", "personal growth and adventure", "health and wellness practices", "philosophical studies and research", "business and financial literacy", "social causes and global awareness"][expressionNumber - 1]}. Consider exploring these areas for personal development.`,
    sexiness: `Your sensuality and attractiveness are influenced by your Expression Number ${expressionNumber}. You exude charm through your ${["confidence and assertiveness", "grace and diplomacy", "creativity and expressiveness", "dependability and practicality", "adventurous spirit and versatility", "nurturing nature and attentiveness", "intellectual depth and mystique", "intensity and personal power", "idealism and compassion"][expressionNumber - 1]}. Embrace these qualities to enhance your allure.`,
    parents: `Your relationship with your parents is reflected in your Life Path Number ${lifePathNumber}. You may ${["seek independence and self-reliance", "strive for harmony and understanding in family dynamics", "express your creativity within the family context", "value tradition and stability in family life", "desire freedom within family structures", "take on nurturing or mediating roles in family matters", "analyze and understand family relationships", "navigate power dynamics within the family", "have a broad and inclusive view of family relationships"][lifePathNumber - 1]}.`,
    kids: `If you have or plan to have children, your parenting style is likely influenced by your Expression Number ${expressionNumber}. You tend to ${["encourage independence and leadership skills", "foster cooperation and harmony among siblings", "nurture creativity and self-expression in your children", "provide structure and stability in their lives", "encourage exploration and adaptability", "be nurturing and supportive in their growth", "promote learning and curiosity", "empower and motivate them to achieve their dreams", "instill humanitarian values and empathy"][expressionNumber - 1]}.`,
    relationship: `In relationships, your approach is shaped by both your Life Path (${lifePathNumber}) and Expression (${expressionNumber}) numbers. You tend to ${["seek partners who match your ambition and drive", "value harmony and balance in your relationships", "look for creative and expressive connections", "prioritize stability and loyalty in partnerships", "need freedom and excitement in your romantic life", "nurture and support your partner's growth", "seek intellectual stimulation and depth in conversations", "desire intense and transformative connections", "look for partners who share your ideals and values"][Math.floor((lifePathNumber + expressionNumber) / 2) - 1]}.`,
    lifeGuidance: `Based on your numbers, focus on ${["developing your leadership skills and taking initiative", "cultivating harmonious relationships and finding balance", "expressing your creativity and unique voice", "building solid foundations and working diligently", "embracing change and seeking new experiences", "nurturing others and finding ways to be of service", "deepening your knowledge and understanding of the world", "harnessing your personal power responsibly", "contributing to humanitarian causes and making a difference"][lifePathNumber - 1]}.`,
    yearForecast: `This year emphasizes themes related to your Expression Number ${expressionNumber}. Focus on ${["taking charge of your life and starting new projects", "building and maintaining important relationships", "expressing yourself creatively and joyfully", "creating stability and security in your life", "embracing change and seeking freedom", "nurturing yourself and others, finding work-life balance", "deepening your understanding of yourself and others", "manifesting abundance and personal power", "connecting with your higher purpose and helping others"][expressionNumber - 1]}.`,
    personalBrand: `Your personal brand is strongly influenced by your Expression Number ${expressionNumber}. Emphasize your ${["leadership and pioneering spirit", "diplomatic and cooperative nature", "creativity and self-expression", "reliability and practical skills", "versatility and progressive thinking", "nurturing and problem-solving abilities", "wisdom and analytical skills", "ambition and transformative power", "idealism and humanitarian values"][expressionNumber - 1]} in your professional and personal presentation.`,
    health: `Your health and well-being are influenced by your Life Path Number ${lifePathNumber}. Pay attention to ${["managing stress and engaging in physical activity", "maintaining balance and harmony in your diet and lifestyle", "finding creative outlets for emotional well-being", "establishing healthy routines and habits", "ensuring variety in diet and exercise to avoid restlessness", "nurturing self-care practices and helping others", "focusing on mental health and stress reduction through analysis", "practicing moderation and transformative health practices", "exploring holistic health approaches and the mind-body connection"][lifePathNumber - 1]}.`
  };
};

const DestinyCalculator: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState<DestinyResult | null>(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !birthDate || !gender) {
        alert("Please fill in all fields.");
        return;
    }
    setLoading(true); // Set loading to true
    const calculatedResult = await generateResult(name, birthDate, gender);
    setResult(calculatedResult);
    setLoading(false); // Set loading to false
  };

  useEffect(() => {
    // Optional: You can add any animations or effects here if needed
  }, []);

  return (
    <section id="destiny-calculator" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Advanced Destiny Calculator</h2>
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Destiny Background" 
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
        />
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-gray-700 font-bold mb-2">Birth Date</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
              min="1900-01-01"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
            <Star className="mr-2" /> Calculate Destiny
          </button>
        </form>
        {loading && <p className="text-center text-blue-600">Calculating your destiny...</p>} {/* Loading message */}
        {result && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Your Detailed Destiny Reading</h3>
            <img 
              src="https://images.unsplash.com/photo-1529636444744-adffc9135a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Destiny Reading" 
              className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(result).map(([key, value]) => (
                <div key={key} className="mb-4 p-4 border border-gray-300 rounded-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-bold text-lg mb-2 text-blue-600">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinyCalculator;