import { motion, useScroll, useTransform } from "framer-motion";
import LearnMoreButton from "../LearnMoreButton/LearnMoreButton";

const BusinessApproach = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const yTransform = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <motion.div
      className="container flex flex-col md:flex-row gap-6 mb-4"
      style={{ opacity, y: yTransform }}>
      <div className="w-full ">
        <motion.h1
          className="text-left leading-snug box-border max-w-200 text-2xl md:text-3xl lg:text-5xl text-wrap font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Our Approach to Business
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}>
          <LearnMoreButton type="secondary" />
        </motion.div>
      </div>
      <div className="w-full ">
        <motion.p
          className="text-dark font-medium text-[10px] md:text-[15px] 2xl[18px] text-left font-Inter mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          Our solutions have transformed retail operations, offering tools that
          boost sales and elevate customer service worldwide. Learn how our
          innovative strategies have significantly increased ancillary revenue
          for clients such as Company 1 and Company 2
        </motion.p>
        <motion.div
          className="flex justify-between align-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}>
          {["acme", "quantum", "echo"].map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}>
              <img
                src={`src/assets/discoverlsa/${company}.png`}
                alt={`${company} logo`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BusinessApproach;
