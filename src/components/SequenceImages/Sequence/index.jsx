import { forwardRef } from "react";
import { Skeleton } from "../Skeleton";
import ImageArray from "./ImageArray";
import PropTypes from "prop-types";

const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = ImageArray();

  let index = Math.round(progress * (newImages.length - 1));

  if (newImages[index] && newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return <></>;
    } else {
      const currentImage = newImages[index][0];
      return (
        <div
          ref={ref}
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `url('${currentImage ? currentImage.src : null}')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingBottom: "0",
          }}
        />
      );
    }
  }

  // Return null if there's no image at the current index
  return null;
});

ImageSequence.displayName = "ImageSequence";

export default ImageSequence;

ImageSequence.propTypes = {
  progress: PropTypes.number.isRequired,
};
