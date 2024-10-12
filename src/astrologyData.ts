// ... (giữ nguyên code hiện tại)

export const pastLifeData = {
  'Aries': 'In your past life, you were likely a pioneer or warrior, always at the forefront of new ventures and challenges.',
  'Taurus': 'Your past life was probably one of luxury and comfort, possibly as a wealthy merchant or landowner.',
  'Gemini': 'In a previous incarnation, you might have been a scribe, messenger, or teacher, always eager to learn and share knowledge.',
  'Cancer': 'Your past life likely revolved around home and family, possibly as a caretaker or someone deeply connected to their roots.',
  'Leo': 'In your past life, you might have been royalty or a person of great influence, always in the spotlight.',
  'Virgo': 'Your previous incarnation was likely as a healer, craftsperson, or someone dedicated to service and perfection.',
  'Libra': 'In a past life, you might have been a diplomat, judge, or artist, always seeking balance and beauty.',
  'Scorpio': 'Your past life was likely intense and transformative, possibly as a mystic, researcher, or someone dealing with life and death.',
  'Sagittarius': 'In your previous life, you were probably an explorer, philosopher, or spiritual seeker, always expanding your horizons.',
  'Capricorn': 'Your past life might have been one of responsibility and ambition, possibly as a leader or someone who built lasting structures.',
  'Aquarius': 'In a previous incarnation, you were likely a visionary, reformer, or someone ahead of their time.',
  'Pisces': 'Your past life was probably deeply spiritual or artistic, possibly as a mystic, artist, or someone connected to the sea.'
};

export const familyPredictions = {
  'Aries': 'Your family life is energetic and sometimes challenging. You may need to learn patience with your loved ones.',
  'Taurus': 'You value stability in your family life and work hard to provide comfort for your loved ones.',
  'Gemini': 'Your family life is lively and communicative. You enjoy intellectual discussions with your family members.',
  'Cancer': 'Family is extremely important to you. You create a nurturing and protective environment for your loved ones.',
  'Leo': 'You take pride in your family and enjoy being the center of attention in family gatherings.',
  'Virgo': 'You are the problem-solver in your family, always ready to help with practical solutions.',
  'Libra': 'You strive for harmony in your family life and are often the peacemaker in conflicts.',
  'Scorpio': 'Your family relationships are intense and transformative. You value deep, meaningful connections with your loved ones.',
  'Sagittarius': 'You bring adventure and optimism to your family life. You encourage your loved ones to expand their horizons.',
  'Capricorn': 'You take your family responsibilities seriously and work hard to provide a stable foundation for your loved ones.',
  'Aquarius': 'Your family life may be unconventional. You value individuality and encourage your loved ones to be themselves.',
  'Pisces': 'You have a deep emotional connection with your family. You are intuitive to their needs and feelings.'
};

export const careerPredictions = {
  'Aries': 'You thrive in competitive environments and leadership roles. Entrepreneurship or sports could be great career paths.',
  'Taurus': 'You excel in fields related to finance, art, or anything that allows you to build something tangible.',
  'Gemini': 'Your communication skills make you well-suited for careers in writing, teaching, or media.',
  'Cancer': 'Nurturing professions like healthcare, counseling, or hospitality align well with your caring nature.',
  'Leo': 'You shine in careers that put you in the spotlight, such as entertainment, management, or politics.',
  'Virgo': 'Your attention to detail makes you excellent in fields like healthcare, technology, or quality assurance.',
  'Libra': 'You excel in careers involving diplomacy, law, or the arts, where your sense of balance and beauty is valued.',
  'Scorpio': 'Investigative or psychological professions suit you well, as do careers in finance or scientific research.',
  'Sagittarius': 'You thrive in careers involving travel, higher education, or philosophy. Publishing or outdoor work could also suit you.',
  'Capricorn': 'Your ambition serves you well in business, government, or any field where you can climb the ladder of success.',
  'Aquarius': 'Innovative fields like technology, science, or social reform align well with your forward-thinking nature.',
  'Pisces': 'Creative or healing professions suit you well, such as art, music, psychology, or spiritual work.'
};

export const futurePredictions = {
  'Aries': 'Your future holds exciting adventures and new beginnings. Stay open to opportunities for leadership and personal growth.',
  'Taurus': 'Financial stability and material comfort are in your future. Focus on building and maintaining your resources.',
  'Gemini': 'Your future involves continuous learning and communication. You may find success through writing or teaching.',
  'Cancer': 'Your future emphasizes emotional fulfillment and family bonds. Creating a nurturing home environment will be crucial.',
  'Leo': 'Fame or recognition may be in your future. Focus on developing your talents and sharing them with the world.',
  'Virgo': 'Your future involves service and personal growth. Developing your skills will lead to success and satisfaction.',
  'Libra': 'Harmonious relationships and aesthetic pursuits are in your future. Focus on creating balance in all areas of life.',
  'Scorpio': 'Transformation and deep understanding are key themes in your future. Embrace change and personal evolution.',
  'Sagittarius': 'Your future involves exploration, both physical and mental. Travel and higher education may play significant roles.',
  'Capricorn': 'Achievement and recognition are in your future. Your hard work will pay off in terms of career and social status.',
  'Aquarius': 'Innovation and social connection are key to your future. You may play a role in creating positive change in society.',
  'Pisces': 'Spiritual growth and creative expression are important in your future. Trust your intuition to guide you.'
};

export function getPastLifeInfo(zodiacSign: string): string {
  return pastLifeData[zodiacSign as keyof typeof pastLifeData] || 'Past life information not available.';
}

export function getFamilyPrediction(zodiacSign: string): string {
  return familyPredictions[zodiacSign as keyof typeof familyPredictions] || 'Family prediction not available.';
}

export function getCareerPrediction(zodiacSign: string): string {
  return careerPredictions[zodiacSign as keyof typeof careerPredictions] || 'Career prediction not available.';
}

export function getFuturePrediction(zodiacSign: string): string {
  return futurePredictions[zodiacSign as keyof typeof futurePredictions] || 'Future prediction not available.';
}