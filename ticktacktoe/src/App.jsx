import { useState } from 'react'
import logo from './logo.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const CONFIG = {
  DIMENSION: 20,
};

const Square = (props) => {
  return (
    <button
      className={props.value == "X" ? "square styleX" : "square styleO"}
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

const App = () => {
const [squares, setSquares] = useState(
  Array(CONFIG.DIMENSION).fill(Array(CONFIG.DIMENSION).fill(null))
);
const [xIsNext, setXIsNext] = useState(
  true
);
const [theWinner, setTheWinner] = useState(
  null
);

const handleClick = (i, j) => {
  if (theWinner || squares[i][j]) {
    return;
  }

  let newSquares = squares.map(r => [...r]);
  newSquares[i][j] = xIsNext ? "X" : "O";
  setSquares(newSquares);
  setXIsNext(!xIsNext);

  let whoTheWinner = calculateWinnerNew(newSquares, i, j);
  if (whoTheWinner) {
    setTheWinner(whoTheWinner);
  }
}

const handleRestart = () => {
  setSquares(Array(CONFIG.DIMENSION).fill(Array(CONFIG.DIMENSION).fill(null)));
  setXIsNext(true)
  setTheWinner(null)
}

const renderSquare = (i, j) => {
  return <Square 
    value={squares[i][j]} 
    onClick={() => handleClick(i, j)} />;
}

const renderDumpSquare = () => {
  return <Square 
    value={"X"} 
     />;
}

// const winner = calculateWinner(squares);
const winner = theWinner;
let status;
if (winner) {
  status = "Winner : " + winner;
} else {
  status = "Next player: " + (xIsNext ? "X" : "O");
}

const renderTwoDimensionSquare = (i, j) => {
  let arrForLoopRow = Array(i).fill(null);
  let arrForLoopCol = Array(j).fill(null);

  return (
    arrForLoopRow.map((e1, idx) => 
      <div className="board-row">
        {
          arrForLoopCol.map((e2, jdx) => 
          renderSquare(idx, jdx)
          // renderDumpSquare()
        )
        }
      </div>
    )
  )
}

return (
  <div>
    <div className="game-turn">
      <div className="status">{status}</div>
      <div className="restart-btn">
        <button onClick={handleRestart}>Restart Game</button>
      </div>
    </div>

    
    {/* <div className="board-row">
      {renderSquare(0, 0)} {renderSquare(0, 1)} {renderSquare(0, 2)}
    </div>
    <div className="board-row">
      {renderSquare(1, 0)} {renderSquare(1, 1)} {renderSquare(1, 2)}
    </div>
    <div className="board-row">
      {renderSquare(2, 0)} {renderSquare(2, 1)} {renderSquare(2, 2)}
    </div> */
    renderTwoDimensionSquare(CONFIG.DIMENSION, CONFIG.DIMENSION)
    }
  </div>
);
}



const Game = () => {
return (
  <div className="game">

    <div className="game-board">
      <App />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
);
}

const calculateWinner = (squares) => {
// const lines = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
// for (let i = 0; i < lines.length; i++) {
//   const [a, b, c] = lines[i];
//   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//     return squares[a];
//   }
// }
return null;
}

const calculateWinnerNew = (squares, i, j) => {
let currentPlayer = squares[i][j]
console.log(currentPlayer)
// [
//   N -> S
//   [null, null, null, "X", "O", "O", "O", "O", null],
//   W -> E
//   [null, , null, "X", "O", "X", "O", null],
//   NE -> SW
//   ["X", "O", "O", "O", "O", null, "X", "O", "O"],
//   NW -> SE
//   ["O", "O", "O", "X", "X", "X", "X", "X", "O"], //has Winner
// ]
let chainValues = builChainValue(squares, i, j);
for (let x = 0; x < chainValues.length; x++) {
  let arr = chainValues[x];
  if (isBingo(currentPlayer, arr)) {
    return currentPlayer;
  }
}
return null;
}

const isBingo = (currentPlayer, arr) => {
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == currentPlayer) {
    count++;
    if (count == 5) {
      return true;
    }
  } else {
    count = 0;
  }
}
return false;
}

