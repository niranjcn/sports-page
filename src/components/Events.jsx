import React, { useState } from 'react';

const events = [
  {
    id: 1,
    title: "Chess",
    date: "2025-01-01",
    category: "Sports",
    round: "Final",
    staffCoordinator: "John Doe",
    time: "10:00 AM"
  },
  {
    id: 2,
    title: "Badminton",
    date: "2025-01-01",
    category: "Sports",
    round: "Quarter Finals",
    staffCoordinator: "Jane Smith",
    time: "11:30 AM"
  },
  {
    id: 3,
    title: "Cricket",
    date: "2025-01-01",
    category: "Sports",
    round: "Semi Final",
    staffCoordinator: "Robert Brown",
    time: "2:00 PM"
  }
];

const EventTable = () => {
  const [activeTab, setActiveTab] = useState('gameList');

  // Handle table rendering based on active tab
  const renderTable = () => {
    switch (activeTab) {
      case 'gameList':
        return (
          <table className="min-w-full table-auto border-collapse mt-6 text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Men</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Women</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b border-gray-700">
                  <td className="px-6 py-3 text-sm text-gray-300">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'athleticList':
        return (
          <table className="min-w-full table-auto border-collapse mt-6 text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Men</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Women</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b border-gray-700">
                  <td className="px-6 py-3 text-sm text-gray-300">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'gameSchedule':
        return (
          <table className="min-w-full table-auto border-collapse mt-6 text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Event</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Round</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Staff Coordinator</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b border-gray-700">
                  <td className="px-6 py-3 text-sm text-gray-300">{event.time}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.category}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.round}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.staffCoordinator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'athleticMeet':
        return (
          <table className="min-w-full table-auto border-collapse mt-6 text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Event</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Round</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Staff Coordinator</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b border-gray-700">
                  <td className="px-6 py-3 text-sm text-gray-300">{event.time}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.category}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.round}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.staffCoordinator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-700">EVENT SCHEDULE</h1>

      {/* Button Container */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'gameList' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('gameList')}
        >
          Game List
          <span className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-900 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></span>
        </button>
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'athleticList' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('athleticList')}
        >
          Athletic List
          <span className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-900 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></span>
        </button>
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'gameSchedule' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('gameSchedule')}
        >
          Game Schedule
          <span className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-900 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></span>
        </button>
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'athleticMeet' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('athleticMeet')}
        >
          Athletic Meet
          <span className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-900 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></span>
        </button>
      </div>

      {/* Render the table based on the active tab */}
      <div className="overflow-x-auto">{renderTable()}</div>
    </div>
  );
};

export default EventTable;
