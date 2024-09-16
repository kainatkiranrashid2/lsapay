import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StaggeredTextTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const points = [
    "Transaction speed matters",
    "Scalability to exceptionally high transaction volumes is needed   ",
    "Connectivity is not guaranteed",
    "Operate Outside of four walls",
  ];

  useEffect(() => {
    let timer;
    if (isTyping) {
      if (displayText.length < points[currentIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(points[currentIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        setIsPaused(true);
        timer = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, 4000); // 1-second pause
      }
    } else if (!isPaused) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % points.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [currentIndex, displayText, isTyping, isPaused, points]);

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-20">
        <div className="w-full max-w-2xl">
          <p className="text-left leading-tight text-[34px] font-semibold font-Inter text-2xl mb-8 text-black">
            Never miss a sale by using Acceptify, the platform built for the
            most challenging mobile environments where{" "}
            <span className="inline w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial="hidden"
                  animate="visible"
                  className="inline text-2xl font-semibold text-[34px] text-black">
                  {displayText.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} style={{ display: "inline-block" }}>
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={sentenceVariants}
                          custom={charIndex + wordIndex * 10}>
                          {char}
                        </motion.span>
                      ))}
                      {wordIndex !== displayText.split(" ").length - 1 &&
                        "\u00A0"}
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

export default StaggeredTextTwo;
