import React from "react";

interface Props {
  showNav: boolean;
}

export const NavBarRotating = ({ showNav }: Props) => {
  console.log(showNav);
  return (
    <nav className="fixed bottom-10 left-0 z-10">
      <ul className="pl-8">
        <li
          className={`uppercase text-white my-10 transform transition-transform duration-400 ${
            showNav ? "translate-x-0 delay-300" : "-translate-x-full"
          }`}
        >
          <i className="text-lg mr-2"></i>
          <a href="#"> Home</a>
        </li>
        <li
          className={`uppercase text-white my-10 transform transition-transform duration-400 ${
            showNav ? "translate-x-0 delay-500" : "-translate-x-[150%]"
          }`}
        >
          <i className="text-lg mr-2"></i>
          <a href="#"> About</a>
        </li>
        <li
          className={`uppercase text-white my-10 transform transition-transform duration-400 ${
            showNav ? "translate-x-0 delay-700" : "-translate-x-[200%]"
          }`}
        >
          <i className=" text-lg mr-2"></i>
          <a href="#"> Contact</a>
        </li>
      </ul>
    </nav>
  );
};
