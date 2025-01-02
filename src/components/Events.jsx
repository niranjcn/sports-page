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
          <table className="min-w-full table-auto border-collapse mt-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Men</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Women</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b">
                  <td className="px-6 py-3 text-sm text-gray-700">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'athleticList':
        return (
          <table className="min-w-full table-auto border-collapse mt-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Men</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Women</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b">
                  <td className="px-6 py-3 text-sm text-gray-700">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'gameSchedule':
        return (
          <table className="min-w-full table-auto border-collapse mt-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Event</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Round</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Staff Coordinator</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b">
                  <td className="px-6 py-3 text-sm text-gray-700">{event.time}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.category}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.round}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.staffCoordinator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'athleticMeet':
        return (
          <table className="min-w-full table-auto border-collapse mt-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Event</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Round</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Staff Coordinator</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b">
                  <td className="px-6 py-3 text-sm text-gray-700">{event.time}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.category}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.round}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{event.staffCoordinator}</td>
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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Event Schedule</h1>

      {/* Button Container */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          className={`px-6 py-3 rounded-lg text-white ${activeTab === 'gameList' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('gameList')}
        >
          Game List
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-white ${activeTab === 'athleticList' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('athleticList')}
        >
          Athletic List
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-white ${activeTab === 'gameSchedule' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('gameSchedule')}
        >
          Game Schedule
        </button>
        <button
          className={`px-6 py-3 rounded-lg text-white ${activeTab === 'athleticMeet' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('athleticMeet')}
        >
          Athletic Meet
        </button>
      </div>

      {/* Render the table based on the active tab */}
      <div className="overflow-x-auto">{renderTable()}</div>
    </div>
  );
};

export default EventTable;


