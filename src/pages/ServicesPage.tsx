
import { 
  Server, 
  Cpu, 
  Database, 
  Shield, 
  GraduationCap, 
  Users,
  RefreshCw,
  TrendingUp,
  Cloud,
  Code,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

import SectionTitle from '../components/SectionTitle';

const ServicesPage = () => {
  const services = [
    {
      id: 'clusters',
      icon: <Server className="h-12 w-12" />,
      title: 'HPC Clusters',
      description: 'Our high-performance computing clusters provide the computational power needed for the most demanding research applications across scientific disciplines.',
      features: [
        'Multiple cluster configurations optimized for different workloads',
        'Low-latency, high-bandwidth interconnects',
        'Latest generation processors with high core counts',
        'Optimized software environment with hundreds of pre-installed applications',
        'Job scheduling and resource management system',
      ]
    },
    {
      id: 'gpu',
      icon: <Cpu className="h-12 w-12" />,
      title: 'GPU Computing',
      description: 'Accelerate your research with our GPU-enabled systems, perfect for machine learning, AI, molecular dynamics, and other parallel computing applications.',
      features: [
        'Latest NVIDIA and AMD GPUs available',
        'Systems optimized for deep learning frameworks',
        'Pre-configured containers for AI and machine learning',
        'Support for CUDA, ROCm, and OpenCL programming models',
        'Specialized support for GPU code optimization',
      ]
    },
    {
      id: 'storage',
      icon: <Database className="h-12 w-12" />,
      title: 'Data Storage Solutions',
      description: 'Our comprehensive data storage ecosystem supports the entire research lifecycle, from active computation to long-term archival.',
      features: [
        'High-performance parallel file systems',
        'Project, scratch, and archive storage tiers',
        'Data backup and replication services',
        'Secure data transfer tools',
        'Data management consultation',
      ]
    },
    {
      id: 'secure',
      icon: <Shield className="h-12 w-12" />,
      title: 'Secure Computing Environment',
      description: 'Work with sensitive and regulated data using our secure computing environment that meets compliance requirements while maintaining performance.',
      features: [
        'HIPAA and GDPR compliant infrastructure',
        'Secure data enclaves for protected data',
        'Controlled access mechanisms',
        'Auditing and monitoring capabilities',
        'Data encryption at rest and in transit',
      ]
    },
    {
      id: 'training',
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'Training & Consultation',
      description: 'Enhance your HPC skills and optimize your research workflows with expert guidance from our team of computational scientists.',
      features: [
        'Regular workshops and training sessions',
        'One-on-one consultation for code optimization',
        'Custom training for research groups',
        'Online learning resources and documentation',
        'Performance analysis and optimization services',
      ]
    },
    {
      id: 'collaboration',
      icon: <Users className="h-12 w-12" />,
      title: 'Collaboration Tools',
      description: 'Facilitate teamwork and knowledge sharing with our suite of collaboration tools designed for research computing.',
      features: [
        'Version control systems for code and documents',
        'Shared project spaces and workspaces',
        'Visualization tools for remote collaboration',
        'Scientific workflow management tools',
        'Research output sharing capabilities',
      ]
    },
  ];

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
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              High-Performance Computing Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Enabling breakthrough research with advanced computing resources, expertise, and infrastructure.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Computing Services" 
            subtitle="We provide a comprehensive suite of high-performance computing resources to support advanced research and innovation across all scientific disciplines."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                <RefreshCw size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
              <p className="text-slate-600">
                Regular hardware and software updates to keep our infrastructure at the cutting edge of technology.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Resources</h3>
              <p className="text-slate-600">
                Scale your computing resources up or down based on your research needs and timelines.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hybrid Architecture</h3>
              <p className="text-slate-600">
                Seamlessly integrate on-premise HPC resources with cloud-based computing when needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-800 to-primary-900 p-8 aspect-[4/3] flex items-center justify-center">
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
                  <div className="text-white opacity-80">
                    {/* Service-specific illustration */}
                    {service.id === 'clusters' && (
                      <div className="grid grid-cols-3 gap-4">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                            <Server size={24} className="text-primary-300" />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {service.id === 'gpu' && (
                      <div className="grid grid-cols-2 gap-6 w-full">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="aspect-[4/3] bg-white/10 rounded-lg flex items-center justify-center p-4">
                            <Cpu size={32} className="text-primary-300" />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {service.id === 'storage' && (
                      <div className="grid grid-cols-1 gap-4 w-full">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={i} className="bg-white/10 rounded-lg flex items-center p-4">
                            <Database size={24} className="text-primary-300 mr-4" />
                            <div className="h-3 bg-primary-400/30 rounded-full flex-grow">
                              <div 
                                className="h-3 bg-primary-400 rounded-full" 
                                style={{ width: `${70 - i * 20}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {service.id === 'secure' && (
                      <div className="relative w-48 h-48 mx-auto">
                        <div className="absolute inset-0 border-4 border-primary-400/30 rounded-full flex items-center justify-center">
                          <div className="absolute inset-4 border-4 border-primary-400/50 rounded-full flex items-center justify-center">
                            <div className="absolute inset-8 border-4 border-primary-400/70 rounded-full flex items-center justify-center">
                              <Shield size={40} className="text-primary-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {service.id === 'training' && (
                      <div className="grid grid-cols-2 gap-6 w-full">
                        <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                          <GraduationCap size={32} className="text-primary-300 mb-2" />
                          <div className="h-2 bg-white/20 rounded-full w-full mt-2"></div>
                          <div className="h-2 bg-white/20 rounded-full w-3/4 mt-2"></div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                          <FileText size={32} className="text-primary-300 mb-2" />
                          <div className="h-2 bg-white/20 rounded-full w-full mt-2"></div>
                          <div className="h-2 bg-white/20 rounded-full w-3/4 mt-2"></div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                          <Code size={32} className="text-primary-300 mb-2" />
                          <div className="h-2 bg-white/20 rounded-full w-full mt-2"></div>
                          <div className="h-2 bg-white/20 rounded-full w-3/4 mt-2"></div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                          <TrendingUp size={32} className="text-primary-300 mb-2" />
                          <div className="h-2 bg-white/20 rounded-full w-full mt-2"></div>
                          <div className="h-2 bg-white/20 rounded-full w-3/4 mt-2"></div>
                        </div>
                      </div>
                    )}
                    
                    {service.id === 'collaboration' && (
                      <div className="relative w-48 h-48 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-24 w-24 bg-white/10 rounded-full flex items-center justify-center">
                            <Users size={32} className="text-primary-300" />
                          </div>
                          {Array.from({ length: 5 }).map((_, i) => {
                            const angle = (i * 72) * (Math.PI / 180);
                            const x = 60 * Math.cos(angle);
                            const y = 60 * Math.sin(angle);
                            return (
                              <div 
                                key={i}
                                className="absolute h-12 w-12 bg-white/10 rounded-full flex items-center justify-center"
                                style={{ 
                                  transform: `translate(${x}px, ${y}px)`,
                                }}
                              >
                                <div className="h-3 w-3 bg-primary-400 rounded-full"></div>
                              </div>
                            );
                          })}
                          {Array.from({ length: 5 }).map((_, i) => {
                            const angle = (i * 72) * (Math.PI / 180);
                            const x1 = 30 * Math.cos(angle);
                            const y1 = 30 * Math.sin(angle);
                           
                            return (
                              <div 
                                key={`line-${i}`}
                                className="absolute h-0.5 bg-primary-500/30"
                                style={{ 
                                  width: '30px',
                                  transform: `translate(${x1}px, ${y1}px) rotate(${angle * (180/Math.PI)}deg)`,
                                  transformOrigin: '0 0'
                                }}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
     
    </>
  );
};

export default ServicesPage;