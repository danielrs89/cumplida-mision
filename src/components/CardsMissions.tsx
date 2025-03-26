import { useEffect, useState } from "react";
import Missions from "../pages/Missions";
import { missions } from "../data/missions";

function CardsMissionstsx() {

  const [randomMissions, setRandomMissions] = useState<string[]>([]);

  const getRandomMissions = (count: number): string[] => {
    const shuffled = [...missions]
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
      .map((mission) => String(mission.text));
    return shuffled;
  };

  useEffect(() => {
    setRandomMissions(getRandomMissions(4));
  }, []);

  const handleCardClick = (index: number) => {
    setRandomMissions((prevMissions) => {
      const newMissions = [...prevMissions];
      newMissions[index] = getRandomMissions(1)[0];

      return newMissions;
    });
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {randomMissions.map((mission, index) => (
          <Missions key={index} mission={mission} onClick={() => handleCardClick(index)} />
        ))}
      </div>
    </>
  )
}

export default CardsMissionstsx