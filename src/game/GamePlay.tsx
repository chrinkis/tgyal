import { Game, SetGameType } from "./game";
import "./GamePlay.css";

const NUMBERS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function GamePlay({ setGame }: { setGame: SetGameType }) {
  function handleClick(userNumber: number) {
    setGame((oldGame) => {
      const game = new Game(oldGame);
      game.play(userNumber);

      return game;
    });
  }

  return (
    <>
      <div className="game__play__numbers">
        {NUMBERS.map((num) => (
          <button
            onClick={() => handleClick(num)}
            key={num}
            className="game__play__number"
          >
            {num}
          </button>
        ))}
      </div>
    </>
  );
}
