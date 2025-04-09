import { useState } from "react"; // Import the useState hook from React

function AdventureGame() {
  // STATE DECLARATIONS
  // Each useState call creates a new state variable with its own setter function

  // String state - Storing the hero's name (initially empty string)
  const [name, setName] = useState("");

  // Number state - Storing the hero's level (initially 1)
  const [level, setLevel] = useState(1);

  // String state - Storing the hero's current weapon
  const [weapon, setWeapon] = useState("Wooden Sword");

  // Boolean state - Tracks if the hero is poisoned (initially false)
  const [isPoisoned, setIsPoisoned] = useState(false);

  // Object state - Storing multiple related stats in a single state variable
  // IMPORTANT: When updating objects, always create a new object (immutability)
  const [stats, setStats] = useState({ agility: 5, dexterity: 8 });

  // Array state - Storing the hero's inventory items
  // IMPORTANT: When updating arrays, always create a new array (immutability)
  const [inventory, setInventory] = useState([]);

  // Number state - Storing experience points
  const [experience, setExperience] = useState(0);

  // HANDLERS
  // This function demonstrates the importance of functional updates
  // It increases the level by 3 in a single click
  const handleTripleLevelUp = () => {
    // WRONG WAY - This would only increase level by 1 because of "stale state"
    // setLevel(level + 1);
    // setLevel(level + 1);
    // setLevel(level + 1);

    // CORRECT WAY - Using functional updates to ensure each update builds on the previous one
    setLevel((prevLevel) => prevLevel + 1); // First +1
    setLevel((prevLevel) => prevLevel + 1); // Second +1
    setLevel((prevLevel) => prevLevel + 1); // Third +1
    // React batches these updates but ensures each gets the latest state
  };

  return (
    <>
      {/* HERO NAME SECTION */}
      <h1>Our Hero: {name}</h1>
      {/* Controlled input component - React state drives the input value */}
      {/* WRONG WAY - This wouldn't work because it mutates state directly */}
      {/* <input value={name} onChange={(event) => name = event.target.value} /> */}

      {/* CORRECT WAY - Using the setter function to update state */}
      <input
        value={name} // Input shows current state
        onChange={(event) => setName(event.target.value)} // Updates state with new value
      />
      <button onClick={() => setName("Sauron")}>Sauron is here!</button>

      {/* LEVEL SECTION */}
      <h2>Level: {level}</h2>

      {/* DIRECT VALUE UPDATE - Simple but can cause problems with stale state */}
      <button onClick={() => setLevel(level + 1)}>Level Up! (Direct)</button>

      {/* FUNCTIONAL UPDATE FORM - Safer when new state depends on previous state */}
      <button onClick={() => setLevel((prevLevel) => prevLevel + 1)}>
        Level Up! (Functional)
      </button>

      {/* Using our handler function for multiple updates */}
      <button onClick={handleTripleLevelUp}>Triple Level Up</button>

      {/* DIFFERENT DATA TYPES EXAMPLES */}

      {/* STRING STATE */}
      <p>Weapon: {weapon}</p>
      {/* Note: This button has a bug - setWeapon() with no argument will set weapon to undefined */}
      {/* Should be setWeapon("Iron Dagger") */}
      <button onClick={() => setWeapon()}>Equipt Dagger</button>

      {/* BOOLEAN STATE - Using ternary operator to display human-readable text */}
      <p>Poisoned: {isPoisoned ? "Yes" : "No"}</p>
      {/* Toggle pattern using functional update to ensure latest state */}
      <button onClick={() => setIsPoisoned((prev) => !prev)}>
        Toggle Posion
      </button>

      {/* OBJECT STATE */}
      <p>
        Stats - Agility: {stats.agility}, Dexterity: {stats.dexterity}
      </p>
      <button
        onClick={() => {
          setStats((prev) => {
            // IMMUTABILITY PATTERN FOR OBJECTS:
            return {
              ...prev, // 1. Spread all properties from previous state
              agility: prev.agility + 1, // 2. Override just the property we want to change
            };
            // This creates a brand new object rather than mutating the original
          });
        }}
      >
        Increase Agility
      </button>

      {/* ARRAY STATE */}
      <h3>Inventory: {inventory.join(", ")}</h3>
      <button
        onClick={() => {
          setInventory((prev) => {
            // IMMUTABILITY PATTERN FOR ARRAYS:
            return [...prev, "Health Potion"]; // Create new array with all previous items + new item
            // Never use methods like push() that mutate the original array
          });
        }}
      >
        Add Potion
      </button>

      {/* BATCHING EXAMPLE - Multiple state updates in one event handler */}
      <p>XP: {experience}</p>
      <button
        onClick={() => {
          // React batches these updates and performs only one re-render
          setExperience((prev) => prev + 50);
          setLevel((prev) => prev + 1);
        }}
      >
        Complete Quest! (+50XP, +1 Level)
      </button>
    </>
  );
}

export default AdventureGame;
