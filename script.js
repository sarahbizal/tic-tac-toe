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
    gameboardReset,
  };
})();

console.log(gameBoard.playerMovement(1, 1, "X"));
console.log(gameBoard.checkSymbolInCell(1, 1));
gameBoard.gameboardReset();
console.log(gameBoard.checkSymbolInCell(1, 1));
