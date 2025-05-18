import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="bg-primary-50 text-primary-600 p-3 rounded-lg inline-block mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <p className="text-slate-600 mb-6 flex-grow">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors group-hover:underline"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;