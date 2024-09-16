import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const Heading = ({ mainText }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2.33 1"],
  });
  return (
    <motion.div
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="container my-10 mt-24  mb-28   mx-auto flex justify-center items-center ">
      <div className="relative inline-block mx-auto">
        <p className="leading-snug  max-w-200 text-2xl md:text-3xl lg:text-5xl text-wrap font-bold font-PP_Mori text-dark text-center">
          {mainText}
        </p>
        <img
          src="src/assets/discoverlsa/scribble.png"
          className="absolute -bottom-[10px] w-15 h-10 -right-[10px] md:-bottom-[15px] md:-right-[10px] md:w-18 md:h-12  lg:-bottom-[35px] lg:-right-[40px] lg:w-20 lg:h-auto  text-dark"
          alt="Scribble"
        />
      </div>
    </motion.div>
  );
};

export default Heading;
Heading.propTypes = {
  mainText: PropTypes.string.isRequired, // Adjust the type and requirement as needed
  // subText: PropTypes.string.isRequired, // Adjust the type and requirement as needed
};
