import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const SequenceImages = () => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const containerRef = useRef(null);
  const sequenceRef = useRef(null);
  const lenisRef = useRef(null);
  const totalFrames = 778;

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const sequence = sequenceRef.current;

    const handleScroll = ({ scroll }) => {
      if (!container || !sequence) return;

      const containerTop =
        container.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;
      const sequenceHeight = 500; // Fixed sequence height (can be adjusted)
      const pinDuration = sequenceHeight * 2; // Control how long the sequence stays pinned

      if (scroll >= containerTop && scroll <= containerTop + pinDuration) {
        // Calculate progress within the sequence
        const scrollProgress = (scroll - containerTop) / pinDuration;
        const frameIndex = Math.min(
          totalFrames,
          Math.ceil(scrollProgress * totalFrames)
        );
        setCurrentFrame(frameIndex);

        // Pin the sequence in place
        sequence.style.position = "fixed";
        sequence.style.top = "0";
        sequence.style.left = "0";
        sequence.style.right = "0";
        sequence.style.zIndex = 10;
        sequence.style.height = "500px"; // Keep the sequence height fixed
      } else if (scroll > containerTop + pinDuration) {
        // Unpin after finishing the sequence
        sequence.style.position = "relative";
        sequence.style.top = `${pinDuration}px`;
        sequence.style.zIndex = 1;
      } else {
        // Before starting the sequence, keep it relative
        sequence.style.position = "relative";
        sequence.style.top = "0";
        sequence.style.zIndex = 1;
      }
    };

    lenisRef.current.on("scroll", handleScroll);

    return () => {
      lenisRef.current.off("scroll", handleScroll);
    };
  }, []);

  const getImagePath = (frame) => {
    const paddedFrame = frame.toString().padStart(4, "0");
    return `/src/assets/images/${paddedFrame}.png`; // Adjust the path if necessary
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh", // Container takes up full viewport height
        position: "relative", // Make sure it is positioned relative to other content
      }}>
      <div
        ref={sequenceRef}
        className="container max-w-4xl mx-auto flex justify-center items-center"
        style={{
          height: "500px", // Fixed height for the image sequence
        }}>
        <img
          src={getImagePath(currentFrame)}
          alt={`Frame ${currentFrame}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SequenceImages;
