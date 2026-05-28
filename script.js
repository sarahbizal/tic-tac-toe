const gameBoard = (() => {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  function playerMovement(row, column, symbol) {
    if (board[row][column] !== null) {
      return false;
    }
    board[row][column] = symbol;
    return true;
  }

  function checkSymbolInCell(row, column) {
    return board[row][column];
  }

  function checkForFullBoard() {
    return board.every((row) => {
      return row.every((cell) => {
        return cell !== null;
      });
    });
  }

  function gameboardReset() {
    board.forEach((row) => {
      row.forEach((cell, index) => {
        row[index] = null;
      });
    });
  }

  return {
    playerMovement,
    checkSymbolInCell,
    checkForFullBoard,
    gameboardReset,
  };
})();

console.log(gameBoard.playerMovement(1, 1, "X"));
console.log(gameBoard.checkSymbolInCell(1, 1));
gameBoard.gameboardReset();
console.log(gameBoard.checkSymbolInCell(1, 1));

function createPlayer(name, symbol) {
  return { name, symbol };
}

const gameFlow = (() => {
  let playerOne = null;
  let playerTwo = null;
  let currentPlayer = null;

  function startGamePlay(name1, name2) {
    playerOne = createPlayer(name1, "X");
    playerTwo = createPlayer(name2, "O");
    currentPlayer = playerOne;
    gameBoard.gameboardReset();
  }

  function determineCurrentPlayer() {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  }

  function updateBoardOnClick(row, column) {
    if (gameBoard.playerMovement(row, column, currentPlayer.symbol) === true) {
      gameEndCheck();
      determineCurrentPlayer();
    }
  }

  function gameEndCheck() {
    for (let i = 0; i <= 2; i++) {
      if (
        gameBoard.checkSymbolInCell(i, 0) ===
          gameBoard.checkSymbolInCell(i, 1) &&
        gameBoard.checkSymbolInCell(i, 1) ===
          gameBoard.checkSymbolInCell(i, 2) &&
        gameBoard.checkSymbolInCell(i, 0) !== null
      ) {
        return `Congratulations ${currentPlayer.name}! You've won!`;
      }
    }
    for (let i = 0; i <= 2; i++) {
      if (
        gameBoard.checkSymbolInCell(0, i) ===
          gameBoard.checkSymbolInCell(1, i) &&
        gameBoard.checkSymbolInCell(1, i) ===
          gameBoard.checkSymbolInCell(2, i) &&
        gameBoard.checkSymbolInCell(0, i) !== null
      ) {
        return `Congratulations ${currentPlayer.name}! You've won!`;
      }
    }
    if (
      gameBoard.checkSymbolInCell(0, 0) === gameBoard.checkSymbolInCell(1, 1) &&
      gameBoard.checkSymbolInCell(1, 1) === gameBoard.checkSymbolInCell(2, 2) &&
      gameBoard.checkSymbolInCell(0, 0) !== null
    ) {
      return `Congratulations ${currentPlayer.name}! You've won!`;
    }
    if (
      gameBoard.checkSymbolInCell(0, 2) === gameBoard.checkSymbolInCell(1, 1) &&
      gameBoard.checkSymbolInCell(1, 1) === gameBoard.checkSymbolInCell(2, 0) &&
      gameBoard.checkSymbolInCell(0, 2) !== null
    ) {
      return `Congratulations ${currentPlayer.name}! You've won!`;
    }
    if (gameBoard.checkForFullBoard()) {
      return "It's a draw! No one wins.";
    }
  }

  function gameReset() {
    playerOne = createPlayer(playerOne.name, "O");
    playerTwo = createPlayer(playerTwo.name, "X");
    currentPlayer = playerTwo;
    gameBoard.gameboardReset();
  }

  return {
    startGamePlay,
    determineCurrentPlayer,
    updateBoardOnClick,
    gameEndCheck,
    gameReset,
  };
})();

//test 1 - starting a game, placing symbols and checking what happens when a player tries to put a symbol in an occupied cell
gameFlow.startGamePlay("Alice", "Bob");
gameFlow.updateBoardOnClick(0, 0);
console.log(gameBoard.checkSymbolInCell(0, 0)); // Alice places X

gameFlow.updateBoardOnClick(1, 1); // Bob places O
console.log(gameBoard.checkSymbolInCell(1, 1));

gameFlow.updateBoardOnClick(0, 0); // already has X
gameFlow.gameReset();
console.log("New test");

//test 2 - board is reset, a new game is started, and winning conditions tested

gameFlow.startGamePlay("Alice", "Bob");
gameFlow.updateBoardOnClick(0, 0); // Alice places X
console.log(gameBoard.checkSymbolInCell(0, 0));
gameFlow.updateBoardOnClick(1, 1); // Bob places O
console.log(gameBoard.checkSymbolInCell(1, 1));
gameFlow.updateBoardOnClick(0, 1); // Alice places X
console.log(gameBoard.checkSymbolInCell(0, 1));
gameFlow.updateBoardOnClick(1, 2); // Bob places O
console.log(gameBoard.checkSymbolInCell(1, 2));
gameFlow.updateBoardOnClick(0, 2); // Alice places X
