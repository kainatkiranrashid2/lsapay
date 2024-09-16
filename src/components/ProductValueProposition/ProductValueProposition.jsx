import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ProductValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}>
        <div className="flex flex-col md:flex-row">
          {/* Empty div to take up half the space */}
          <div className="md:w-1/2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-dark font-Inter font-bold mb-4">
              Building products for leading brands
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-sm sm: text-md md:text-lg font-Space_Grotesk text-dark2 mb-6">
              Join the 10,000+ brands around the world using our self-serve
              product analytics to help you convert, engage, and retain more
              users.
            </motion.p>
          </div>

          {/* Content div taking up the other half */}
          <div className="md:w-1/2">
            {/* You can add a CTA button here if needed */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductValueProposition;
