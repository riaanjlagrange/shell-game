import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Shell({ shuffle, isShuffling, hasItem }) {
  const [currentAnimation, setCurrentAnimation] = useState("");

  useEffect(() => {
    if (hasItem) {
      setCurrentAnimation("animate-reveal hover:drop-shadow-xl");
    }
  }, []);

  useEffect(() => {
    if (hasItem) {
      setTimeout(() => {
        setCurrentAnimation("hover:animate-reveal hover:drop-shadow-xl");
      }, 3000);
    } else {
      setCurrentAnimation("hover:animate-peak hover:drop-shadow-xl");
    }
  }, [hasItem]);

  const item = (
    <div className="absolute bottom-[-5px] left-6 bg-amber-600 h-10 w-10 rounded-full z-10"></div>
  );

  return (
    <li className={`${shuffle} relative`}>
      <div
        className={`w-20 h-[150px] bg-teal-700 relative drop-shadow-lg cursor-pointer z-20 ${
          isShuffling ? "" : currentAnimation
        }`}
      >
        <div className="absolute bottom-[-16px] rounded-[50%] w-full h-1/4 bg-teal-700"></div>
        <div className="absolute top-[-16px] rounded-[50%] w-full h-1/4 border-slate-800 bg-teal-700 border-2"></div>
      </div>
      {hasItem && item}
    </li>
  );
}

Shell.propTypes = {
  shuffle: PropTypes.string.isRequired,
  isShuffling: PropTypes.bool.isRequired,
  hasItem: PropTypes.bool.isRequired,
};

export default Shell;
