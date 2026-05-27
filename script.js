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
