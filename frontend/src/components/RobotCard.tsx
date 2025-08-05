import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Robot } from '../data/robots';

interface RobotCardProps {
  robot: Robot;
  delay?: number;
}

const RobotCard: React.FC<RobotCardProps> = ({ robot, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-center items-center py-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <img
          src={robot.image}
          alt={robot.name}
          className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-xl shadow hover:scale-105 transition-transform duration-300 bg-white/80"
          style={{ background: 'transparent' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{robot.name}</h3>
        <p className="text-gray-600 mb-4">{robot.shortDescription}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {robot.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
            {robot.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{robot.features.length - 3} more
              </span>
            )}
          </div>
        </div>
        <Link
          to={`/robots/${robot.slug}`}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default RobotCard;