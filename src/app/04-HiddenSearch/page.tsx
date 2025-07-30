"use client";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function HiddenSeatchPage() {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    setVisible(!visible);
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center justify-center h-dvh bg-gradient-to-b from-[#7d5fff] to-[#7158e2]">
      <div className="flex h-12">
        <input
          type="text"
          placeholder="Search..."
          ref={inputRef}
          className={`p-3 relative placeholder:text-slate-600 outline-none border-0
          transition-all ease-in-out duration-200 ${
            visible ? "w-52" : "w-0 p-0"
          }`}
        />
        <button
          className="flex items-center justify-center  text-3xl font-black  bg-white w-12"
          onClick={handleSearch}
        >
          <IoSearch />
        </button>
      </div>
    </div>
  );
}
