import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StaggeredText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const points = [
    "Transaction speed matters",
    "Scalability to exceptionally high transaction volumes is needed",
    "Connectivity is not guaranteed",
    "Operate Outside of four walls",
  ];

  useEffect(() => {
    let timer;
    if (isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, points[currentIndex].length * 50 + 500);
    } else {
      timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % points.length);
        setIsAnimating(true);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isAnimating, points]);

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-20">
        <div className="w-full max-w-2xl">
          {" "}
          {/* Fixed width container */}
          <p className="text-left leading-tight			 text-[34px] font-semibold font-Inter text-2xl mb-8 text-black">
            Never miss a sale by using Acceptify, the platform built for the
            most challenging mobile environments where{" "}
            <span className="inline w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="inline text-2xl 	 font-semibold text-[34px] text-black">
                  {points[currentIndex].split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} style={{ display: "inline-block" }}>
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={sentenceVariants}
                          custom={charIndex + wordIndex * 10}>
                          {char}
                        </motion.span>
                      ))}
                      {wordIndex !==
                        points[currentIndex].split(" ").length - 1 && "\u00A0"}
                    </span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaggeredText;
