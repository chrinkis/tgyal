import { useState } from "react";
import { Game as GameModel } from "./game/game";
import Welcome from "./welcome/Welcome";
import Game from "./game/Game";
import "./App.css";

function App() {
  const [game, setGame] = useState(new GameModel());
  const [shouldUserBeWelcomed, setShouldUserBeWelcomed] = useState(true);

  const content = shouldUserBeWelcomed ? (
    <Welcome setShouldShowWelcome={setShouldUserBeWelcomed} />
  ) : (
    <Game game={game} setGame={setGame} />
  );

  return <>{content}</>;
}

export default App;
