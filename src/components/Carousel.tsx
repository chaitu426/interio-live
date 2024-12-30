import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import "../index.css";

const slides = [
  {
    url: './images/degine2.webp',
    title: 'Modern Living Room',
    description: 'A beautifully designed modern living room with elegant furniture.',
  },
  {
    url: './images/degine1.webp',
    title: 'Luxury Kitchen',
    description: 'A luxurious kitchen with high-end appliances and decor.',
  },
  {
    url: './images/degine3.webp',
    title: 'Cozy Bedroom',
    description: 'A cozy and comfortable bedroom perfect for relaxation.',
  },
];

export default function ModernCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Title and Description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          {slides[currentIndex].title}
        </h2>
        <p className="text-lg md:text-2xl font-light animate-fade-in-up">
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full shadow-md hover:bg-black/70 transition duration-300"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full shadow-md hover:bg-black/70 transition duration-300"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index
                ? 'bg-white scale-150 shadow-lg'
                : 'bg-gray-400 scale-100'
            } transition-all duration-500`}
          />
        ))}
      </div>
    </div>
  );
}
