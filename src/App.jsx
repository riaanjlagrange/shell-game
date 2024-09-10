import Shell from "./components/Shell";
import { useState } from "react";

function App() {
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(1);
    setTimeout(() => setIsShuffling(false), 5000);
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-800 flex-col">
      <h1 className="text-white text-3xl font-bold mb-40">Shell Game</h1>
      <div className="flex w-3/5 justify-center gap-20 mb-20">
        <Shell
          hasItem={false}
          isShuffling={isShuffling}
          shuffle={isShuffling ? "animate-shuffle1" : ""}
        />
        <Shell
          hasItem={true}
          isShuffling={isShuffling}
          shuffle={isShuffling ? "animate-shuffle2" : ""}
        />
        <Shell
          hasItem={false}
          isShuffling={isShuffling}
          shuffle={isShuffling ? "animate-shuffle3" : ""}
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
