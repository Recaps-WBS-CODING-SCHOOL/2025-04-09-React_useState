import { useState } from "react";

function EnemyStatus() {
  const [count, setCount] = useState(0);

  console.log("RENDERING: EnemyStatus Component");

  return (
    <div className="enemy-status">
      <h3>Enemies: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Spawn Enemy</button>
    </div>
  );
}

export default EnemyStatus;
