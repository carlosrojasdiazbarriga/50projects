"use client";
import React, { useEffect, useRef } from "react";
import style from "./FormInputWave.module.css";

interface Props {
  name: string;
}

export const InputWave = ({ name }: Props) => {
  const labelsRef = useRef<HTMLLabelElement[]>([]);
  useEffect(() => {
    labelsRef.current.forEach((label, index) => {
      if (label) {
        label.querySelectorAll("span").forEach((span, spanIdx) => {
          (span as HTMLElement).style.transitionDelay = `${spanIdx * 50}ms`;
        });
      }
    });
  }, []);
  return (
    <div
      className={`form-control relative mb-8 w-[300px] ${style["form-control"]}`}
    >
      <input
        className="relative bg-transparent border-0 border-b-2 border-white 
    w-full block py-[15px] text-lg outline-none focus:border-blue-300 peer"
        type="text"
        required
      ></input>
      <label
        ref={(el) => {
          if (el) labelsRef.current.push(el);
        }}
        className="absolute top-4 left-0 pointer-events-none 
    peer-focus:text-blue-400 peer-valid:text-blue-400 peer-focus:-translate-y-7
    peer-valid:-translate-y-[30px] transition-all duration-300 ease-linear"
      >
        {Array.from(name).map((letter, idx) => (
          <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
            {letter}
          </span>
        ))}
      </label>
    </div>
  );
};
