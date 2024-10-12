import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">Loz & Cao</h1>
        <p className="text-2xl">We're getting married!</p>
        <p className="text-xl mt-4">August 15, 2024</p>
      </div>
    </section>
  );
};

export default Hero;