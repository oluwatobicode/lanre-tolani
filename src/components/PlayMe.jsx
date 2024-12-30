import { useState } from "react";
import needYou from "../music/Fireboy-DML-Need-You-[TrendyBeatz.com].mp3";

const PlayMe = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(needYou)); // Persist the Audio instance

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  audio.onplaying = () => setIsPlaying(true);
  audio.onpause = () => setIsPlaying(false);

  return (
    <div className="mt-5 mb-5">
      <h1 className="text-white text-[1.5rem] mb-2">Click to play</h1>
      <button
        className="text-white text-2xl w-full p-3 h-14 rounded-md bg-black"
        onClick={togglePlay}
      >
        {isPlaying ? "Playing" : "Paused"}
      </button>
    </div>
  );
};

export default PlayMe;
