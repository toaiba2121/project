import React from 'react';

import {
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ContactPage: React.FC = () => {
  const mapContainerStyle = {
    height: "100%",
    width: "100%"
  };

  const center = {
    lat: 34.65481078238988,  // Replace with your latitude
    lng: 3.2839290473601794 // Replace with your longitude
  };

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
            Contact Our HPC Team
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our dedicated team of HPC specialists is here to support your research computing needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white ">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Contact form can be added here */}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                You can also reach out to us directly using the contact information below.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Visit Us</h3>
                    <p className="mt-1 text-slate-600">
                      Science Building, Room 3042<br />
                      University Campus<br />
                      123 University Avenue<br />
                      City, State, ZIP
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="mt-1 text-slate-600">
                      General Inquiries: <a href="mailto:hpc@university.edu" className="text-primary-600 hover:text-primary-700">hpc@university.edu</a><br />
                      Technical Support: <a href="mailto:hpc-support@university.edu" className="text-primary-600 hover:text-primary-700">hpc-support@university.edu</a><br />
                      Training: <a href="mailto:hpc-training@university.edu" className="text-primary-600 hover:text-primary-700">hpc-training@university.edu</a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="mt-1 text-slate-600">
                      Main Office: <a href="tel:+12345678900" className="text-primary-600 hover:text-primary-700">+1 (234) 567-8900</a><br />
                      Technical Support: <a href="tel:+12345678901" className="text-primary-600 hover:text-primary-700">+1 (234) 567-8901</a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Hours of Operation</h3>
                    <p className="mt-1 text-slate-600">
                      <strong>Office Hours:</strong><br />
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      <strong>Technical Support:</strong><br />
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-slate-200 rounded-lg h-64">
                <LoadScript googleMapsApiKey="AIzaSyA0HRVouhGyy2rwKH2YbFURQVfM2udTPEc">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-semibold mb-3">How do I request access to HPC resources?</h3>
              <p className="text-slate-600">
                To request access, visit our Resources page and fill out the request form. Our team will review your application and get back to you within 2 business days.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-semibold mb-3">Is there a cost associated with using the HPC facility?</h3>
              <p className="text-slate-600">
                University researchers receive a base allocation at no cost. Additional resources or external collaborations may have associated fees based on usage.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-semibold mb-3">How do I acknowledge the HPC center in my publications?</h3>
              <p className="text-slate-600">
                Please include the following statement: "This research utilized the High-Performance Computing resources at [University Name], funded by [grant number if applicable]."
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-semibold mb-3">What training options are available for new users?</h3>
              <p className="text-slate-600">
                We offer monthly introductory workshops, advanced topic seminars, and one-on-one consultation sessions. Check our Training page for the schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

