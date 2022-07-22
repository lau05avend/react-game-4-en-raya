import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

const winCombos = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [0, 5, 10, 15], [3, 6, 9, 12]];

function App() {

  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(16).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(16).fill(null));
    setWinningSquares([]);
  }

  const checkForWinner = newSquares => {
    for(let i = 0; i < winCombos.length; i++) {
      const [a,b,c,d] = winCombos[i];
     
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c] && newSquares[a] === newSquares[d]) {
        // console.log(newSquares[a])   //who won (x or o)
        endGame(newSquares[a], winCombos[i]);
        return;
      }
    }

    if(!newSquares.includes(null)) {
      endGame(null, Array.from(Array(16).keys()));
      return;
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
      alert(`¡GANADOR:  Jugador '${result}'! `)
    }
    else{
      alert('¡Empateee!')
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  return (
    <div className="App">
      <h1 className="title">Juego 4 en raya</h1>
      <section className="section">
        <ScoreBoard score={score.X} player={'X'} turn={turn} />
        <main>
          <Board
            winningSquares={winningSquares}
            turn={turn}
            squares={squares}
            onClick={handleClick}
          />
        </main>
        <ScoreBoard score={score.O} player={'O'} turn={turn} />
      </section>
    </div>
  );
}

export default App;
