import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const OurClientsNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const logos = [
    "src/assets/prev/1.png",
    "src/assets/prev/2.png",
    "src/assets/prev/3.png",
    "src/assets/prev/4.png",
    "src/assets/prev/5.png",
    "src/assets/prev/6.png",
    "src/assets/prev/7.png",
    "src/assets/prev/8.png",
    "src/assets/prev/9.png",
    "src/assets/prev/10.png",
    "src/assets/prev/11.png",
    "src/assets/prev/12.png",
    "src/assets/prev/13.png",
    "src/assets/prev/14.png",
    "src/assets/prev/15.png",
    "src/assets/prev/16.png",
    "src/assets/prev/17.png",
    "src/assets/prev/18.png",
    "src/assets/prev/19.png",
    "src/assets/prev/20.png",
    "src/assets/prev/20-1.png",
    "src/assets/prev/21.png",
    "src/assets/prev/21-1.png",
    "src/assets/prev/22.png",
    "src/assets/prev/22-1.png",
    "src/assets/prev/23.png",
  ];

  const visibleLogos = 6;

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  const nextSlide = useCallback(() => {
    if (!isPaused) {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }
  }, [logos.length, isPaused]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + logos.length) % logos.length
    );
    setIsPaused(true);

    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set a new timer to unpause after 2 seconds
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  useEffect(() => {
    const autoPlayTimer = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(autoPlayTimer);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [nextSlide]);

  const getVisibleLogos = () => {
    const visibleLogosArray = [];
    for (let i = 0; i < visibleLogos; i++) {
      const index = (currentIndex + i + logos.length) % logos.length;
      visibleLogosArray.push(logos[index]);
    }
    return visibleLogosArray;
  };

  return (
    <div className="relative isolate  bg-white py-10 w-full h-16 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex"
          custom={direction}
          variants={{
            enter: (direction) => ({ x: direction > 0 ? "16.67%" : "-16.67%" }),
            center: { x: 0 },
            exit: (direction) => ({ x: direction > 0 ? "-16.67%" : "16.67%" }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: "easeInOut" }}>
          {getVisibleLogos().map((logo, index) => (
            <motion.div
              key={index}
              className="w-1/5 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-42 h-8 object-fit"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="absolute left-0 top-1/2 h-full w-16">
        <button
          onClick={prevSlide}
          className=" transform -translate-y-1/2 flex bg-white justify-center h-20 items-center p-5 z-10">
          <FaArrowLeft size={32} className="text-gray-300" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 h-full w-16">
        <button
          onClick={nextSlide}
          className="transform -translate-y-1/2  bg-white flex justify-center h-20 items-center p-5 z-10">
          <FaArrowRight size={32} className="text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default OurClientsNew;
