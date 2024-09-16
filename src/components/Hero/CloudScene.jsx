// CloudScene.js
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Cloud1, Cloud2 } from "./Clouds";

const cloudVariants = {
  animate: {
    x: [0, 30, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const CloudScene = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="relative w-full h-32"
        variants={cloudVariants}
        animate="animate">
        <Cloud1 className="absolute top-10   w-full h-20" />
        {/* <Cloud2 className="absolute -top-10  right-[35%] w-full h-full" /> */}
      </motion.div>
    </div>
  );
};

CloudScene.propTypes = {
  className: PropTypes.string,
};

export default CloudScene;
