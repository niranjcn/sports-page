import { motion } from "framer-motion";

// Instagram Icon SVG
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Website Icon SVG
const WebsiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="m4.93 4.93 4.24 4.24"></path>
    <path d="m14.83 9.17 4.24-4.24"></path>
    <path d="m14.83 14.83 4.24 4.24"></path>
    <path d="m9.17 14.83-4.24 4.24"></path>
  </svg>
);

// Email Icon SVG
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Footer = () => {
    return (
    <footer className="relative text-white py-12 pb-24 px-4 mt-20">
            <div className="relative z-10 container mx-auto">
                {/* Minimal Footer Content */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Left: College & Event Info */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                        <div className="text-sm text-slate-300">
                            <p className="font-semibold text-cyan-400">🏆 IGNITE 2K25</p>
                            <p>STM 
                                 Kannur</p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            <a
                                href="https://www.instagram.com/stm_kannur_official_?igsh=ODdmYm1ja2JnNHF3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center w-8 h-8 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-600 transition-all duration-300 hover:border-pink-400 hover:scale-110"
                                title="Follow us on Instagram"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                                <span className="relative text-slate-400 group-hover:text-white transition-colors duration-300">
                                   <InstagramIcon />
                                </span>
                            </a>
                            <a
                                href="https://stthomaskannur.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center w-8 h-8 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-600 transition-all duration-300 hover:border-cyan-400 hover:scale-110"
                                title="Visit College Website"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                                <span className="relative text-slate-400 group-hover:text-white transition-colors duration-300">
                                    <WebsiteIcon />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Copyright & Credits */}
                    <div className="text-xs text-slate-400 text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} STM College Kannur</p>
                        <p>
                            Designed by{' '}
                            <a
                                href="https://www.vblazeatstm.tk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:drop-shadow-[0_0_5px_rgba(103,232,249,0.5)] transition-all duration-300"
                            >
                                CODNOX
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
