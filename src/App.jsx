import Shell from "./components/Shell";
import { useState } from "react";

function App() {
  const [isShuffling, setIsShuffling] = useState(false);
  const [boolArray, setBoolArray] = useState([true, false, false]);

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
    setIsShuffling(1);
    setTimeout(() => setIsShuffling(false), 5000);
    setBoolArray((prev) => shuffleArray(prev));
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-800 flex-col">
      <h1 className="text-white text-3xl font-bold mb-40">Shell Game</h1>
      <div className="flex w-3/5 justify-center gap-20 mb-20">
        {boolArray.map((hasItem, idx) => (
          <Shell
            hasItem={hasItem}
            isShuffling={isShuffling}
            shuffle={isShuffling ? `animate-shuffle${idx + 1}` : ""}
            key={idx}
          />
        ))}
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
