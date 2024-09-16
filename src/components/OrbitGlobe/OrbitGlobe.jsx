import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

const floatingImages = [
  { src: "src/assets/GlobeComponent/visa.png", position: 1 },
  { src: "src/assets/GlobeComponent/mastercard.png", position: 2 },
  { src: "src/assets/GlobeComponent/americanexp.png", position: 3 },
  { src: "src/assets/GlobeComponent/visa.png", position: 4 },
  { src: "src/assets/GlobeComponent/visa.png", position: 5 },
  { src: "src/assets/GlobeComponent/visa.png", position: 6 },
  { src: "src/assets/GlobeComponent/visa.png", position: 7 },
  { src: "src/assets/GlobeComponent/visa.png", position: 8 },
  { src: "src/assets/GlobeComponent/visa.png", position: 9 },
  { src: "src/assets/GlobeComponent/visa.png", position: 10 },
  { src: "src/assets/GlobeComponent/visa.png", position: 11 },
];

const globeSizes = {
  xs: 200,
  sm: 300,
  md: 400,
  lg: 500,
  xl: 550,
  "2xl": 600,
};

// const globeSizes = {
//   xs: 150,
//   sm: 225,
//   md: 300,
//   lg: 375,
//   xl: 450,
//   "2xl": 480,
// };
const OrbitGlobe = () => {
  const [positions, setPositions] = useState([]);
  const [screenSize, setScreenSize] = useState("xs");

  const getTailwindScreenSize = () => {
    const width = window.innerWidth;
    if (width >= 1536) return "2xl";
    if (width >= 1280) return "xl";
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    if (width >= 640) return "sm";
    return "xs";
  };
  const getPosition = (position, globeSize) => {
    const totalImages = floatingImages.length;
    const angle = ((position - 1) * (360 / totalImages) * Math.PI) / 180;
    const radius = globeSize / 2 + 80; // Increased from 40 to 80

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
    };
  };

  // const getPosition = (position, globeSize) => {
  //   const totalImages = floatingImages.length;
  //   const angle = ((position - 1) * (360 / totalImages) * Math.PI) / 180;
  //   const radius = globeSize / 2 + 40; // Adjust this value to change the distance from the globe

  //   const x = radius * Math.cos(angle);
  //   const y = radius * Math.sin(angle);

  //   return {
  //     left: `calc(50% + ${x}px)`,
  //     top: `calc(50% + ${y}px)`,
  //   };
  // };

  const updatePositions = () => {
    const newScreenSize = getTailwindScreenSize();
    setScreenSize(newScreenSize);
    const globeSize = globeSizes[newScreenSize];
    const calculatedPositions = floatingImages.map((image) =>
      getPosition(image.position, globeSize)
    );
    setPositions(calculatedPositions);
  };

  // const globeVariants = {
  //   rotate: {
  //     rotate: 360,
  //     transition: {
  //       duration: 60,
  //       repeat: Infinity,
  //       ease: "linear",
  //     },
  //   },
  // };

  // const floatingImageVariants = {
  //   hover: {
  //     scale: 1.1,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    // <div className="flex justify-center items-center h-screen">
    //   <div
    //     className="relative"
    //     style={{
    //       height: `${globeSizes[screenSize] + 100}px`,
    //       width: `${globeSizes[screenSize] + 100}px`,
    //     }}>
    //     <motion.div
    //       className="absolute inset-0 m-auto"
    //       style={{
    //         width: `${globeSizes[screenSize]}px`,
    //         height: `${globeSizes[screenSize]}px`,
    //       }}
    //       variants={globeVariants}
    //       animate="rotate">
    //       <img
    //         src="src/assets/GlobeComponent/globe_idle.png"
    //         alt="Earth globe"
    //         className="w-full h-full object-contain"
    //       />
    //     </motion.div>
    //     {positions.map((position, index) => (
    //       <motion.div
    //         key={index}
    //         className="absolute w-18 h-18 p-2 flex justify-center items-center rounded-full bg-[#EDEDED] bg-no-repeat"
    //         style={{
    //           left: position.left,
    //           top: position.top,
    //           transform: "translate(-50%, -50%)",
    //         }}
    //         // initial={{ opacity: 0, scale: 0 }}
    //         // animate={{ opacity: 1, scale: 1 }}
    //         // transition={{ duration: 0.5, delay: index * 0.1 }}
    //         whileHover="hover"
    //         variants={floatingImageVariants}>
    //         <img
    //           className="max-w-7 max-h-7 sm:max-w-10 sm:max-h-10 lg:max-w-full lg:max-h-full"
    //           src={floatingImages[index].src}
    //           alt=""
    //         />
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>

    <div className="container mx-auto mt-20 mb-4">
      <div
        className="relative flex justify-center items-center"
        style={{ height: `${globeSizes[screenSize] + 100}px` }}>
        <div
          className={`w-[${globeSizes[screenSize]}px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
          <img
            src="src/assets/GlobeComponent/globe_idle.png"
            alt="Earth globe"
            className="w-full h-auto"
          />
        </div>
        {positions.map((position, index) => (
          <div
            key={index}
            className="absolute w-18 h-18 p-2 flex justify-center items-center rounded-full bg-[#EDEDED] bg-no-repeat -translate-x-1/2 -translate-y-1/2"
            style={{
              left: position.left,
              top: position.top,
            }}>
            <img
              className="max-w-7 max-h-7 sm:max-w-10 sm:max-h-10 lg:max-w-full lg:max-h-full"
              src={floatingImages[index].src}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitGlobe;
