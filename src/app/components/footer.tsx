"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative min-h-screen w-full md:pb-[140px]   bg-[#0F0D0D] flex items-center justify-center overflow-hidden">
      {/* Background "KWE" Text */}
      <h1
        
        className="absolute text-[40vw] text-[#e8e4e4]  font-bold w-full text-center uppercase ">
        KWE
      </h1>
{/* Glassmorphism Contact Form */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="relative z-10 backdrop-blur-md bg-white/10 p-8 sm:p-12 md:p-16 lg:p-20 shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto flex flex-col gap-6"
>
  {/* Form Heading */}
  <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
    Contact Us
  </h2>

  {/* Contact Form */}
  <motion.form
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="flex flex-col gap-4 w-full max-w-md sm:max-w-lg mx-auto"
  >
    <input
      type="text"
      placeholder="Your Name"
      className="p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
    />
    <textarea
      placeholder="Your Message"
      className="p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 h-32 resize-none"
    />
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/10 text-white py-3 rounded-md hover:bg-white/50 transition-all font-semibold"
    >
      Send Message
    </motion.button>
  </motion.form>

  {/* Social Media Icons */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="flex justify-center gap-6 mt-4"
  >
    <a href="#" className="text-white hover:text-gray-300 transition-all">
      <FaInstagram size={24} />
    </a>
    <a href="#" className="text-white hover:text-gray-300 transition-all">
      <FaTwitter size={24} />
    </a>
    <a href="#" className="text-white hover:text-gray-300 transition-all">
      <FaLinkedin size={24} />
    </a>
  </motion.div>
</motion.div>

    
    </footer>
  );
}