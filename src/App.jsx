import "./App.css";

import AdventureGame from "./components/AdventureGame";
import EnemyStatus from "./components/EnemyStatus";
import MemoExample from "./components/MemoExample";
import PlayerStatus from "./components/PlayerStatus";

function App() {
  return (
    <>
      <AdventureGame />

      <PlayerStatus />
      <EnemyStatus />
      {/* <MemoExample /> */}
    </>
  );
}

export default App;
