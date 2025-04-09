import { useState } from "react";

function AdventureGame() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [weapon, setWeapon] = useState("Wooden Sword");
  const [isPoisoned, setIsPoisoned] = useState(false);
  const [stats, setStats] = useState({ agility: 5, dexterity: 8 });
  const [inventory, setInventory] = useState([]);
  const [experience, setExperience] = useState(0);

  const handleTripleLevelUp = () => {
    // setLevel(level + 1);
    setLevel((prevLevel) => prevLevel + 1);
    setLevel((prevLevel) => prevLevel + 1);
    setLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <>
      <h1>Our Hero: {name}</h1>
      {/* <input onChange={(event) => (name = event.target.value)} /> */}
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={() => setName("Sauron")}>Sauron is here!</button>
      {/* LEVEL */}
      <h2>Level: {level}</h2>
      {/* DIRECT VALUE UPDATE */}
      <button onClick={() => setLevel(level + 1)}>Level Up! (Direct)</button>
      {/* FUNCTIONAL UPDATE FORM */}
      <button
        onClick={() =>
          setLevel((prevLevel) => {
            return prevLevel + 1;
          })
        }
      >
        Level Up! (Functional)
      </button>

      <button onClick={handleTripleLevelUp}>Triple Level Up</button>

      {/* STATS */}
      {/* STRING */}
      <p>Weapon: {weapon}</p>
      <button onClick={() => setWeapon("Iron Dagger")}>Equip Dagger</button>
      {/* BOOLEAN */}
      <p>Poisoned: {isPoisoned ? "Yes" : "No"}</p>
      <button onClick={() => setIsPoisoned((prevPosion) => !prevPosion)}>
        Toggle Posion
      </button>
      {/* OBJECT */}
      <p>
        Stats - Agility: {stats.agility}, Dexterity: {stats.dexterity}
      </p>
      <button
        onClick={() => {
          setStats((prevStats) => {
            return {
              ...prevStats,
              agility: prevStats.agility + 1,
            };
          });
        }}
      >
        Increase Agility
      </button>
      {/* ARRAYS */}
      <h3>Inventory: {inventory.join(", ")}</h3>
      <button
        onClick={() => {
          setInventory((prevInventory) => [...prevInventory, "Health Potion"]);
        }}
      >
        Add Potion
      </button>
      {/* XP */}
      <p>XP: {experience}</p>
      <button
        onClick={() => {
          setExperience((prev) => prev + 50);
          setLevel((prevLevel) => prevLevel + 1);
        }}
      >
        Complete Quest! (+50 XP, +1 Level)
      </button>
    </>
  );
}

export default AdventureGame;
