import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

import { useRef } from "react";
import PropTypes from "prop-types";

// const modes = [
//   {
//     title: "Air",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     image: "src/assets/discoverlsa/mask_air.png",
//   },
//   {
//     title: "Sea",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     image: "src/assets/discoverlsa/mask_sea.svg",
//   },
//   {
//     title: "Land",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     image: "src/assets/discoverlsa/arrow_right.svg",
//   },
// ];

const DiscoverLsaPay = () => {
  return (
    <div className="container mx-auto px-4 lg:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <TransportCard
          title="Title 1"
          image="src/assets/discoverlsa/Manage_transactions.mp4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imageOnRight={false}
        />
        <TransportCard
          title="Title 2"
          image="src/assets/discoverlsa/Reverse.mp4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imageOnRight={true}
        />
        <TransportCard
          title="Title 3"
          image="src/assets/discoverlsa/v2.mp4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          imageOnRight={false}
        />
      </motion.div>
    </div>
  );
};

export default DiscoverLsaPay;
const TransportCard = ({ title, image, description, imageOnRight }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`md:px-10 lg:px-20  mx-auto flex flex-col p-3 ${
        imageOnRight ? "sm:flex-row-reverse" : "sm:flex-row"
      } items-center lg:max-h-[500px] bg-white rounded-lg lg:mb-16 gap-10`}>
      <motion.div
        className="w-full sm:w-1/2 h-auto mx-auto flex justify-center"
        initial={{ x: imageOnRight ? 100 : -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <motion.video
          src={image}
          alt={title}
          className="w-full max-w-[400px] h-auto max-h-[400px] rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          autoPlay
          loop
          muted
        />
        {/* <motion.img
          src={image}
          alt={title}
          className="w-full max-w-[400px] h-auto max-h-[400px] rounded-lg object-cover sm:object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        /> */}
      </motion.div>
      <motion.div
        className="md:px-10 lg:px-20 py-6 sm:w-1/2"
        style={{ y: ySpring }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <motion.span
          className="flex bg-gray-200 mb-2 font-Space_Grotesk font-medium w-fit p-1 px-2 rounded-md max-w-fit"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <img
            className="mr-2"
            src="src/assets/discoverlsa/fire_png.png"
            alt="fire"
          />
          <p className="text-[12px] md:text-sm lg:text-md">LSAPAY HARDWARE</p>
        </motion.span>
        <motion.h1
          className="leading-snug box-border max-w-200 text-2xl md:text-3xl lg:text-5xl text-wrap font-bold font-Inter text-dark text-left md:mb-3 lg:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}>
          {title}
        </motion.h1>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}>
          {description}
        </motion.p>
        {/* <LearnMoreButton type="primary" /> */}
      </motion.div>
    </motion.div>
  );
};

TransportCard.propTypes = {
  title: PropTypes.string.isRequired, // Adjust the type and requirement as needed
  image: PropTypes.string.isRequired, // Adjust the type and requirement as needed
  description: PropTypes.string.isRequired, // Adjust the type and requirement as needed
  imageOnRight: PropTypes.bool.isRequired, // Adjust the type and requirement as needed
};
