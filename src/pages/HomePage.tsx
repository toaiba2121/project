
import { 
  Server, 
  Cpu, 
  Database, 
  Shield, 
  GraduationCap, 
  Users, 
  BarChart3, 
 
} from 'lucide-react';


import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import ResearchProjectCard from '../components/ResearchProjectCard';

const HomePage = () => {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Computing Services" 
            subtitle="Explore our comprehensive suite of high-performance computing services designed to accelerate research and innovation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Server size={24} />}
              title="HPC Clusters"
              description="Access our powerful computing clusters with thousands of CPU cores for your most demanding computational tasks."
              link="/services#clusters"
              delay={0.1}
            />
            
            <ServiceCard 
              icon={<Cpu size={24} />}
              title="GPU Computing"
              description="Leverage our GPU-accelerated systems for machine learning, AI, and other parallelizable workloads."
              link="/services#gpu"
              delay={0.2}
            />
            
            <ServiceCard 
              icon={<Database size={24} />}
              title="Storage Solutions"
              description="Store and manage massive datasets with our high-performance, reliable storage systems."
              link="/services#storage"
              delay={0.3}
            />
            
            <ServiceCard 
              icon={<Shield size={24} />}
              title="Secure Research Environment"
              description="Work with sensitive data in our secure, compliant computing environment for regulated research."
              link="/services#secure"
              delay={0.4}
            />
            
            <ServiceCard 
              icon={<GraduationCap size={24} />}
              title="Training & Consultation"
              description="Get expert guidance and training on optimizing your research workflows for high-performance computing."
              link="/services#training"
              delay={0.5}
            />
            
            <ServiceCard 
              icon={<Users size={24} />}
              title="Collaboration Tools"
              description="Collaborate effectively with tools designed for research teams working on complex computational problems."
              link="/services#collaboration"
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionTitle 
            title="HPC by the Numbers" 
            subtitle="Our high-performance computing infrastructure provides the computational power researchers need to tackle the most challenging problems."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              icon={<Cpu size={24} />}
              value="100+ PFLOPS"
              label="Computing Power"
              delay={0.1}
            />
            
            <StatCard 
              icon={<Server size={24} />}
              value="10,000+"
              label="CPU Cores"
              delay={0.2}
            />
            
            <StatCard 
              icon={<Database size={24} />}
              value="5 PB"
              label="Storage Capacity"
              delay={0.3}
            />
            
            <StatCard 
              icon={<BarChart3 size={24} />}
              value="300+"
              label="Research Projects"
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Research Showcase */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Research Showcase" 
            subtitle="Discover groundbreaking research made possible by our high-performance computing resources."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchProjectCard 
              title="Climate Modeling for Sustainable Futures"
              description="Advanced climate simulations to predict environmental changes and guide sustainable policy decisions."
              image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              department="Environmental Sciences"
              delay={0.1}
            />
            
            <ResearchProjectCard 
              title="Protein Folding for Drug Discovery"
              description="Computational analysis of protein structures to accelerate the development of new therapeutic compounds."
              image="https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              department="Molecular Biology"
              delay={0.2}
            />
            
            <ResearchProjectCard 
              title="AI-Driven Quantum Materials Design"
              description="Using machine learning to predict and design novel quantum materials with revolutionary properties."
              image="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              department="Physics & Materials Science"
              delay={0.3}
            />
          </div>
       
        </div>
      </section>
      
     
    </>
  );
};

export default HomePage;