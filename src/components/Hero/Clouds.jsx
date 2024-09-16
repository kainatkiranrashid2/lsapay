import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const cloudVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  float: {
    y: [0, -10, 0],
    x: [0, 5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const CloudSvg = ({ className = "", children }) => (
  <motion.svg
    viewBox="0 0 200 100"
    className={`w-full h-full ${className}`}
    variants={cloudVariants}
    initial="hidden"
    animate={["visible", "float"]}>
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" />
      </filter>
    </defs>
    {children}
  </motion.svg>
);

const Cloud1 = ({ className = "" }) => (
  <CloudSvg className={className}>
    <path
      d="M30 60 Q40 40 60 50 Q80 35 100 50 Q120 35 140 50 Q160 40 170 60 Q185 65 190 75 Q175 90 150 85 Q140 95 120 90 Q100 100 80 90 Q60 95 40 85 Q20 90 10 75 Q15 65 30 60Z"
      fill="#f6f6f6"
      filter="url(#shadow)"
    />
  </CloudSvg>
);

const Cloud2 = ({ className = "" }) => (
  <CloudSvg className={className}>
    <path
      d="M10 70 Q30 50 50 60 Q70 45 90 60 Q110 45 130 60 Q150 50 170 70 Q190 75 190 85 Q170 100 130 95 Q110 105 90 100 Q70 105 50 95 Q30 100 10 85 Q10 75 10 70Z"
      fill="#f6f6f6"
      filter="url(#shadow)"
    />
  </CloudSvg>
);

export { Cloud1, Cloud2 };

[Cloud1, Cloud2].forEach((Component) => {
  Component.propTypes = {
    className: PropTypes.string,
  };
});
