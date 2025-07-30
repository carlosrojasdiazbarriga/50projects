import React from "react";

interface Props {
  backgroundImg: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export const Card = ({ backgroundImg, text, onClick, isActive }: Props) => {
  return (
    <>
      <div
        className={`relative flex w-full h-[80vh] bg-cover bg-center rounded-[50px] bg-no-repeat 
            m-3 cursor-pointer transition-all duration-700 ease-in
            ${
              isActive
                ? "flex-grow- min-w-[55vw] max-w-[55vw]"
                : "flex-shrink min-w-[3vw] max-w-[6.5vw]"
            }`}
        onClick={onClick}
        style={{ backgroundImage: backgroundImg }}
      >
        <h3
          className={`absolute text-white text-2xl font-bold bottom-5 left-5 m-0 transition-opacity duration-300
            ease-in ${isActive ? "opacity-100 delay-500" : "opacity-0"}`}
        >
          {text}
        </h3>
      </div>
    </>
  );
};
