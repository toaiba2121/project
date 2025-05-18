import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hpc1 from '../../assets/hpc1.jpg';


const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 text-white py-1 ">
     {/* Animated Background Grid */}
<div className="absolute inset-0 opacity-20">
  <div className="grid grid-cols-12 grid-rows-6 h-full">
    {Array.from({ length: 72 }).map((_, i) => (
      <motion.div
        key={i}
        className="border border-primary-600"
        animate={{
          opacity: [0.9, 0.9, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>
</div>

{/* Data Flow Animation */}
<div className="absolute inset-0 opacity-10 overflow-hidden">
  {Array.from({ length: 10 }).map((_, i) => (
    <motion.div
      key={`data-stream-${i}`}
      className="absolute w-2 h-20 bg-blue-600"
      style={{
        left: `${Math.random() * 100}%`,
        top: -80,
        opacity: 0.8 + Math.random() * 0.2
      }}
      animate={{
        y: ['0vh', '100vh']
      }}
      transition={{
        duration: 3 + Math.random() * 7,
        repeat: Infinity,
        delay: Math.random() * 5
      }}
    />
  ))}
</div>

      <div className="container-custom relative z-10 py-20 md:py-32 flex justify-between">
  <div className="max-w-3xl">
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Powering Scientific Discovery Through Advanced Computing
    </motion.h1>
    
    <motion.p 
      className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Access world-class high-performance computing resources to accelerate your research and innovation
    </motion.p>
    
    <motion.div 
      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <Link to="/resources">
        <button className="btn bg-white text-primary-900 hover:bg-blue-50">
          Request Computing Resources
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </Link>
      <Link to="/services">
        <button className="btn border-2 border-white text-white hover:bg-white/10">
          Explore Our Capabilities
        </button>
      </Link>
    </motion.div>
  </div>
  <div className="hidden md:block">
    <img src={hpc1} alt="Image" className="w-full h-full rounded-sm " />
  </div>
</div>
    </section>
  );
};

export default Hero;