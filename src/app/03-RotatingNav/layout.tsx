"use client";
import { NavBarRotating } from "@/RotatingNav";
import "./RotatingNav.module.css";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function RotatingNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <div
        className={`${
          showNav ? "rotate-[-20deg]" : ""
        } transition-transform duration-500 origin-top-left `}
      >
        <div className="fixed top-[-100px] left-[-100px] z-10">
          <div
            className={`bg-red-400 h-52 w-52 rounded-full relative transition-transform duration-500 ${
              showNav ? "rotate-[-90deg]" : ""
            }`}
          >
            <button
              className="absolute top-[60%] left-1/2 transform -translate-x-[-120%]  text-white text-3xl bg-transparent border-none"
              onClick={toggleNav}
            >
              <IoMenu />
            </button>
            <button
              className="absolute top-1/2 left-[15%] transform -translate-y-[-70%] text-white rotate-[20deg] text-3xl bg-transparent border-none"
              onClick={toggleNav}
            >
              <IoClose />
            </button>
          </div>
        </div>
        <div className="w-screen min-h-screen bg-gray-100 p-12">{children}</div>
      </div>
      <NavBarRotating showNav={showNav} />
    </>
  );
}
