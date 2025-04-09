import { useState } from "react";

function PlayerStatus() {
  const [health, setHealth] = useState(100);

  console.log("RENDERING: PlayerStatus Component");

  return (
    <div className="player-status">
      <h3>Player Health: {health}</h3>
      <button onClick={() => setHealth(health - 10)}>Take Damage</button>
    </div>
  );
}

export default PlayerStatus;
