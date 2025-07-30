"use client";
import { useState, useRef, useEffect } from "react";

export default function ScrollAnimationPage() {
  const totaldivs = 12;
  const [inViewArray, setInViewArray] = useState<boolean[]>(
    new Array(totaldivs).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>(
    new Array(totaldivs).fill(null)
  );

  const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    refs.current.forEach((box, index) => {
      if (box) {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          setInViewArray((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        } else {
          setInViewArray((prev) => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#efedd6] overflow-x-hidden font-robo">
      <section className="m-2 text-3xl font-semibold">
        Scroll to see the animation
      </section>
      {[...Array(totaldivs)].map((_, index) => (
        <div
          ref={(el) => {
            if (el) refs.current[index] = el;
          }}
          key={index}
          className={` flex items-center justify-center h-52 w-[400px] bg-slate-500 text-3xl
             text-white rounded-lg m-2 shadow-xl transition-all duration-300
          ${
            inViewArray[index]
              ? "translate-x-0"
              : "translate-x-[400%] odd:-translate-x-[400%]"
          }`}
        >
          Content
        </div>
      ))}
    </div>
  );
}
