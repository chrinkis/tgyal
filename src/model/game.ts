export type SetGameType = React.Dispatch<React.SetStateAction<Game>>;

export enum Player {
  User,
  Pc,
}

export class Game {
  #winner: Player | undefined;
  #sum: number;
  #lastOpponentNumber: number | undefined;

  constructor(other?: Game) {
    const winner = other && other.#winner;
    const lastOpponentNumber = other && other.#lastOpponentNumber;
    const sum = other ? other.#sum : 0;

    this.#winner = winner;
    this.#lastOpponentNumber = lastOpponentNumber;
    this.#sum = sum;
  }

  play(userNumber: number) {
    this.#sum += userNumber;

    if (this.isOver()) {
      this.#winner = Player.User;
      return;
    }

    const opponentNumber = (11 - (this.#sum % 11) + 1) % 11;

    this.#lastOpponentNumber = opponentNumber || 1;
    this.#sum += this.#lastOpponentNumber;

    if (this.isOver()) {
      this.#winner = Player.Pc;
    }
  }

  isOver() {
    return this.#sum >= 100;
  }

  getWinner(): Player {
    if (!this.isOver()) {
      throw new Error();
    }

    if (this.#winner == undefined) {
      throw new Error();
    }

    return this.#winner;
  }

  getSum() {
    return this.#sum;
  }

  getLastOpponentNumber() {
    return this.#lastOpponentNumber;
  }
}
