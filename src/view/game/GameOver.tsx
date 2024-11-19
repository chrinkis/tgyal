import { Game, Player, SetGameType } from "../../model/game";
import "./GameOver.css";

export function GameOver({
  game,
  setGame,
}: {
  game: Game;
  setGame: SetGameType;
}) {
  return (
    <div className="game__over">
      <div className="game__over__winner">
        {game.getWinner() == Player.Pc ? "You lost" : "You won"}
      </div>

      <button
        type="button"
        onClick={() => setGame(new Game())}
        className="game__over__replay"
      >
        replay
      </button>
    </div>
  );
}
