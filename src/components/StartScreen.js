import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>SECRET</h1> <h1>WORD</h1>
      <button onClick={startGame} className="btn-play w-button">
        LET'S PLAY{" "}
      </button>
    </div>
  );
};

export default StartScreen;
