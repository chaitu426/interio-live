import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const workflowSteps = [
  {
    id: "01",
    
    title: "Initial Meeting",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920",
    description: "Meet with our team to discuss your vision, requirements, and project goals in detail.",
  },
  {
    id: "02",
    
    title: "Creative Process",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1920",
    description: "Our designers create comprehensive plans and mockups tailored to your needs.",
  },
  {
    id: "03",
    
    title: "Implementation",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1920",
    description: "Expert execution of the approved design with attention to every detail.",
  },
  {
    id: "04",
    
    title: "Final Handover",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920",
    description: "Quality assurance and project delivery with comprehensive support.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default  function Howwework() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Customizable according to your needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {workflowSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative h-[400px] group overflow-hidden rounded-xl shadow-lg"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-0 group-hover:translate-y-[-30%]">
                  <div className="flex justify-between items-center mb-4">
                    
                    <span className="text-2xl font-bold">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 inline-flex items-center text-sm font-medium text-white/90 hover:text-white"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              {/* Side Label (visible on hover) */}
              <div className="absolute inset-0 flex-col items-center justify-end hidden gap-12 pb-8 md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

