const grid = document.querySelectorAll('.square');
let turns = 0;

// const dynamicCheckWin = (symbol, row, col) => {
//   if (isTopRow(row)) {
//     checkTopRow(symbol,row, col)
//   }
// }
// Represenation of my game board
const gameBoard = [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                                        ];
const isPlayerOneTurn = () => turns % 2 === 0;
const isTopRow = (row) => row === 0;
const isMidRow = (row) => row === 1;
const isBottomRow = (row) => row === 2;
const isXSymbol = (sym) => sym === 'x';


const gridSquareAlreadyHasSymbol = (square) => square.innerHTML;

/**
 * checks if a win scenario has occurred yet
 * @param  {string} symbol Going to be an 'x' or 'o'
 * @param  {number} row   What row was clicked on
 * @param  {number} col   What column was clicked on
 */
const checkForWin = (symbol, row, col) => {
  if (isTopRow(row)) {
    if (col === 0) {
      return checkTopLeft(symbol, row, col);
    }
    if (col === 1) {
      return checkTopMid(symbol, row, col);
    }
    if (col === 2) {
      return checkTopRight(symbol, row, col);
    }
  }
  if (isMidRow(row)) {
    if (col === 0) {
      return checkMidLeft(symbol, row, col);
    }
    if (col === 1) {
      return checkMidMid(symbol, row, col);
    }
    if (col === 2) {
      return checkMidRight(symbol, row, col);
    }
  }
  if (isBottomRow(row)) {
    if (col === 0) {
      return checkBottomLeft(symbol, row, col);
    }
    if (col === 1) {
      return checkBottomMid(symbol, row, col);
    }
    if (col === 2) {
      return checkBottomRight(symbol, row, col);
    }
  }
}

const createArrayOfWinningElements = (...coordinates) => coordinates.map((coord) => document.getElementById(`${coord[0]}${coord[1]}`))
const triggerXWinAnim = (elem) => elem.firstChild.classList.add('infinite-rotate-center');
const triggerOWinAnim = (elem) => elem.firstChild.classList.add('infinite-bounce');

const endGame = (symbol, coord1, coord2, coord3) => {
  const elemArr = createArrayOfWinningElements(coord1, coord2, coord3);
  if (isXSymbol(symbol)) {
    elemArr.forEach(triggerXWinAnim);
  } else {
    elemArr.forEach(triggerOWinAnim);
  }
  console.log('you win!!!')
}


const checkTopLeft = (symbol, row, col) => {
  if (symbol === gameBoard[row][col+1]) {
    if (symbol === gameBoard[row][col+2]) {
      return endGame(symbol, [row, col], [row, col+1], [row, col+2]);
    }
  }
  if (symbol === gameBoard[row+1][col+1]) {
    if (symbol === gameBoard[row+2][col+2]) {
      return endGame(symbol, [row, col], [row+1, col+1], [row+2, col+2]);
    }
  }
  if (symbol === gameBoard[row+1][col]) {
    if (symbol === gameBoard[row+2][col]) {
      return endGame(symbol, [row, col], [row+1, col], [row+2, col]);
    }
  }
};

const checkTopMid = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col+1]) {
      return endGame(symbol, [row, col], [row, col-1], [row, col+1]);
    }
  }
  if (symbol === gameBoard[row+1][col]) {
    if (symbol === gameBoard[row+2][col]) {
      return endGame(symbol, [row, col], [row+1, col], [row+2, col]);
    }
  }
};

const checkTopRight = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col-2]) {
      return endGame(symbol, [row, col], [row, col-1], [row, col-2]);
    }
  }
  if (symbol === gameBoard[row+1][col-1]) {
    if (symbol === gameBoard[row+2][col-2]) {
      return endGame(symbol, [row, col], [row+1, col-1], [row+2, col-2]);
    }
  }
  if (symbol === gameBoard[row+1][col]) {
    if (symbol === gameBoard[row+2][col]) {
      return endGame(symbol, [row, col], [row+1, col], [row+2, col]);
    }
  }
};

const checkMidLeft = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row+1][col]) {
      return endGame(symbol, [row, col], [row-1, col], [row+1, col]);
    }
  }
  if (symbol === gameBoard[row][col+1]) {
    if (symbol === gameBoard[row][col+2]) {
      return endGame(symbol, [row, col], [row, col+1], [row, col+2]);
    }
  }
};

