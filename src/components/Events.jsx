import React from 'react';

const events = [
  {
    id: 1,
    title: "Chess",
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "Badminton",
    date: "2025-01-01",
  },
  {
    id: 3,
    title: "Cricket",
    date: "2025-01-01",
  },
];

const Eventcard = ({ event }) => {
  const handleViewDetails = () => {
    // Implement your view details logic here
    console.log(`Viewing details for ${event.title}`);
  };

  return (
    <div className='bg-white shadow-md rounded-lg p-6 mb-4'>
      <h2 className='text-xl font-bold text-blue-300'>{event.title}</h2>
      <p className='text-blue-900 text-sm'>{new Date(event.date).toDateString()}</p>
      <button 
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-pink-300'
        onClick={handleViewDetails}
        aria-label={`View details for ${event.title}`}
      >
        View Details
      </button>
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mb-6'>Events list</h1>
      {events.map((event) => (
        <Eventcard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;