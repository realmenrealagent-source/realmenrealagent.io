// Typewriter effect for slogan
function TypewriterSlogan() {
  const slogans = [
    "Two Agents, One Mission",
    "AI-Powered Web Solutions",
    "Design. Develop. Dominate.",
  ];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < slogans[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(slogans[index].slice(0, displayed.length + 1));
        }, 60);
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setIndex((index + 1) % slogans.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, slogans]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="font-heading text-xl sm:text-2xl font-light italic text-secondary mt-2 min-h-[2.5rem]"
      aria-label="Slogan"
    >
      {displayed}
    </motion.p>
  );
}
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiZap,
  FiUsers,
  FiAward,
  FiCpu,
  FiMonitor,
  FiImage,
  FiFilm,
} from "react-icons/fi";
import heroImage from "../../assets/images/hero/rayan.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Modern white background, no gradient */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 pt-0 sm:pt-24">
        {/* Left: Modern hero content */}
        <div className="space-y-8 py-8 md:py-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
            <FiZap className="text-accent" />
            Elevate Your Brand Instantly
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-2">
            We build stunning, high-converting websites and digital experiences
            for ambitious businesses. Let your online presence work for
            you—24/7.
          </p>
          <TypewriterSlogan />
          <div className="flex gap-4 mt-4">
            <a
              href="#contact"
              className="inline-block rounded-full bg-accent px-8 py-3 font-bold text-lg text-white shadow-lg shadow-accent/30 transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="inline-block rounded-full border border-accent px-8 py-3 font-bold text-lg text-accent bg-white shadow transition hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              View Portfolio
            </a>
          </div>
          {/* Animated Feature Highlights (desktop only) */}
          <div className="hidden md:grid grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <FiCpu className="text-3xl text-accent mb-2" />
              <span className="font-semibold text-gray-900">AI Automation</span>
              <span className="text-xs text-gray-500 mt-1">
                Automate workflows & boost productivity
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <FiMonitor className="text-3xl text-accent mb-2" />
              <span className="font-semibold text-gray-900">
                App Development
              </span>
              <span className="text-xs text-gray-500 mt-1">
                AI-powered web & mobile apps
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <FiImage className="text-3xl text-accent mb-2" />
              <span className="font-semibold text-gray-900">
                Graphic Design
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Branding, UI, and creative assets
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <FiFilm className="text-3xl text-accent mb-2" />
              <span className="font-semibold text-gray-900">Video Editing</span>
              <span className="text-xs text-gray-500 mt-1">
                Promo, explainer, & social videos
              </span>
            </div>
          </div>
          {/* Quick stats (mobile only) */}
          <div className="flex md:hidden gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-700">
              <FiUsers className="text-accent" /> 80+ Clients
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiAward className="text-accent" /> Award Winning
            </div>
          </div>
        </div>
        {/* Right: Hero image with soft shadow */}
        <div className="hidden md:flex items-center justify-center order-2 md:order-2 w-full md:w-auto">
          <motion.div className="relative group" style={{ maxWidth: "100%" }}>
            <motion.img
              src={heroImage}
              alt="Rayan - RMR AGENTS"
              className="w-48 xs:w-64 sm:w-80 md:w-[22rem] lg:w-[28rem] xl:w-[32rem] h-auto object-contain select-none pointer-events-none rounded-3xl shadow-2xl transition duration-300 bg-white"
              style={{
                boxShadow: "0 8px 48px 0 #6366F155, 0 0 0 1px #e5e7eb",
                filter: "none",
              }}
              draggable={false}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 96px 8px #6366F1, 0 0 48px 8px #4ECDC4",
              }}
            />
          </motion.div>
        </div>
      </div>
      {/* Scroll down indicator (hidden on xs) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-light/70 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to explore"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-light/40 text-2xl">
          ↓
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