const builChainValue = (squares, i,j) => {
let nToS = buildNorthToSouthChainValue(squares, i, j);
let wToE = buildWestToEastChainValue(squares, i, j);
let neToSw = buildNorthEastToSouthWestChainValue(squares, i, j);
let nwToSe = buildNorthWestToSouthEastChainValue(squares, i,j);
return [
  nToS, wToE, neToSw, nwToSe
]
}

const buildNorthToSouthChainValue = (squares, i ,j) => {
let result = [];
let currentPosition = [i, j]
let currentValue = findValueFromSquares(squares, currentPosition);

// Thêm giá trị đầu tiên vào kết quả trả ra
result.push(currentValue)
for (let x = 0; x < 4; x++) {
  currentPosition = directSouth(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.push(currentValue)
}

currentPosition = [i, j];
for (let y = 0; y < 4; y++) {
  currentPosition = directNorth(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.unshift(currentValue)
}
return result;
}

const buildWestToEastChainValue = (squares, i ,j) => {
let result = [];
let currentPosition = [i, j]
let currentValue = findValueFromSquares(squares, currentPosition);

// Thêm giá trị đầu tiên vào kết quả trả ra
result.push(currentValue)
for (let x = 0; x < 4; x++) {
  currentPosition = directEast(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.push(currentValue)
}

currentPosition = [i, j];
for (let y = 0; y < 4; y++) {
  currentPosition = directWest(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.unshift(currentValue)
}
return result;
}

const buildNorthWestToSouthEastChainValue = (squares, i ,j) => {
let result = [];
let currentPosition = [i, j]
let currentValue = findValueFromSquares(squares, currentPosition);

// Thêm giá trị đầu tiên vào kết quả trả ra
result.push(currentValue)
for (let x = 0; x < 4; x++) {
  currentPosition = directSouthEast(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.push(currentValue)
}

currentPosition = [i, j];
for (let y = 0; y < 4; y++) {
  currentPosition = directNorthWest(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.unshift(currentValue)
}
return result;
}

const buildNorthEastToSouthWestChainValue = (squares, i ,j) => {
let result = [];
let currentPosition = [i, j]
let currentValue = findValueFromSquares(squares, currentPosition);

// Thêm giá trị đầu tiên vào kết quả trả ra
result.push(currentValue)
for (let x = 0; x < 4; x++) {
  currentPosition = directSouthWest(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.push(currentValue)
}

currentPosition = [i, j];
for (let y = 0; y < 4; y++) {
  currentPosition = directNorthEast(currentPosition[0], currentPosition[1]);
  if (!isValidPosition(currentPosition)) {
    break;
  }
  currentValue = findValueFromSquares(squares, currentPosition);
  result.unshift(currentValue)
}
return result;
}


const isValidPosition = (arrLocation) => {
return !(arrLocation[0] >= CONFIG.DIMENSION || arrLocation[1] >= CONFIG.DIMENSION || arrLocation[0] < 0 || arrLocation[1] < 0)
}

const findValueFromSquares = (squares, arrLocation) => {
// console.log(squares, arrLocation)
return squares[arrLocation[0]][arrLocation[1]]
}

const directSouth = (i,j) => {
return [i+1, j]
}

const directNorth = (i,j) => {
return [i-1, j]
}

const directWest = (i,j) => {
return [i, j-1]
}

const directEast = (i,j) => {
return [i, j+1]
}

const directSouthEast = (i,j) => {
let [_i, _j] = directSouth(i,j);
return directEast(_i, _j);
}

const directSouthWest = (i,j) => {
let [_i, _j] = directSouth(i,j);
return directWest(_i, _j);
}

const directNorthWest = (i,j) => {
let [_i, _j] = directNorth(i,j);
return directWest(_i, _j);
}

const directNorthEast = (i,j) => {
let [_i, _j] = directNorth(i,j);
return directEast(_i, _j);
}


export default Game
