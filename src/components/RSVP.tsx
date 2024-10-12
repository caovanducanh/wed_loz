import React, { useState } from 'react';

const RSVP: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to a server
    console.log({ name, email, attending, message });
    alert('RSVP submitted successfully!');
    // Reset form
    setName('');
    setEmail('');
    setAttending('');
    setMessage('');
  };

  return (
    <section id="rsvp" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">RSVP</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="attending" className="block text-gray-700 font-bold mb-2">Will you attend?</label>
            <select
              id="attending"
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            >
              <option value="">Please select</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message (Optional)</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300">
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;