import React from 'react';
import { motion } from 'framer-motion';

interface ResearchProjectCardProps {
  title: string;
  description: string;
  image: string;
  department: string;
  delay?: number;
}

const ResearchProjectCard: React.FC<ResearchProjectCardProps> = ({
  title,
  description,
  image,
  department,
  delay = 0
}) => {
  return (
    <motion.div 
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider bg-primary-100 text-primary-800 px-2 py-1 rounded">
            {department}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-primary-600">
          {title}
        </h3>
        
        <p className="text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ResearchProjectCard;