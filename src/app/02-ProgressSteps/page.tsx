"use client";
import { useState } from "react";

export default function ProgressStepsPage() {
  const [actualStep, SetActualSteps] = useState(1);
  const totalSteps = 4;

  const onHandlePrev = () => {
    SetActualSteps(actualStep - 1);
  };

  const onHandleNext = () => {
    SetActualSteps(actualStep + 1);
  };

  const getProgressWidth = () => {
    return ((actualStep - 1) / (totalSteps - 1)) * 100 + "%";
  };

  return (
    <div className="flex flex-col h-dvh items-center justify-center">
      <div className=" flex justify-center">
        <div className="relative mb-7 max-w-full w-[350px]">
          <div
            className="before:content-[''] before:bg-gray-300 before:absolute 
                 before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:h-1 before:w-full"
          ></div>

          <div
            id="progress"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 h-1 bg-blue-500 transition-width duration-400 ease"
            style={{ width: getProgressWidth() }}
          ></div>

          <div className="flex justify-between">
            {[...Array(totalSteps)].map((_, step) => (
              <div
                key={step + 1}
                className={` relative flex items-center justify-center w-8 h-8 border-[3px] bg-white
                   ${
                     actualStep <= step ? "border-gray-300" : "border-[#3498db]"
                   }  text-gray-400 rounded-full`}
              >
                {step + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex">
        <button
          className="align-middle m-2 px-7 py-1 bg-[#3498db]
         text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onHandlePrev}
          disabled={actualStep === 1}
        >
          Prev
        </button>
        <button
          className="align-middle m-2 px-7 py-1 bg-[#3498db]
         text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onHandleNext}
          disabled={actualStep === totalSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
}
