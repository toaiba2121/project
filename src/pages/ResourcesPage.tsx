import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

import SectionTitle from '../components/SectionTitle';

const ResourcesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 text-white py-20">
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

        <div className="container-custom">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Request Computing Resources
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Apply for access to our high-performance computing infrastructure to accelerate your research.
          </motion.p>
        </div>
      </section>
      
      {/* Resource Request Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Resource Request Process" 
            subtitle="Follow these steps to request access to our high-performance computing resources."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <FileText className="h-6 w-6" />,
                title: "1. Submit Application",
                description: "Complete the resource request form with details about your research project and computational requirements."
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "2. Review Process",
                description: "Our committee reviews applications to determine resource allocation based on scientific merit and technical feasibility."
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "3. Account Setup",
                description: "Upon approval, we'll set up your account and provide access credentials and onboarding information."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-slate-600 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/research">
              <button className="btn btn-outline">
              Request Computing Resources
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
