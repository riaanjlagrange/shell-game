import Shell from "./components/Shell";
import { useState, useEffect } from "react";

function App() {
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => setIsShuffling(false), 5000);
  };

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

  const [boolArray, setBoolArray] = useState([true, false, false]);
  useEffect(() => {
    if (isShuffling) {
      setBoolArray((prev) => shuffleArray(prev));
    }
  }, [isShuffling]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-800 flex-col">
      <h1 className="text-amber-600 text-3xl font-bold mb-40">Shell Game</h1>
      <ul className="flex w-3/5 justify-center gap-20 mb-20">
        {boolArray.map((i, idx) => (
          <Shell
            hasItem={i}
            onShuffle={handleShuffle}
            isShuffling={isShuffling}
            shuffle={isShuffling ? `animate-shuffle${idx + 1}` : ""}
            key={idx}
          />
        ))}
      </ul>
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
