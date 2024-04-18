import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto"
    >
      <Hero />
    </motion.section>
  );
};
export default Home;
