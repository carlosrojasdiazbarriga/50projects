"use client";
import { Card } from "@/ExpandingCards";
import { useState } from "react";

const infoCards = [
  {
    id: 1,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    text: "Explore the World",
  },
  {
    id: 2,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    text: "Explore the World",
  },
  {
    id: 3,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    text: "Explore the World",
  },
  {
    id: 4,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    text: "Explore the World",
  },
  {
    id: 5,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    text: "Explore the World",
  },
];

export default function ExpandingCardPage() {
  const [activeCard, setActiveCard] = useState<number | null>(1);
  const handleClick = (id: number) => {
    setActiveCard(id === activeCard ? activeCard : id);
  };

  return (
    <div className="flex items-center justify-center w-full h-dvh ">
      {infoCards.map(({ id, backgroundImage, text }) => (
        <Card
          key={id}
          backgroundImg={backgroundImage}
          text={text}
          isActive={id === activeCard}
          onClick={() => handleClick(id)}
        />
      ))}
    </div>
  );
}
