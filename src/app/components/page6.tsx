"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi"; // Import Plus & Minus Icons

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We create bold strategies and seamless digital experiences through branding, web design, and content marketing. Serving clients worldwide.",
  },
  {
    question: "Where are you based?",
    answer:
      "Originally from the DC area, we now work globally, bringing a fresh perspective to every project.",
  },
  {
    question: "How do you approach branding?",
    answer:
      "We take a tailored approach to branding, crafting a unique identity that aligns perfectly with your vision.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across multiple industries, from startups to enterprises, focusing on branding, web design, and marketing.",
  },
  {
    question: "How can I start a project with you?",
    answer:
      "Reach out through our contact page, and we’ll schedule a consultation to plan your project’s strategy.",
  },
];

export default function Page5() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="min-h-screen w-full relative mt-[-20vh]  md:mt-[0vh] pb-[100px] px-6 md:px-12 lg:px-20 flex flex-col gap-8">
      {/* Section Title */}
      <h2 id="faq-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 text-center md:text-left tracking-tight">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div id="faq-list" className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            id={`faq-box-${index}`}
            className="relative flex flex-col gap-3 p-5 md:p-6 rounded-lg border border-gray-800 bg-[#151515] transition-all duration-300 hover:scale-105"
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-white">{faq.question}</h3>
              <button
                onClick={() => toggleFAQ(index)}
                className="text-gray-400 hover:text-white p-2 transition"
              >
                {openIndex === index ? <FiMinus size={22} /> : <FiPlus size={22} />}
              </button>
            </div>

            {/* Answer (Animated) */}
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-base md:text-lg leading-relaxed text-gray-300"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
