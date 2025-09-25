import React, { useState } from 'react';
import SOC from "../assets/images/soc.png";
import LOGOM from "../assets/images/logomain.png";
import MAIN from "../assets/videos/main.mp4";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";

/**
 * Banner component
 * Props:
 *  - backgroundVideo (string | undefined): path/URL to video. If undefined, falls back to static image.
 *  - posterImage (string): image shown before video loads / as fallback.
 */
const Banner = ({ backgroundVideo = MAIN, posterImage = SOC }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-full h-[100vh] md:h-[102vh] lg:h-[105vh] bg-black overflow-hidden">
      {/* Background layer: either video (preferred) or image fallback */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <>
            {/* Poster while video loading */}
            {!videoLoaded && (
              <img
                src={posterImage}
                alt="Ignite background placeholder"
                className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none scale-105 opacity-60 animate-pulse"
                draggable={false}
              />
            )}
            <video
              className="absolute inset-0 w-full h-full object-cover object-center" 
              src={backgroundVideo}
              poster={posterImage}
              autoPlay
              playsInline
              muted
              loop
              preload="auto"
              onLoadedData={() => setVideoLoaded(true)}
              aria-hidden="true"
            />
          </>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 animate-pulse opacity-50"
            style={{ backgroundImage: `url(${posterImage})` }}
          />
        )}
        {/* Overlays for better contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/25 via-purple-800/10 to-black" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
  {/* Subtle texture replacement (removed inline SVG to avoid JSX parsing issues) */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_70%)]" />
      </div>

      {/* Decorative floating glows */}
      <div className="pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-[160px] animate-coordinators-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-emerald-500/10 rounded-full blur-[170px] animation-delay-4000 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.img
          src={LOGOM}
          alt="Ignite Logo"
          className="w-28 sm:w-36 md:w-48 lg:w-56 h-auto mb-6 drop-shadow-[0_0_25px_rgba(6,182,212,0.45)]"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        />
        <motion.h1
          className="relative font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 text-3xl sm:text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_0_10px_rgba(103,232,249,0.35)]"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
        >
          IGNITE 2025
          <span className="block mt-2 text-xs sm:text-sm md:text-lg font-medium tracking-wide text-white/70">St. Thomas College of Engineering & Technology</span>
        </motion.h1>

        {/* Tagline / subheading */}
        <motion.p
          className="mt-6 max-w-2xl text-[11px] sm:text-sm md:text-base text-white/65 font-light leading-relaxed"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
        >
          A celebration of athletic spirit, precision, and teamwork. Experience the adrenaline of campus sports elevated with technology & design.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://stthomaskannur.ac.in/ignite/"
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm md:text-base tracking-wide text-white overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 opacity-90 group-hover:opacity-100 blur-sm transition duration-300" />
            <span className="absolute inset-[2px] rounded-full bg-black/80 backdrop-blur-md" />
            <span className="relative flex items-center gap-2">
              Register Now
              <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-70 group-hover:translate-x-1 transition-transform">
                <path fill="currentColor" d="M5 12h12m0 0l-5-5m5 5l-5 5" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="absolute -inset-1 rounded-full ring-1 ring-cyan-400/40 group-hover:ring-purple-400/60 transition" />
          </a>
          <a
            href="#events"
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm md:text-base tracking-wide text-cyan-200/90 hover:text-white"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition" />
            <span className="relative flex items-center gap-2">
              View Events
              <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-60 group-hover:translate-x-1 transition-transform">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h12m0 0l-5-5m5 5l-5 5" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          className="absolute bottom-8 inset-x-0 flex flex-col items-center text-white/70"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.85 }}
        >
          <span className="text-[10px] sm:text-xs tracking-widest mb-2 font-medium uppercase">Scroll</span>
          <BsMouse size={24} className="animate-bounce opacity-80" />
        </motion.div>
        {/* Loading indicator (subtle) if video not ready */}
        {backgroundVideo && !videoLoaded && (
          <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-wider text-cyan-200/60 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Loading video...
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;