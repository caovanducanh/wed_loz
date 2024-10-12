import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529636444744-adffc9135a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;