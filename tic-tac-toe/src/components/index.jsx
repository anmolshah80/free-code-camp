import { useEffect, useState } from 'react';

import './styles.css';

const WINNING_PATTERNS = [
  // horizontal winning patterns
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // vertical winning patterns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // diagonal winning patterns
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ value, handleSquareClick, winningPatternSquareID }) => {
  return (
    <button
      id={winningPatternSquareID}
      className=" square"
      onClick={handleSquareClick}
    >
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isItXsTurn, setIsItXsTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState('');
  const [winningPatternSquareID, setWinningPatternSquareID] =
    useState('square-');
  const [playerConfiguration, setPlayerConfiguration] = useState({
    computerMove: null,
    playerMove: null,
    isPlayingAgainstComputer: true,
  });
  const [player, setPlayer] = useState('you');

  const handleClick = (currentSquare, computerMoveSymbol = null) => {
    const { winner } = getWinner(squares);

    // return if there is a winner or if the current square has already been marked/selected
    if (winner || squares[currentSquare]) return;

    let squaresCopy = [...squares];
    console.log(squares);

    const { playerMove, isPlayingAgainstComputer } = playerConfiguration;

    if (!isPlayingAgainstComputer) {
      squaresCopy[currentSquare] = isItXsTurn ? 'X' : 'O';
      setIsItXsTurn((previousValue) => !previousValue);
      setSquares(squaresCopy);
    } else {
      if (player === 'you') {
        squaresCopy[currentSquare] = playerMove;

        setPlayer('computer');
      } else {
        squaresCopy[currentSquare] = computerMoveSymbol;

        setPlayer('you');
      }
    }

    setSquares(squaresCopy);
  };

  const getWinner = (squares) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [x, y, z] = WINNING_PATTERNS[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return {
          winningPattern: [x, y, z],
          winner: squares[x],
        };
      }
    }

    return {
      winningPattern: null,
      winner: null,
    };
  };

  const handleGameRestart = () => {
    const { winningPattern } = getWinner(squares);

    if (winningPattern) {
      const [x, y, z] = winningPattern;

      document.getElementById(`square-${x}`).classList.remove('winning-square');
      document.getElementById(`square-${y}`).classList.remove('winning-square');
      document.getElementById(`square-${z}`).classList.remove('winning-square');
    }

    const { isPlayingAgainstComputer } = playerConfiguration;

    if (!isPlayingAgainstComputer) {
      setIsItXsTurn(true);
    }

    setSquares(Array(9).fill(''));
    setPlayerConfiguration({
      computerMove: null,
      playerMove: null,
      isPlayingAgainstComputer: true,
    });
    assignSymbolsToPlayers();
  };

  useEffect(() => {
    if (player === 'you') return;

    const { computerMove } = playerConfiguration;

    // allow the computer to select only the square which is empty
    if (player === 'computer') {
      setTimeout(() => {
        const allSquares = document.querySelectorAll('.square');
        allSquares.forEach((button) => (button.disabled = true));

        // get the position of each of these empty squares and then use the computer's turn to fill one randomly
        const indexes = [];

        for (let i = 0; i < squares.length; i++) {
          if (squares[i] === '') {
            indexes.push(i);
          }
        }

        console.log('indexes: ', indexes);

        // TODO: add your move based on the winning pattern and block your opponents win with your move
        const randomSquareToFill =
          indexes[Math.floor(Math.random() * indexes.length)];

        console.log('randomSquareToFill: ', randomSquareToFill);

        handleClick(randomSquareToFill, computerMove);

        setPlayer('you');
        allSquares.forEach((button) => (button.disabled = false));
      }, 1500);
    }
  }, [squares, player]);

  // useEffect(() => {
  //   const { winningPattern, winner } = getWinner(squares);
  //   const { computerMove, playerMove, isPlayingAgainstComputer } =
  //     playerConfiguration;

  //   if (!winner && squares.every((item) => item !== '')) {
  //     setGameStatus("It's a draw");
  //   } else if (winner) {
  //     setGameStatus(`Player ${winner} wins`);

  //     const [x, y, z] = winningPattern;

  //     document.getElementById(`square-${x}`).classList.add('winning-square');
  //     document.getElementById(`square-${y}`).classList.add('winning-square');
  //     document.getElementById(`square-${z}`).classList.add('winning-square');
  //   } else {
  //     if (!isPlayingAgainstComputer) {
  //       setGameStatus(`Next Player -> ${isItXsTurn ? 'X' : 'O'}`);
  //     } else {
  //       setGameStatus(
  //         `Next Player (${player.toUpperCase()}) -> ${
  //           player === 'computer' ? computerMove : playerMove
  //         }`,
  //       );
  //     }
  //   }
  // }, [squares, isItXsTurn]);

  const assignSymbolsToPlayers = () => {
    // if the computer has already selected a symbol i.e., `X` or `O` then skip the selection again
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      setPlayerConfiguration((previousData) => ({
        ...previousData,
        computerMove: 'X',
        playerMove: 'O',
      }));
    } else {
      setPlayerConfiguration((previousData) => ({
        ...previousData,
        computerMove: 'O',
        playerMove: 'X',
      }));
    }

    setPlayer('you');
  };

  useEffect(() => {
    assignSymbolsToPlayers();
  }, []);

  useEffect(() => {
    const { winningPattern, winner } = getWinner(squares);
    const { computerMove, playerMove, isPlayingAgainstComputer } =
      playerConfiguration;

    if (!winner && squares.every((item) => item !== '')) {
      setGameStatus("It's a draw");
    } else if (winner) {
      setGameStatus(`Player ${winner} wins`);

      const [x, y, z] = winningPattern;

      document.getElementById(`square-${x}`).classList.add('winning-square');
      document.getElementById(`square-${y}`).classList.add('winning-square');
      document.getElementById(`square-${z}`).classList.add('winning-square');
    } else {
      if (!isPlayingAgainstComputer) {
        setGameStatus(`Next Player -> ${isItXsTurn ? 'X' : 'O'}`);
      } else {
        setGameStatus(
          `Next Player (${player.toUpperCase()}) -> ${
            player === 'computer' ? computerMove : playerMove
          }`,
        );
      }
    }
  }, [squares, player, playerConfiguration]);

  return (
    <div className="game-container">
      <h1 className="page-title">Tic Tac Toe</h1>
      <div className="row">
        <Square
          value={squares[0]}
          handleSquareClick={() => handleClick(0)}
          winningPatternSquareID={winningPatternSquareID + 0}
        />
        <Square
          value={squares[1]}
          handleSquareClick={() => handleClick(1)}
          winningPatternSquareID={winningPatternSquareID + 1}
        />
        <Square
          value={squares[2]}
          handleSquareClick={() => handleClick(2)}
          winningPatternSquareID={winningPatternSquareID + 2}
        />
      </div>
      <div className="row">
        <Square
          value={squares[3]}
          handleSquareClick={() => handleClick(3)}
          winningPatternSquareID={winningPatternSquareID + 3}
        />
        <Square
          value={squares[4]}
          handleSquareClick={() => handleClick(4)}
          winningPatternSquareID={winningPatternSquareID + 4}
        />
        <Square
          value={squares[5]}
          handleSquareClick={() => handleClick(5)}
          winningPatternSquareID={winningPatternSquareID + 5}
        />
      </div>
      <div className="row">
        <Square
          value={squares[6]}
          handleSquareClick={() => handleClick(6)}
          winningPatternSquareID={winningPatternSquareID + 6}
        />
        <Square
          value={squares[7]}
          handleSquareClick={() => handleClick(7)}
          winningPatternSquareID={winningPatternSquareID + 7}
        />
        <Square
          value={squares[8]}
          handleSquareClick={() => handleClick(8)}
          winningPatternSquareID={winningPatternSquareID + 8}
        />
      </div>

      <p className="game-status">{gameStatus}</p>
      <button onClick={handleGameRestart} className="restart-button">
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
