import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import errorSound from "../assets/sfx/error.mp3";
import successSound from "../assets/sfx/success.mp3";

function Shell({ shuffle, isShuffling, hasItem }) {
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  console.log(isHovering);

  const [playError, { stopError }] = useSound(errorSound, {
    volume: 0.35,
  });
  const [playSuccess, { stopSuccess }] = useSound(successSound, {
    volume: 0.15,
  });

  useEffect(() => {
    if (!isShuffling) {
      if (hasItem) {
        setCurrentAnimation("hover:animate-reveal hover:drop-shadow-xl");
      } else {
        setCurrentAnimation("hover:animate-peak hover:drop-shadow-xl");
      }
    }
  }, [isShuffling, hasItem]);

  const handleMouseEnter = () => {
    if (!isShuffling) {
      setIsHovering(true);
      hasItem ? playSuccess() : playError();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    hasItem ? stopSuccess() : stopError();
  };

  const item = (
    <div className="absolute bottom-[-5px] left-8 bg-gradient-to-tr from-amber-800 via-amber-700 to-amber-800 h-10 w-10 rounded-full z-10"></div>
  );

  return (
    <div className={`relative ${shuffle} `}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-24 h-[150px] bg-teal-700 relative drop-shadow-lg cursor-pointer z-20 ${
          isShuffling ? "" : currentAnimation
        }`}
      >
        <div className="absolute bottom-[-16px] rounded-[50%] w-full h-1/4 bg-teal-700"></div>
        <div className="absolute top-[-16px] rounded-[50%] w-full h-1/4 border-slate-800 bg-teal-800 border-2"></div>
      </div>
      {hasItem && item}
    </div>
  );
}

Shell.propTypes = {
  shuffle: PropTypes.string.isRequired,
  isShuffling: PropTypes.bool.isRequired,
  hasItem: PropTypes.bool.isRequired,
};

export default Shell;
