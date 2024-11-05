import { GamePlay } from "./GamePlay";
import { GameOver } from "./GameOver";
import { Game as GameModel, SetGameType as SetGameModelType } from "./game";
import "./Game.css";

export default function Game({
  game,
  setGame,
}: {
  game: GameModel;
  setGame: SetGameModelType;
}) {
  const MainContent = game.isOver() ? GameOver : GamePlay;

  return (
    <div className="game">
      <div className="game__info">
        <div className="game__info__sum">
          <div className="game__info__sum__title">Sum</div>
          <div className="game__info__sum__value">{game.getSum()}</div>
        </div>

        <div className="game__info__opponent">
          <div className="game__info__opponent__title">Opponent chose </div>
          <div className="game__info__opponent__value">
            {game.getLastOpponentNumber()}
          </div>
        </div>
      </div>
      <MainContent game={game} setGame={setGame} />
    </div>
  );
}
