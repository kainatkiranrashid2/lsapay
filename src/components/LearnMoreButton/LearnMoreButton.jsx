import PropTypes from "prop-types";
import { motion } from "framer-motion";

const LearnMoreButton = ({ type }) => {
  return (
    <motion.div
      className="inline-flex items-center relative"
      whileHover={{
        scale: 1.2,
        marginRight: "10px",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}>
      <motion.button
        className={`${
          type === "primary" ? "bg-primary" : "bg-black"
        } text-white font-bold py-2 px-4 relative z-20`}>
        Learn More
      </motion.button>
      <div className="absolute left-full ml-[-10px] bg-white p-1 rounded-full border-2 border-dark z-10">
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <img src="src/assets/discoverlsa/arrow_right.svg" alt="Arrow Icon" />
        </div>
      </div>
    </motion.div>
  );
};

export default LearnMoreButton;
LearnMoreButton.propTypes = {
  type: PropTypes.string.isRequired, // Adjust the type and requirement as needed
};
