import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Shell({ shuffle, isShuffling, hasItem }) {
  const [currentAnimation, setCurrentAnimation] = useState("");

  useEffect(() => {
    if (hasItem) {
      setCurrentAnimation("");
    } else {
      setCurrentAnimation("hover:animate-peak hover:drop-shadow-xl");
    }
  }, []);

  return (
    <div
      className={`shell drop-shadow-lg cursor-pointer ${
        isShuffling ? "" : currentAnimation
      } ${shuffle}`}
    >
      <div className="absolute bottom-[-16px] rounded-[50%] w-full h-1/4 bg-teal-700"></div>
      <div className="absolute top-[-16px] rounded-[50%] w-full h-1/4 border-slate-800 bg-teal-700 border-2"></div>
      <span className="absolute top-1/2 left-9 text-slate-800 font-bold"></span>
    </div>
  );
}

Shell.propTypes = {
  shuffle: PropTypes.string.isRequired,
  isShuffling: PropTypes.bool.isRequired,
  hasItem: PropTypes.bool.isRequired,
};

export default Shell;
