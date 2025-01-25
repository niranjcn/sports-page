import React, { useState } from 'react';
import { motion } from "framer-motion";

// Full event list with schedules
const events = {
  gameList: {
    men: [
      'Badminton - Singles',
      'Badminton - Doubles',
      'Carroms - Doubles',
      'Table Tennis - Singles',
      'Table Tennis - Doubles',
      'Chess - Singles',
      'Cricket',
      'Football',
      'Volleyball',
      'Kabaddi',
    ],
    women: [
      'Badminton - Singles',
      'Badminton - Doubles',
      'Carroms - Doubles',
      'Table Tennis - Singles',
      'Table Tennis - Doubles',
      'Chess - Singles',
    ],
  },
  athleticList: {
    men: [
      '100m Race',
      '200m Race',
      '400m Race',
      '5000m Race',
      'Long Jump',
      'High Jump',
      'Shot Put (7.26 kg)',
      'Discus Throw (2 kg)',
      'Javelin Throw (800 g)',
      'Relay (4×200m)',
    ],
    women: [
      '100m Race',
      '200m Race',
      '400m Race',
      '3000m Race',
      'Long Jump',
      'High Jump',
      'Shot Put (4 kg)',
      'Discus Throw (1 kg)',
      'Javelin Throw (600 g)',
      'Relay (4×200m)',
    ],
  },
  gameSchedule: [
    { id: 1, title: 'Badminton - Singles (Boys)', date: '2025-01-27', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 2, title: 'Badminton - Doubles (Girls)', date: '2025-01-27', time: '10:45 AM - 03:00 PM', round: 'Quarterfinals' },
    { id: 3, title: 'Table Tennis - Singles (Girls)', date: '2025-01-27', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 4, title: 'Table Tennis - Singles (Boys)', date: '2025-01-27', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 5, title: 'Chess (Girls)', date: '2025-01-27', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 6, title: 'Chess (Boys)', date: '2025-01-27', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 7, title: 'Football - Semifinals', date: '2025-01-27', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 8, title: 'Badminton - Doubles (Boys)', date: '2025-01-28', time: '10:45 AM - 03:00 PM', round: 'Quarterfinals' },
    { id: 9, title: 'Badminton - Singles (Girls)', date: '2025-01-28', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 10, title: 'Table Tennis - Doubles (Girls)', date: '2025-01-28', time: '10:45 AM - 12:00 PM', round: 'Quarterfinals' },
    { id: 11, title: 'Table Tennis - Doubles (Boys)', date: '2025-01-28', time: '10:45 AM - 12:00 PM', round: 'Quarterfinals' },
    { id: 12, title: 'Carroms (Boys)', date: '2025-01-28', time: '01:00 PM - 03:00 PM', round: 'Quarterfinals & Semifinals' },
    { id: 13, title: 'Carroms (Girls)', date: '2025-01-28', time: '01:00 PM - 03:00 PM', round: 'Quarterfinals & Semifinals' },
    { id: 14, title: 'Cricket - Semifinals', date: '2025-01-28', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 15, title: 'Badminton - Singles (Boys)', date: '2025-01-29', time: '10:45 AM - 12:30 PM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 16, title: 'Chess (Girls)', date: '2025-01-29', time: '10:45 AM - 03:00 PM', round: 'Semifinals, Final & Losers Final' },
    { id: 17, title: 'Chess (Boys)', date: '2025-01-29', time: '10:45 AM - 03:00 PM', round: 'Semifinals, Final & Losers Final' },
    { id: 18, title: 'Table Tennis - Singles (Girls)', date: '2025-01-29', time: '01:00 PM - 03:00 PM', round: 'Semifinals, Final & Losers Final' },
    { id: 19, title: 'Table Tennis - Singles (Boys)', date: '2025-01-29', time: '01:00 PM - 03:00 PM', round: 'Semifinals, Final & Losers Final' },
    { id: 20, title: 'Volleyball - Semifinals', date: '2025-01-29', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 21, title: 'Kabaddi - Semifinals', date: '2025-01-29', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 22, title: 'Badminton - Singles (Girls)', date: '2025-01-30', time: '10:45 AM - 11:15 AM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 23, title: 'Badminton - Doubles (Boys)', date: '2025-01-30', time: '11:15 AM - 01:00 PM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 24, title: 'Badminton - Doubles (Girls)', date: '2025-01-30', time: '11:15 AM - 01:00 PM', round: 'Semifinal 1 & Semifinal 2' },
    { id: 25, title: 'Carroms (Girls)', date: '2025-01-30', time: '12:00 PM - 03:00 PM', round: 'Final & Losers Final ' },
    { id: 26, title: 'Carroms (Boys)', date: '2025-01-30', time: '12:00 PM - 03:00 PM', round: 'Final & Losers Final ' },
    { id: 27, title: 'Badminton - Singles (Boys)', date: '2025-01-30', time: '01:00 PM - 03:00 PM', round: 'Final & Losers Final ' },
    { id: 28, title: 'Badminton - Singles (Girls)', date: '2025-01-30', time: '01:00 PM - 03:00 PM', round: 'Final & Losers Final ' },
    { id: 29, title: 'Table Tennis - Doubles (Boys)', date: '2025-01-30', time: '01:30 PM - 03:00 PM', round: 'Semifinals , Final & Losers Final ' },
    { id: 30, title: 'Table Tennis - Doubles (Girls)', date: '2025-01-30', time: '01:30 PM - 03:00 PM', round: 'Semifinals , Final & Losers Final ' },
    { id: 31, title: 'Kabaddi - Final', date: '2025-01-30', time: '03:30 PM - 04:30 PM', round: 'Final & Losers Final' },
    { id: 32, title: 'Volleyball - Final', date: '2025-01-31', time: '08:50 AM - 10:15 AM', round: 'Final & Losers Final' },
    { id: 33, title: 'Badminton - Doubles (Boys)', date: '2025-01-31', time: '08:50 AM - 10:15 AM', round: 'Final & Losers Final' },
    { id: 34, title: 'Badminton - Doubles (Girls)', date: '2025-01-31', time: '08:50 AM - 10:15 AM', round: 'Final & Losers Final' },
    { id: 35, title: 'Cricket - Final', date: '2025-01-31', time: '10:15 AM - 11:45 AM', round: 'Final & Losers Final' },
    { id: 36, title: 'Badminton', date: '2025-01-31', time: '11:45 AM - 12:30 PM', round: 'Winners Team VS Staff Team' },
    { id: 37, title: 'Cricket', date: '2025-01-31', time: '02:00 PM - 03:00 PM', round: 'Winners Team VS Staff Team' },
    { id: 38, title: 'Football - Final', date: '2025-01-31', time: '03:00 PM - 04:30 PM', round: 'Final & Losers Final' },
    { id: 39, title: 'Athletics Meet', date: '2025-02-01', time: '', round: '' },

  ],

  athleticSchedule: [
    { id: 1, title: '5000 Meter', date: '2025-02-01', time: '8:50 AM', category: 'Men', round: 'Final' },
    { id: 2, title: '3000 Meter', date: '2025-02-01', time: '9:10 AM', category: 'Women', round: 'Final' },
    { id: 3, title: 'March Past & Inaugural Ceremony', date: '2025-02-01', time: '9:30 AM', category: 'All', round: '' },
    { id: 4, title: '100 Meter', date: '2025-02-01', time: '10:15 AM', category: 'Women', round: 'Heats' },
    { id: 5, title: '100 Meter', date: '2025-02-01', time: '10:25 AM', category: 'Men', round: 'Heats' },
    { id: 6, title: 'Long Jump', date: '2025-02-01', time: '10:35 AM', category: 'Women', round: 'Final' },
    { id: 7, title: 'Shot Put', date: '2025-02-01', time: '10:50 AM', category: 'Men', round: 'Final' },
    { id: 8, title: '400 Meter', date: '2025-02-01', time: '11:00 AM', category: 'Women', round: 'Heats' },
    { id: 9, title: '400 Meter', date: '2025-02-01', time: '11:10 AM', category: 'Men', round: 'Heats' },
    { id: 10, title: 'Long Jump', date: '2025-02-01', time: '11:20 AM', category: 'Men', round: 'Final' },
    { id: 11, title: 'Shot Put', date: '2025-02-01', time: '11:35 AM', category: 'Women', round: 'Final' },
    { id: 12, title: '100 Meter', date: '2025-02-01', time: '11:50 AM', category: 'Women', round: 'Final' },
    { id: 13, title: '100 Meter', date: '2025-02-01', time: '12:00 PM', category: 'Men', round: 'Final' },
    { id: 14, title: 'Discus Throw', date: '2025-02-01', time: '12:10 PM', category: 'Men', round: 'Final' },
    { id: 15, title: 'Lunch Break', date: '2025-02-01', time: '12:30 PM - 1:30 PM', category: 'All', round: '' },
    { id: 16, title: '400 Meter', date: '2025-02-01', time: '1:30 PM', category: 'Women', round: 'Final' },
    { id: 17, title: '400 Meter', date: '2025-02-01', time: '1:40 PM', category: 'Men', round: 'Final' },
    { id: 18, title: 'Discus Throw', date: '2025-02-01', time: '1:50 PM', category: 'Women', round: 'Final' },
    { id: 19, title: 'Javelin Throw', date: '2025-02-01', time: '2:10 PM', category: 'Women', round: 'Final' },
    { id: 20, title: '200 Meter', date: '2025-02-01', time: '2:30 PM', category: 'Women', round: 'Heats' },
    { id: 21, title: '200 Meter', date: '2025-02-01', time: '2:40 PM', category: 'Men', round: 'Heats' },
    { id: 22, title: 'Javelin Throw', date: '2025-02-01', time: '2:50 PM', category: 'Men', round: 'Final' },
    { id: 23, title: '200 Meter', date: '2025-02-01', time: '3:10 PM', category: 'Women', round: 'Final' },
    { id: 24, title: '200 Meter', date: '2025-02-01', time: '3:20 PM', category: 'Men', round: 'Final' },
    { id: 25, title: 'Relay', date: '2025-02-01', time: '3:30 PM', category: 'Women', round: 'Final' },
    { id: 26, title: 'Relay', date: '2025-02-01', time: '3:45 PM', category: 'Men', round: 'Final' },
    { id: 27, title: 'Closing Ceremony', date: '2025-02-01', time: '4:00 PM', category: 'All', round: '' },
  ]
};

const EventTable = () => {
  const [activeTab, setActiveTab] = useState('gameList');

  const renderTable = () => {
    if (activeTab === 'gameList' || activeTab === 'athleticList') {
      const data = events[activeTab];
      return (
        <motion.div
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1.25 }}
                 >
        <table className="min-w-full table-auto border-collapse mt-6 text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Men</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Women</th>
            </tr>
          </thead>
          <tbody>
            {data.men.map((event, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="px-6 py-3 text-sm text-gray-300">{event}</td>
                <td className="px-6 py-3 text-sm text-gray-300">{data.women[index] || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </motion.div>
      );
    } else if (activeTab === 'gameSchedule' || activeTab === 'athleticSchedule') {
      const data = events[activeTab];
      return (
        <motion.div
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1.25 }}
                 >
        <div className="overflow-y-auto max-h-[450px]">
          <table className="min-w-full table-auto border-collapse mt-6 text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Event</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Round</th>
              </tr>
            </thead>
            <tbody>
              {data.map(event => (
                <tr key={event.id} className="border-b border-gray-700">
                  <td className="px-6 py-3 text-sm text-gray-300">{event.time}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.title}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.date}</td>
                  <td className="px-6 py-3 text-sm text-gray-300">{event.round}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </motion.div>
      );
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <motion.div
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1.25 }}
                 >
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-700">EVENT SCHEDULE</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'gameList' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('gameList')}
        >
          Game List
        </button>
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'athleticList' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('athleticList')}
        >
          Athletic List
        </button>
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'gameSchedule' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('gameSchedule')}
        >
          Game Schedule
        </button>
        <button
          className={`relative px-6 py-3 rounded-lg text-white ${activeTab === 'athleticSchedule' ? 'bg-cyan-900' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('athleticSchedule')}
        >
          Athletic Schedule
        </button>
      </div>
      <div className="overflow-x-auto">{renderTable()}</div>
      </motion.div>
    </div>
  );
};

export default EventTable;