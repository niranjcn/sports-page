import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronsRight } from 'lucide-react';

const events = {
  gameList: {
    men: [
      'Badminton - Singles', 'Badminton - Doubles', 'Carroms - Doubles',
      'Table Tennis - Singles', 'Table Tennis - Doubles', 'Chess - Singles',
      'Cricket', 'Football', 'Volleyball', 'Kabaddi',
    ],
    women: [
      'Badminton - Singles', 'Badminton - Doubles', 'Carroms - Doubles',
      'Table Tennis - Singles', 'Table Tennis - Doubles', 'Chess - Singles',
    ],
  },
  athleticList: {
    men: [
      '100m Race', '200m Race', '400m Race', '5000m Race',
      'Long Jump', 'High Jump', 'Shot Put (7.26 kg)',
      'Discus Throw (2 kg)', 'Javelin Throw (800 g)', 'Relay (4x100m)',
    ],
    women: [
      '100m Race', '200m Race', '400m Race', '3000m Race',
      'Long Jump', 'High Jump', 'Shot Put (4 kg)',
      'Discus Throw (1 kg)', 'Javelin Throw (600 g)', 'Relay (4x100m)',
    ],
  },
  gameSchedule: [
    { id: 1, title: 'Badminton - Singles (Boys)', date: '2025-10-06', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 2, title: 'Table Tennis - Singles (Girls)', date: '2025-10-06', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 3, title: 'Badminton - Doubles (Girls)', date: '2025-10-06', time: '10:45 AM - 03:00 PM', round: 'Quarterfinals' },
    { id: 4, title: 'Table Tennis - Singles (Boys)', date: '2025-10-06', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 5, title: 'Carroms (Boys & Girls)', date: '2025-10-06', time: '01:00 PM - 03:00 PM', round: 'Quarterfinals & Semifinals' },
    { id: 6, title: 'Cricket - Semifinals', date: '2025-10-06', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & 2' },
    { id: 7, title: 'Badminton - Doubles (Boys)', date: '2025-10-07', time: '10:45 AM - 03:00 PM', round: 'Quarterfinals' },
    { id: 8, title: 'Badminton - Singles (Girls)', date: '2025-10-07', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 9, title: 'Table Tennis - Doubles (Girls & Boys)', date: '2025-10-07', time: '10:45 AM - 12:00 PM', round: 'Quarterfinals' },
    { id: 10, title: 'Chess (Girls & Boys)', date: '2025-10-07', time: '10:45 AM - 03:00 PM', round: 'First Round & Quarterfinals' },
    { id: 11, title: 'Football - Semifinals', date: '2025-10-07', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & 2' },
    { id: 12, title: 'Badminton - Singles (Boys)', date: '2025-10-08', time: '10:45 AM - 12:30 PM', round: 'Semifinal 1 & 2' },
    { id: 13, title: 'Chess (Girls & Boys)', date: '2025-10-08', time: '10:45 AM - 03:00 PM', round: 'Semifinals, Final & Losers Final' },
    { id: 14, title: 'Table Tennis - Singles (Girls & Boys)', date: '2025-10-08', time: '01:00 PM - 03:00 PM', round: 'Semifinals, Final & Losers Final' },
    { id: 15, title: 'Volleyball - Semifinals', date: '2025-10-08', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & 2' },
    { id: 16, title: 'Kabaddi - Semifinals', date: '2025-10-08', time: '03:00 PM - 04:30 PM', round: 'Semifinal 1 & 2' },
    { id: 17, title: 'Badminton - Singles (Girls)', date: '2025-10-09', time: '10:45 AM - 11:15 AM', round: 'Semifinal 1 & 2' },
    { id: 18, title: 'Badminton - Doubles (Boys & Girls)', date: '2025-10-09', time: '11:15 AM - 01:00 PM', round: 'Semifinal 1 & 2' },
    { id: 19, title: 'Table Tennis - Doubles (Boys & Girls)', date: '2025-10-09', time: '01:30 PM - 03:00 PM', round: 'Semifinals, Final & Losers Final' },
    { id: 20, title: 'Carroms (Girls & Boys)', date: '2025-10-09', time: '12:00 PM - 03:00 PM', round: 'Final & Losers Final' },
    { id: 21, title: 'Badminton - Singles (Boys & Girls)', date: '2025-10-09', time: '01:00 PM - 03:00 PM', round: 'Final & Losers Final' },
    { id: 22, title: 'Kabaddi - Final', date: '2025-10-09', time: '03:30 PM - 04:30 PM', round: 'Final & Losers Final' },
    { id: 23, title: 'Cricket - Final', date: '2025-10-10', time: '09:00 AM - 10:30 AM', round: 'Final & Losers Final' },
    { id: 24, title: 'Badminton - Doubles (Boys & Girls)', date: '2025-10-10', time: '09:00 AM - 10:30 AM', round: 'Final & Losers Final' },
    { id: 25, title: 'Volleyball - Final', date: '2025-10-10', time: '10:30 AM - 12:00 PM', round: 'Final & Losers Final' },
    { id: 26, title: 'Badminton (Students vs Staff)', date: '2025-10-10', time: '11:30 AM - 12:30 PM', round: 'Exhibition Match' },
    { id: 27, title: 'Cricket (Students vs Staff)', date: '2025-10-10', time: '02:00 PM - 03:30 PM', round: 'Exhibition Match' },
    { id: 28, title: 'Football - Final', date: '2025-10-10', time: '03:30 PM - 04:30 PM', round: 'Final & Losers Final' },
    { id: 29, title: 'Athletics Meet', date: '2025-10-11', time: 'Full Day', round: '' },
  ],
  athleticSchedule: [
    { id: 1, time: '8:50 AM', event: '5000 Meter', category: 'Men', round: 'Final' },
    { id: 2, time: '9:10 AM', event: '3000 Meter', category: 'Women', round: 'Final' },
    { id: 3, time: '9:30 AM', event: 'MARCH PAST & INAUGURAL CEREMONY', category: 'All', round: '' },
    { id: 4, time: '10:15 AM', event: '100 Meter', category: 'Women', round: 'Heats' },
    { id: 5, time: '10:25 AM', event: '100 Meter', category: 'Men', round: 'Heats' },
    { id: 6, time: '10:35 AM', event: 'Long Jump', category: 'Women', round: 'Final' },
    { id: 7, time: '10:50 AM', event: 'Shot Put', category: 'Men', round: 'Final' },
    { id: 8, time: '11:00 AM', event: '400 Meter', category: 'Women', round: 'Heats' },
    { id: 9, time: '11:10 AM', event: '400 Meter', category: 'Men', round: 'Heats' },
    { id: 10, time: '11:20 AM', event: 'Long Jump', category: 'Men', round: 'Final' },
    { id: 11, time: '11:35 AM', event: 'Shot Put', category: 'Women', round: 'Final' },
    { id: 12, time: '11:50 AM', event: '100 Meter', category: 'Women', round: 'Final' },
    { id: 13, time: '12:00 PM', event: '100 Meter', category: 'Men', round: 'Final' },
    { id: 14, time: '12:10 PM', event: 'Discus Throw', category: 'Men', round: 'Final' },
    { id: 15, time: '12:30 PM - 01:30 PM', event: 'LUNCH BREAK', category: 'All', round: '' },
    { id: 16, time: '1:30 PM', event: '400 Meter', category: 'Women', round: 'Final' },
    { id: 17, time: '1:40 PM', event: '400 Meter', category: 'Men', round: 'Final' },
    { id: 18, time: '1:50 PM', event: 'Discus Throw', category: 'Women', round: 'Final' },
    { id: 19, time: '2:10 PM', event: 'Javelin Throw', category: 'Women', round: 'Final' },
    { id: 20, time: '2:30 PM', event: '200 Meter', category: 'Women', round: 'Heats' },
    { id: 21, time: '2:40 PM', event: '200 Meter', category: 'Men', round: 'Heats' },
    { id: 22, time: '2:50 PM', event: 'Javelin Throw', category: 'Men', round: 'Final' },
    { id: 23, time: '3:10 PM', event: '200 Meter', category: 'Women', round: 'Final' },
    { id: 24, time: '3:20 PM', event: '200 Meter', category: 'Men', round: 'Final' },
    { id: 25, time: '3:30 PM', event: 'Relay', category: 'Women', round: 'Final' },
    { id: 26, time: '3:45 PM', event: 'Relay', category: 'Men', round: 'Final' },
    { id: 27, time: '4:00 PM', event: 'CLOSING CEREMONY', category: 'All', round: '' },
  ]
};

const TabButton = ({ active, onClick, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`relative px-8 py-4 text-sm font-bold rounded-2xl transition-all duration-500 ease-out focus:outline-none group ${
      active
        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
        : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:border-cyan-400/50 hover:bg-gray-700/50'
    }`}
  >
    <span className="relative z-10">{children}</span>
    {active && (
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-50"
        layoutId="activeTab"
        initial={false}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />
    )}
    {!active && (
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    )}
  </motion.button>
);

const EventListTable = ({ data }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800"
        style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#a855f7 #1f2937'
        }}
    >
        <div className="relative bg-gray-900/30 backdrop-blur-md rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur"></div>
            <table className="relative min-w-full table-auto">
                <thead className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
                    <tr>
                        <th className="px-8 py-6 text-left text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20">
                            <div className="flex items-center space-x-2">
                                <span>🚹</span>
                                <span>Men's Events</span>
                            </div>
                        </th>
                        <th className="px-8 py-6 text-left text-sm font-bold text-pink-400 uppercase tracking-wider border-b border-pink-500/20">
                            <div className="flex items-center space-x-2">
                                <span>🚺</span>
                                <span>Women's Events</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <motion.tbody
                    className="divide-y divide-gray-700/50"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.03 } }
                    }}
                >
                    {data.men.map((event, index) => (
                        <motion.tr
                            key={index}
                            className="group hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-purple-500/5 transition-all duration-300"
                            variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <td className="px-8 py-5 text-sm font-medium text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span>{event}</span>
                                </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-medium text-gray-200 group-hover:text-pink-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span>{data.women[index] || '—'}</span>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </motion.tbody>
            </table>
        </div>
    </motion.div>
);

const GameScheduleTable = ({ data }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="events-horizontal-scroll overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-800"
        style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#06b6d4 #1f2937'
        }}
    >
        <div className="relative bg-gray-900/30 backdrop-blur-md rounded-3xl border border-gray-800/50 shadow-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur pointer-events-none"></div>
            {/* Set a wider min-width so on narrow screens the user can horizontally scroll only this section */}
            <table className="relative min-w-[760px] md:min-w-full table-auto">
                <thead className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
                    <tr>
                        <th className="px-8 py-6 text-left text-sm font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20">
                            <div className="flex items-center space-x-2">
                                <span>📅</span>
                                <span>Date</span>
                            </div>
                        </th>
                        <th className="px-8 py-6 text-left text-sm font-bold text-purple-400 uppercase tracking-wider border-b border-purple-500/20">
                            <div className="flex items-center space-x-2">
                                <span>⏰</span>
                                <span>Time</span>
                            </div>
                        </th>
                        <th className="px-8 py-6 text-left text-sm font-bold text-emerald-400 uppercase tracking-wider border-b border-emerald-500/20">
                            <div className="flex items-center space-x-2">
                                <span>🏆</span>
                                <span>Event</span>
                            </div>
                        </th>
                        <th className="px-8 py-6 text-left text-sm font-bold text-pink-400 uppercase tracking-wider border-b border-pink-500/20">
                            <div className="flex items-center space-x-2">
                                <span>🎯</span>
                                <span>Round</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <motion.tbody
                    className="divide-y divide-gray-700/30"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.02 } }
                    }}
                >
                    {data.map(event => (
                        <motion.tr
                            key={event.id}
                            className="group hover:bg-gradient-to-r hover:from-cyan-500/5 hover:via-purple-500/5 hover:to-pink-500/5 transition-all duration-300"
                            variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        >
                            <td className="px-8 py-5 text-sm font-medium text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' })}</span>
                                </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-semibold text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{event.time}</span>
                                </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{event.title}</span>
                                </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-medium text-gray-200 group-hover:text-pink-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{event.round || '—'}</span>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </motion.tbody>
            </table>
        </div>
    </motion.div>
);


const AthleticScheduleTable = ({ data }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="events-horizontal-scroll overflow-x-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800"
        style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#f97316 #1f2937'
        }}
    >
        <div className="relative bg-gray-900/30 backdrop-blur-md rounded-3xl border border-gray-800/50 shadow-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur pointer-events-none"></div>
            <table className="relative min-w-[760px] md:min-w-full table-auto">
                <thead className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
                    <tr>
                        <th className="px-8 py-6 text-left text-sm font-bold text-orange-400 uppercase tracking-wider border-b border-orange-500/20">
                            <div className="flex items-center space-x-2">
                                <span>⏰</span>
                                <span>Time</span>
                            </div>
                        </th>
                        <th className="px-8 py-6 text-left text-sm font-bold text-red-400 uppercase tracking-wider border-b border-red-500/20">
                            <div className="flex items-center space-x-2">
                                <span>🏃</span>
                                <span>Athletic Event</span>
                            </div>
                        </th>
                        <th className="px-8 py-6 text-left text-sm font-bold text-yellow-400 uppercase tracking-wider border-b border-yellow-500/20">
                            <div className="flex items-center space-x-2">
                                <span>👥</span>
                                <span>Category</span>
                            </div>
                        </th>
                        <th className="px-8 py-6 text-left text-sm font-bold text-green-400 uppercase tracking-wider border-b border-green-500/20">
                            <div className="flex items-center space-x-2">
                                <span>🎖️</span>
                                <span>Round</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <motion.tbody
                    className="divide-y divide-gray-700/30"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.02 } }
                    }}
                >
                    {data.map(item => (
                        <motion.tr
                            key={item.id}
                            className="group hover:bg-gradient-to-r hover:from-orange-500/5 hover:via-red-500/5 hover:to-yellow-500/5 transition-all duration-300"
                            variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        >
                            <td className="px-8 py-5 text-sm font-semibold text-gray-200 group-hover:text-orange-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{item.time}</span>
                                </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-bold text-red-300 group-hover:text-red-200 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{item.event}</span>
                                </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-medium text-gray-200 group-hover:text-yellow-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{item.category}</span>
                                </div>
                            </td>
                            <td className="px-8 py-5 text-sm font-medium text-gray-200 group-hover:text-green-300 transition-colors duration-300">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span>{item.round || '—'}</span>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </motion.tbody>
            </table>
        </div>
    </motion.div>
);


const EventPage = () => {
  const [activeTab, setActiveTab] = useState('gameSchedule');

  const renderContent = () => {
    switch (activeTab) {
      case 'gameList':
        return <EventListTable data={events.gameList} />;
      case 'athleticList':
        return <EventListTable data={events.athleticList} />;
      case 'gameSchedule':
        return <GameScheduleTable data={events.gameSchedule} />;
      case 'athleticSchedule':
        return <AthleticScheduleTable data={events.athleticSchedule} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative p-4 sm:p-8 min-h-screen text-white font-sans overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title matching Gallery style exactly */}
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(103,232,249,0.4)]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          EVENTS
        </motion.h1>

        {/* Enhanced Tab Navigation */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
            <TabButton active={activeTab === 'gameSchedule'} onClick={() => setActiveTab('gameSchedule')}>📅 Game Schedule</TabButton>
            <TabButton active={activeTab === 'athleticSchedule'} onClick={() => setActiveTab('athleticSchedule')}>🏃 Athletic Schedule</TabButton>
            <TabButton active={activeTab === 'gameList'} onClick={() => setActiveTab('gameList')}>🎯 Game List</TabButton>
            <TabButton active={activeTab === 'athleticList'} onClick={() => setActiveTab('athleticList')}>🏆 Athletic List</TabButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default EventPage;

