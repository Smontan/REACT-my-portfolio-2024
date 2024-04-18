import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default MotionWrapper;
