// In src/components/SequenceImages/Sequence/images.js

const imageModules = import.meta.glob("../../../assets/images/*.png", {
  eager: true,
});

// Convert the modules object to an array and sort it
const sortedImages = Object.entries(imageModules).sort(([pathA], [pathB]) => {
  const numA = parseInt(pathA.split("/").pop().split(".")[0]);
  const numB = parseInt(pathB.split("/").pop().split(".")[0]);
  return numA - numB;
});

// Create named exports for each image
const namedExports = {};
sortedImages.forEach(([path, module], index) => {
  const varName = `A${index}`;
  namedExports[varName] = module.default;
});

// Export the Globe array
export const Globe = sortedImages.map(([, module]) => module.default);
