"use client";
import Link from "next/link";

import imagePs from "@/SplitLanding/img/ps.jpg";
import imageXbox from "@/SplitLanding/img/xbox.jpg";
import Image from "next/image";
import { useState } from "react";

export default function SplitLandingPage() {
  const [hovered, setHovered] = useState<String | null>(null);
  return (
    <div className="flex h-dvh w-[100%] overflow-hidden bg-[#333]">
      <div
        className={`relative flex  h-full items-center justify-center
      transition-all duration-1000 z-0
      ${
        hovered === "left"
          ? "w-[75%] z-30"
          : hovered === "right"
          ? "w-[25%] "
          : "w-[50%]"
      } `}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className=" absolute inset-0 bg-[rgba(87,84,236,0.7)]"></div>
        <Image
          src={imagePs}
          alt="psp"
          className="w-full h-full object-cover object-left"
          priority
        />

        <div className="absolute z-10 text-center">
          <h1 className="text-white text-4xl text-wrap font-bold mb-8 sm:text-3xl lg:text-6xl">
            Playstation 5
          </h1>
          <Link
            href=""
            className="bg-transparent border-2 border-white text-white lg:py-4 lg:px-8 sm:py-3 sm:px-4
            hover:bg-[rgba(87,84,236,1)] hover:border-[rgba(87,84,236,1)] capitalize"
          >
            buy now
          </Link>
        </div>
      </div>

      <div
        className={`relative flex h-full items-center justify-center
      transition-all duration-1000 z-0 overflow-hidden
      ${
        hovered === "right"
          ? "w-[75%] "
          : hovered === "left"
          ? "w-[25%] z-10"
          : "w-[50%]"
      } `}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className=" absolute inset-0 bg-[rgba(43,43,43,0.8)]"></div>
        <Image
          src={imageXbox}
          alt="xbox"
          className="h-full w-full object-cover object-left"
        />
        <div className="absolute z-10 text-center">
          <h1 className="text-white text-4xl text-wrap font-bold mb-8 sm:text-3xl lg:text-6xl">
            Xbox Series X
          </h1>
          <Link
            href="#"
            className=" bg-transparent border-2 border-white text-white lg:py-4 lg:px-8 sm:py-3 sm:px-4
            hover:bg-[rgba(28,122,28,1)] hover:border-[rgba(28,122,28,1)] capitalize"
          >
            buy now
          </Link>
        </div>
      </div>
    </div>
  );
}
