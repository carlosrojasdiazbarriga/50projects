"use client";

import { useState } from "react";
import applause from "@/SoundBoard/Sounds/applause.mp3";
import boo from "@/SoundBoard/Sounds/boo.mp3";
import gasp from "@/SoundBoard/Sounds/gasp.mp3";
import tada from "@/SoundBoard/Sounds/tada.mp3";
import victory from "@/SoundBoard/Sounds/victory.mp3";
import wrong from "@/SoundBoard/Sounds/wrong.mp3";

export default function SoundBoardPage() {
  const botones = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
  const listSounds = [applause, boo, gasp, tada, victory, wrong];

  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );

  const handleClick = (id: number) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(listSounds[id]);
    audio.play();

    setCurrentAudio(audio);
  };

  return (
    <div className="flex bg-[#a164df] items-center justify-center h-dvh overflow-hidden text-center m-0">
      <div className="w-full p-5">
        {botones.map((b, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className="bg-[#663399] text-white rounded-md 
            border-none m-4 py-6 px-12 hover:opacity-90 text-xl"
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
