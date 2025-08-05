import React from 'react';
import { motion } from 'framer-motion';
import RobotCard from '../components/RobotCard';
import { robots } from '../data/robots';

const Robots: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our Robot Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover our advanced autonomous robots designed specifically for 
            healthcare environments, each engineered to solve unique logistical challenges.
          </motion.p>
        </div>
      </section>

      {/* Robots Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Generation
            </h2>
            <p className="text-lg text-gray-600">
              Our flagship robots are already transforming healthcare operations worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {robots.map((robot, index) => (
              <RobotCard key={robot.id} robot={robot} delay={index * 0.1} />
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Next Generation Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We're continuously innovating and developing new robotic solutions 
              to address evolving healthcare needs. Stay tuned for exciting announcements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ZEUS-2</h3>
                <p className="text-gray-600">Advanced surgical supply robot with enhanced precision handling</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Q3 2025</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ZEUS Lab-1</h3>
                <p className="text-gray-600">Specialized laboratory sample transport and processing unit</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Q4 2025</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-300"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ZEUS Clean-1</h3>
                <p className="text-gray-600">Autonomous disinfection and cleaning robot for sterile environments</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Q1 2026</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Robots;