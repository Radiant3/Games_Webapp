import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './pages.css'

function Span({value,color}){
  return (
    <span style={{color:color}}>{value}</span>
  )
}

function Square({ value, onSquareClick }) {
    return (
      <button className="square black" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
  
  function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
        //square not empty or winner
        return;
      }
      const nextSquares = squares.slice(); //creates a copy of the data
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner:" + winner;
    } else {
      status = "Next player:" + (xIsNext ? "X" : "O"); //if xisNext is X then X, else O
    }
  
    return (
      <>
        <div className="status"><Span value={status} color="white"></Span></div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
  }
  
  export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove]; //retrieving currently selected move
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; //if go back in time and make a move history only displayed up to that certain point
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      setXIsNext(!xIsNext);
      //For example, if history is [[null,null,null], ["X",null,null]] and nextSquares is ["X",null,"O"],
      //then the new [...history, nextSquares] array will be [[null,null,null], ["X",null,null], ["X",null,"O"]].
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove); //update current move
      setXIsNext(nextMove % 2 === 0); //xIsNext true if number changing currentMove to is even
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = "Go to move #" + move;
      } else {
        description = "Go to game start";
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      
      <div className="game black">
        {/* <Link to="/" className="top-right-button">Home</Link> */}
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  