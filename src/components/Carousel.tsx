"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IKContext, IKImage } from 'imagekitio-react';

export const cars = [
  {
    title: "Morden Bedroom",
    description: "bedroom design with modern style...",
    link: "https://ik.imagekit.io/81grncrg2/image%20(6).png?updatedAt=1739685432522",
    src: "interio.live",
    color: "from-blue-100 to-blue-200",
  },
  {
    title: "Modern Living Room",
    description: "The living room is the heart of the home...",
    link: "https://ik.imagekit.io/81grncrg2/image%20(20).png?updatedAt=1739685465762",
    src: "interio.live",
    color: "from-red-50 to-red-100",
    
  },
  {
    title: "minimalist living room",
    description: "The living room is the heart of the home...",
    link: "https://ik.imagekit.io/81grncrg2/IMG-20250126-WA0025.jpg?updatedAt=1739685483273",
    src: "interio.live",
    color: "from-indigo-50 to-indigo-100",
   
  },
  
  {
    title: "minimalist kitchen",
    description: "kitchen design with modern style...",
    link: "https://ik.imagekit.io/81grncrg2/image%20(18).png?updatedAt=1739685464819",
    src: "Classic",
    color: "from-indigo-50 to-indigo-100",
    specs: { power: "550 HP", acceleration: "0-60 mph: 3.3s", topSpeed: "205 mph" },
  },
  {
    title: "morden kitchen",
    description: "kitchen design with modern style...",
    link: "https://ik.imagekit.io/81grncrg2/image%20(18).png?updatedAt=1739685464819",
    src: "interio.live",
    color: "from-indigo-50 to-indigo-100",
    specs: { power: "550 HP", acceleration: "0-60 mph: 3.3s", topSpeed: "205 mph" },
  },
];

const Card = ({ title, description, link, src, color, specs }: any) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"], // Wait for next card to enter before fading
  });
  const urlEndpoint = 'https://ik.imagekit.io/81grncrg2';
  // 🎯 Smooth out the progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 15,
    mass: 1,
  });

  // 🌟 Make opacity last longer before fading
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center sticky top-0 px-4"
      style={{ opacity, scale }}
    >
      <div className="relative w-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] rounded-2xl overflow-hidden shadow-xl">
<IKContext urlEndpoint={urlEndpoint}>
        {/* Background Image */}
        <IKImage
          src={link}
          alt={title}
          className="w-full h-[400px] md:h-[00px] lg:h-[600px] object-cover"
        />
        </IKContext>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-16">

          {/* Title */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold pb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Specs Section */}
          <div className="grid grid-cols-3 gap-4 mt-6">

          </div>

          {/* Image Source */}
          <p className="text-gray-400 text-sm mt-4">Image source: {src}</p>
        </div>
      </div>
    </motion.div>
  );

};

const ScrollCards = () => {
  return (
    <main className=" animate-gradient">
      <div className="h-screen flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-serif lg:text-6xl font-bold text-gray-900 text-center px-4">
        Simplicity is the ultimate sophistication.
        </h1>
        <p className="text-gray-600 mt-4 text-center max-w-2xl px-4">
        At Interio.Live, we believe in the beauty of minimalism—where every space tells a story through clean lines, balanced design, and effortless elegance.
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>

      <div className="relative">
        {cars.map((car, i) => (
          <Card key={i} {...car} />
        ))}
      </div>
      <style >{`
        @keyframes gradientBG {
  
  5% { background: linear-gradient(135deg, #d6d6d6, #b0b0b0); }
  10% { background: linear-gradient(135deg, #d6d6d6, #b0b0b0); }
  15% { background: linear-gradient(135deg, #e3e3e3, #c8c8c8); }
  20% { background: linear-gradient(135deg, #e3e3e3, #c8c8c8); }
  
  
}

.animate-gradient {
  animation: gradientBG 8s ease-in-out infinite alternate;
}

      `}</style>
    </main>
  );
};

export default ScrollCards;
