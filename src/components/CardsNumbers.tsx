import { useEffect, useState } from "react";
import Numbers from "../pages/Numbers";

const colors = ["#55AA55", "#FF5555", "#FFAA00", "#5555FF"];

function getRandomNumber(): number {
  return Math.floor(Math.random() * 7) + 1; // Números del 1 al 7
}

function getRandomColor(): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

function CardsNumbers() {
  const [randomCards, setRandomCards] = useState<{ number: number; cardColor: string }[]>([]);

  useEffect(() => {
    const generateRandomCards = () => {
      const cards = Array.from({ length: 4 }, () => ({
        number: getRandomNumber(),
        cardColor: getRandomColor(),
      }));
      setRandomCards(cards);
    };

    generateRandomCards();
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {randomCards.map((card, index) => (
        <Numbers key={index} number={card.number} cardColor={card.cardColor} />
      ))}
    </div>
  );
}

export default CardsNumbers;
