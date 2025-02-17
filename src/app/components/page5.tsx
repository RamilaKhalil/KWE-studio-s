"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Verizon", year: "2021", img: "/images/athlete.jpg" },
  { name: "Nike", year: "2022", img: "/images/boat.jpg" },
  { name: "Spotify", year: "2023", img: "/images/outdoors.jpg" },
];

export default function Page5() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      id="clients-section"
      className="min-h-screen w-full relative md:pb-[140px] pb-[-80px]  px-6 md:px-12 lg:px-20 flex flex-col gap-8"
    >
      {/* Section Title */}
      <h2
        id="clients-title"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 text-center md:text-left tracking-tight"
      >
        Mentioned Clients
      </h2>

      {/* Client Cards */}
      <div id="clients-list" className="gap-6 flex flex-col">
        {clients.map((client, index) => (
          <div
            key={index}
            id={`client-box-${index}`}
            className="relative flex items-center gap-4 p-5 md:p-6 rounded-lg border-y-2 transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image that appears when hovering (Disabled on Mobile) */}
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute pt-6 left-[50%] w-[280px] md:w-[300px] h-[280px] md:h-[300px] rounded-lg shadow-lg hidden md:block"
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0, 3, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={client.img}
                    alt="Client Image"
                    width={250}
                    height={250}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>
            )}

            {/* Client Details */}
            <div>
              <h3 className="text-lg md:text-xl font-medium text-white">{client.name}</h3>
              <h4 className="text-base md:text-lg text-gray-400">{client.year}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
