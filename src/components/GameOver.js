import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>
        <p>GAME</p> <p className="txtNavy">OVER</p>
      </h1>
      <h5>
        A sua pontuação foi: <span className="scoreTxt">{score}</span>
      </h5>
      <button onClick={retry} className="btn-play w-button">
        RETRY
      </button>
    </div>
  );
};

export default GameOver;
