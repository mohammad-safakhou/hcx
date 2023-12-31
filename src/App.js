import React from 'react';
import './App.css';
import ResponsiveAppBar from "./AppBar";
import {ThemeProvider} from "@mui/material";
import {Container} from '@mui/material';
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import CenteredButton from "./CenteredButton";
import './blurred_lines.css'

// <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
//     <p id='head1' className='header'>Awesome designs</p>
//     <p id='head2' className='header'>Just</p>
//     <p id='head3' className='header'>For you</p>
//     <p id='head4' className='header'>simple and awesome all the time</p>
//     <p id='head5' className='header'>Welcome to BA designs</p>
//     <button>Continue</button>
//     <div className='light x1'></div>
//     <div className='light x2'></div>
//     <div className='light x3'></div>
//     <div className='light x4'></div>
//     <div className='light x5'></div>
//     <div className='light x6'></div>
//     <div className='light x7'></div>
//     <div className='light x8'></div>
//     <div class='light x9'></div>
export default function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <ResponsiveAppBar> </ResponsiveAppBar>
                <Container maxWidth="fixed">
                    <div className='light x1'></div>
                    <div className='light x2'></div>
                    <div className='light x3'></div>
                    <div className='light x4'></div>
                    <div className='light x5'></div>
                    <div className='light x6'></div>
                    <div className='light x7'></div>
                    <div className='light x8'></div>
                    <CenteredButton></CenteredButton>
                </Container>
                <Container>
                    <CenteredButton></CenteredButton>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
}


// function Game() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const currentSquares = history[currentMove];
//
//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     setXIsNext(!xIsNext);
//   }
//
//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//     setXIsNext(nextMove % 2 === 0);
//   }
//
//   function restartGame() {
//     setHistory([Array(9).fill(null)]);
//     setCurrentMove(0);
//     setXIsNext(true);
//   }
//
//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//         <li key={move}>
//           <button onClick={() => jumpTo(move)}>{description}</button>
//         </li>
//     );
//   });
//
//   return (
//       <div className="game">
//         <div className="game-board">
//           <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
//         </div>
//         <div className="game-info">
//           <ol>{moves}</ol>
//         </div>
//         <ButtonGroup variant="text" aria-label="text button group">
//           <Button onClick={restartGame}>Restart Game</Button>
//         </ButtonGroup>
//
//       </div>
//   );
// }
//
// function Square({value, onSquareClicked}) {
//   let c = '#fff'
//   if (value === "X") {
//     c = '#ff0000'
//   } else if (value === "O") {
//     c = '#0000ff'
//   }
//   return (
//       <Button style={{'backgroundColor': '#08c0c0', 'color': c, 'borderStyle': 'groove', 'borderBlockWidth': '10px 20px', 'borderRadius': '10px' }} variant="outlined" className="square"
//               onClick={onSquareClicked}>
//         {value === null ? '\u00A0' : value}
//       </Button>
//   );
// }
//
// function Board({xIsNext, squares, onPlay}) {
//
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }
//
//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }
//
//   return <>
//     <div className="status">{status}</div>
//     <div className="grid-tic">
//       <Square value={squares[0]} onSquareClicked={() => handleClick(0)}/>
//       <Square value={squares[1]} onSquareClicked={() => handleClick(1)}/>
//       <Square value={squares[2]} onSquareClicked={() => handleClick(2)}/>
//       <Square value={squares[3]} onSquareClicked={() => handleClick(3)}/>
//       <Square value={squares[4]} onSquareClicked={() => handleClick(4)}/>
//       <Square value={squares[5]} onSquareClicked={() => handleClick(5)}/>
//       <Square value={squares[6]} onSquareClicked={() => handleClick(6)}/>
//       <Square value={squares[7]} onSquareClicked={() => handleClick(7)}/>
//       <Square value={squares[8]} onSquareClicked={() => handleClick(8)}/>
//     </div>
//   </>
// }
//
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2], // top row
//     [3, 4, 5], // middle row
//     [6, 7, 8], // bottom row
//     [0, 3, 6], // left column
//     [1, 4, 7], // middle column
//     [2, 5, 8], // right column
//     [0, 4, 8], // top-left to bottom-right diagonal
//     [2, 4, 6], // top-right to bottom-left diagonal
//   ];
//   for (let line of lines) {
//     const [a, b, c] = line;
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]; // X or O
//     }
//   }
//   return null;
// }