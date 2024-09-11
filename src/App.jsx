import Shell from "./components/Shell";
import useSound from "use-sound";
import shuffleSound from "./assets/sfx/shuffle.mp3";
import errorSound from "./assets/sfx/error.mp3";
import successSound from "./assets/sfx/success.mp3";
import { useState } from "react";

function App() {
  const [isShuffling, setIsShuffling] = useState(false);
  const [boolArray, setBoolArray] = useState([true, false, false]);
  const [playShuffle] = useSound(shuffleSound, {
    volume: 0.25,
  });
  const [playError] = useSound(errorSound, {
    volume: 0.35,
  });
  const [playSuccess] = useSound(successSound, {
    volume: 0.25,
  });

  const shuffleArray = (arr) => {
    let currentIndex = arr.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };

  const handleShuffle = () => {
    setIsShuffling(true);
    playShuffle();
    setTimeout(() => setIsShuffling(false), 5000);
    setBoolArray((prev) => shuffleArray(prev));
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-800 flex-col">
      <h1 className="text-amber-600 text-3xl font-bold mb-40">Shell Game</h1>
      <div className="flex w-3/5 justify-center gap-20 mb-20">
        <Shell
          hasItem={boolArray[0]}
          isShuffling={isShuffling}
          shuffle={isShuffling ? `animate-shuffle1` : ""}
          onSound={boolArray[0] ? playSuccess : playError}
          key={1}
        />
        <Shell
          hasItem={boolArray[1]}
          isShuffling={isShuffling}
          shuffle={isShuffling ? `animate-shuffle2` : ""}
          onSound={boolArray[1] ? playSuccess : playError}
          key={2}
        />
        <Shell
          hasItem={boolArray[2]}
          isShuffling={isShuffling}
          shuffle={isShuffling ? `animate-shuffle3` : ""}
          onSound={boolArray[2] ? playSuccess : playError}
          key={3}
        />
      </div>
      <button
        onClick={handleShuffle}
        className="rounded-md bg-teal-700 px-5 py-2 text-slate-800 font-bold hover:bg-teal-600 hover:scale-105 transition-transform"
      >
        Shuffle
      </button>
    </div>
  );
}
export default App;
