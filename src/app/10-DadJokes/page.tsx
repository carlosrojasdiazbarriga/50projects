"use client";

import { useEffect, useState } from "react";

export default function DadJokesPage() {
  const [jokesBody, setJokesBody] = useState("");

  useEffect(() => {
    jokes();
  }, []);

  const jokes = async () => {
    try {
      const data = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      if (!data.ok) {
        setJokesBody("Error en el API");
        return;
      }

      const { joke } = await data.json();
      setJokesBody(joke);
    } catch (error) {
      setJokesBody("Error en el API");
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-dvh bg-[#686de0] p-5">
      <div className="bg-white rounded-xl shadow-md py-12 px-5 text-center max-w-full w-[800px]">
        <h3 className="opacity-50 tracking-widest m-0 text-[19px] font-bold font-robo">
          Don&apos;t laugh challenge
        </h3>
        <div className="text-3xl tracking-normal my-12 mx-auto">
          {jokesBody}
        </div>
        <button
          onClick={jokes}
          className="capitalize bg-[#9f68e0] text-white shadow-md py-3 px-10
        text-[16px] rounded-xl max-w-[600px] "
        >
          get another joke
        </button>
      </div>
    </div>
  );
}
