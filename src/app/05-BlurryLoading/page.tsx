"use client";
import { useCallback, useEffect, useState } from "react";

interface ScaleProps {
  value: number;
  originalMin: number;
  originalMax: number;
  targetMin: number;
  targetMax: number;
}

export default function BlurryLoadingPage() {
  const [percent, setPercent] = useState(0);
  const [blur, setBlur] = useState(30);
  const [opacity, setOpacity] = useState(1);

  const updateStyles = useCallback((nextValue: number) => {
    const scale = ({
      value,
      originalMin,
      originalMax,
      targetMin,
      targetMax,
    }: ScaleProps) => {
      return (
        ((value - originalMin) * (targetMax - targetMin)) /
          (originalMax - originalMin) +
        targetMin
      );
    };

    setBlur(
      scale({
        value: nextValue,
        originalMin: 0,
        originalMax: 100,
        targetMin: 30,
        targetMax: 0,
      })
    );
    setOpacity(
      scale({
        value: nextValue,
        originalMin: 0,
        originalMax: 100,
        targetMin: 1,
        targetMax: 0,
      })
    );
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setPercent((prev) => {
        let next = prev + 1;
        if (next > 100) {
          clearInterval(id);
          return prev;
        }

        updateStyles(next);
        return next;
      });
    }, 50);
  }, [updateStyles]);

  return (
    <div className="flex h-dvh items-center justify-center overflow-hidden m-0">
      <section
        className="absolute bg-cover bg-center bg-no-repeat w-full h-full m-0  "
        style={{
          filter: `blur(${blur}px)`,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')",
        }}
      ></section>
      <div
        style={{ opacity: `${opacity}` }}
        className={`text-5xl text-white z-10 `}
      >
        {percent}%
      </div>
    </div>
  );
}
