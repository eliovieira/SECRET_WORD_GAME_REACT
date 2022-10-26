import { useRef } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  word,
  category,
  letters,
  wrongLetters,
  setWrongLetters,
  tentativas,
  setTentativas,
  letterX,
  setLetterX,
  score,
  setScore,
  guessedLetters,
  setGuessedLetters,
}) => {
  const letterInputRef = useRef(null);

  //const checkLetter = (letterX) => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    // se o utilizador ainda tiver tentativas para acertar na palavra
    if (tentativas > 0) {
      // processa a letra inserida pelo utilizador
      verifyLetter(letterX);
    }

    //limpa o input e seleciona automaticamente o mesmo para ser mais fácil a inserção de outras letras
    setLetterX("");
    letterInputRef.current.focus();
  };

  return (
    <div>
      <div className="scoreText">Score : {score}</div>
      <h3 id="category-text">
        DICA SOBRE A PALAVRA:{" "}
        <span style={{ color: "#ffe26a" }}> {category.toUpperCase()}</span>
      </h3>
      <h5>
        Voce ainda tem{" "}
        <span id="numberTry" className="numberTry">
          {tentativas}
        </span>{" "}
        tentativa(s)
      </h5>
      <div className="grid">
        {letters.map((letter, i) =>
          // <h1>{letter.toUpperCase()}</h1>
          guessedLetters.includes(letter) ? (
            <span key={i} className="square ">
              {letter.toUpperCase()}
            </span>
          ) : (
            <span key={i} className="square hidden"></span>
          )
        )}
      </div>
      <div>
        <h5>PICK A LETTER</h5>
        <form onSubmit={handleSubmit}>
          <input
            name="letterX"
            maxLength={1}
            onChange={(e) => setLetterX(e.target.value)}
            value={letterX}
            ref={letterInputRef}
            required
          />

          <button type="submit" required className="btn-play w-button">
            PLAY!
          </button>
        </form>
        <div className="wrongLettersContainer">
          <h5>
            WRONG LETTERS :
            {wrongLetters.map((letter, i) => (
              <span key={i} className="wrongLetters">
                {letter},
              </span>
            ))}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Game;
