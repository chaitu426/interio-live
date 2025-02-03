import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../index.css";

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
    title: 'Modern Living Room',
    description: 'A beautifully designed modern living room with elegant furniture.',
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2000',
    title: 'Luxury Kitchen',
    description: 'A luxurious kitchen with high-end appliances and decor.',
  },
  {
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000',
    title: 'Cozy Bedroom',
    description: 'A cozy and comfortable bedroom perfect for relaxation.',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

function ModernCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        paginate(1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, page]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <div
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          {/* Content */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-extrabold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {slides[slideIndex].title}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-2xl font-light max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {slides[slideIndex].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-white/40 transition-colors duration-300 md:p-4"
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-white/40 transition-colors duration-300 md:p-4"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setPage([index, index - slideIndex])}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="group relative"
          >
            <motion.div
              animate={{
                scale: slideIndex === index ? 1 : 0.6,
                opacity: slideIndex === index ? 1 : 0.5,
              }}
              className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white"
            />
            <motion.div
              initial={false}
              animate={{
                scale: slideIndex === index ? 1.4 : 0,
                opacity: slideIndex === index ? 0.3 : 0,
              }}
              className="absolute inset-0 -m-1 rounded-full bg-white"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default ModernCarousel;