import "./Welcome.css";

export default function Welcome({
  setShouldShowWelcome,
}: {
  setShouldShowWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleClick() {
    setShouldShowWelcome(false);
  }

  return (
    <div className="welcome">
      <div className="welcome__description">
        <p>You can choose a number between 1 and 10.</p>
        <p>The player who makes the sum 100 wins.</p>
      </div>
      <button type="button" onClick={handleClick} className="welcome__start">
        Let's start!
      </button>
    </div>
  );
}