const checkMidMid = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col-1]) {
    if (symbol === gameBoard[row+1][col+1]) {
      return endGame(symbol, [row, col], [row-1, col-1], [row+1, col+1]);
    }
  }
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col+1]) {
      return endGame(symbol, [row, col], [row, col-1], [row, col+1]);
    }
  }
  if (symbol === gameBoard[row+1][col-1]) {
    if (symbol === gameBoard[row-1][col+1]) {
      return endGame(symbol, [row, col], [row+1, col-1], [row-1, col+1]);
    }
  }
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row+1][col]) {
      return endGame(symbol, [row, col], [row-1, col], [row+1, col]);
    }
  }
};

const checkMidRight = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row+1][col]) {
      return endGame(symbol, [row, col], [row-1, col], [row+1, col]);
    }
  }
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col-2]) {
      return endGame(symbol, [row, col], [row, col-1], [row, col-2]);
    }
  }
};

const checkBottomLeft = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row-2][col]) {
      return endGame(symbol, [row, col], [row-1, col], [row-2, col]);
    }
  }
  if (symbol === gameBoard[row-1][col+1]) {
    if (symbol === gameBoard[row-2][col+2]) {
      return endGame(symbol, [row, col], [row-1, col+1], [row-2, col+2]);
    }
  }
  if (symbol === gameBoard[row][col+1]) {
    if (symbol === gameBoard[row][col+2]) {
      return endGame(symbol, [row, col], [row, col+1], [row, col+2]);
    }
  }
};

const checkBottomMid = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col+1]) {
      return endGame(symbol, [row, col], [row, col-1], [row, col+1]);
    }
  }
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row-2][col]) {
      return endGame(symbol, [row, col], [row-1, col], [row-2, col]);
    }
  }
};

const checkBottomRight = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col-2]) {
      return endGame(symbol, [row, col], [row, col-1], [row, col-2]);
    }
  }
  if (symbol === gameBoard[row-1][col-1]) {
    if (symbol === gameBoard[row-2][col-2]) {
      return endGame(symbol, [row, col], [row-1, col-1], [row-2, col-2]);
    }
  }
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row-2][col]) {
      return endGame(symbol, [row, col], [row-1, col], [row-2, col]);
    }
  }
};


/**
 * Makes the X divs spin around when clicked 
 * OR 
 * O divs wobble in place
 */
const triggerSymbolAnimation = (event) => {
  event.stopPropagation();
  const symbol = event.target;
  if (isXSymbol(symbol.className[0])) {
    // Removing entrance animation class to prevent it from triggering again
    symbol.classList.remove('rotating-scale-in-center');
    symbol.classList.add('rotate-center');
    // Removing the new animation class once symbol is done animating so it can be triggered again
    setTimeout(() => symbol.classList.remove('rotate-center'), 800);
  } else { // if the symbol is an 'o' instead, trigger different animation
    symbol.classList.remove('bounce-in-top');
    symbol.classList.add('wobble');
    setTimeout(() => symbol.classList.remove('wobble'), 800);
  }
};


const insertSymbol = (event) => {
  event.stopPropagation();
  const gridSquare = event.target;
  if (gridSquareAlreadyHasSymbol(gridSquare)) return;

  const row = parseInt(event.target.id[0]);
  const col = parseInt(event.target.id[1]);

  if (isPlayerOneTurn()) {
    const xDiv = document.createElement('div');
    xDiv.className = 'x rotating-scale-in-center';
    xDiv.addEventListener('click', triggerSymbolAnimation);
    gridSquare.appendChild(xDiv);
  } else {
    const oDiv = document.createElement('div');
    oDiv.className = 'o bounce-in-top';
    oDiv.addEventListener('click', triggerSymbolAnimation);
    gridSquare.appendChild(oDiv);
  }
  turns+= 1;
  const symbol = gridSquare.firstChild.className[0];
  gameBoard[row][col] = symbol;

  if (turns > 4) {
    console.log(`
      Turns: ${turns}
      Game board: ${gameBoard}
    `)
    checkForWin(symbol, row, col);
    // dynamicCheckWin(symbol, row, col);
  }
};

const addClickListener = (gridSquare) => gridSquare.addEventListener('click', insertSymbol);

grid.forEach(addClickListener);
