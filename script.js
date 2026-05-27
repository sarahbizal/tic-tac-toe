const gameBoard = (() => {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  function playerMovement() {}
  function checkSymbolInCell() {}
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
