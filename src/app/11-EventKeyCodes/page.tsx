"use client";
import { useEffect, useState } from "react";

export default function NamePage() {
  const [eventKey, setEventKey] = useState("");
  const [eventKeyCode, setEventKeyCode] = useState(0);
  const [eventCode, setEventCode] = useState("");

  const onkeydown = (e: KeyboardEvent) => {
    setEventKey(e.key);
    setEventKeyCode(e.keyCode);
    setEventCode(e.code);
  };

  useEffect(() => {
    window.addEventListener("keydown", onkeydown);
    return () => window.removeEventListener("keydown", onkeydown);
  }, []);

  return (
    <div
      className="flex items-center justify-center 
      bg-[#e1e1e1] h-dvh overflow-hidden m-0 relative"
    >
      {eventKey === "" ? (
        <div
          className="bg-[#eee] items-center text-xl m-3 min-w-36 p-5
          shadow-md border-[1px] border-black font-semibold"
        >
          Press any key to get the keyCode
        </div>
      ) : (
        <>
          <div className="relative m-3">
            <small className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gray-700">
              Key
            </small>
            <div
              className="bg-[#eee] items-center text-xl min-w-36 p-5
              shadow-md border-[1px] border-black font-semibold text-center"
            >
              {eventKey === " " ? "space" : eventKey}
            </div>
          </div>
          <div className="relative m-3">
            <small className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-gray-700">
              KeyCode
            </small>
            <div
              className="bg-[#eee] items-center text-xl min-w-36 p-5
              shadow-md border-[1px] border-black font-semibold text-center"
            >
              {eventKeyCode}
            </div>
          </div>
          <div className="relative m-3">
            <small className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-gray-700">
              Code
            </small>
            <div
              className="bg-[#eee] items-center text-xl min-w-36 p-5
              shadow-md border-[1px] border-black font-semibold text-center"
            >
              {eventCode}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
