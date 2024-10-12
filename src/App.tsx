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
    </div>
  );
}

export default App;
