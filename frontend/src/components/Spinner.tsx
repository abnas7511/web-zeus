import { motion } from "framer-motion";

// You can place this inside your Contact component or in a separate file
const Spinner = () => (
  <div className="flex justify-center items-center py-10">
    <motion.div
      className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      }}
    />
  </div>
);

export default Spinner;