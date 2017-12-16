const grid = document.querySelectorAll('.square');
let turns = 0;

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


const checkTopLeft = (symbol, row, col) => {
  if (symbol === gameBoard[row][col+1]) {
    if (symbol === gameBoard[row][col+2]) {
      console.log('you win!!!');
      //endGame(symbol, )  <==== get back to this idjit
      return;
    }
  }
  if (symbol === gameBoard[row+1][col+1]) {
    if (symbol === gameBoard[row+2][col+2]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row+1][col]) {
    if (symbol === gameBoard[row+2][col]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkTopMid = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col+1]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row+1][col]) {
    if (symbol === gameBoard[row+2][col]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkTopRight = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col-2]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row+1][col-1]) {
    if (symbol === gameBoard[row+2][col-2]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row+1][col]) {
    if (symbol === gameBoard[row+2][col]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkMidLeft = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row+1][col]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row][col+1]) {
    if (symbol === gameBoard[row][col+2]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkMidMid = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col-1]) {
    if (symbol === gameBoard[row+1][col+1]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col+1]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row+1][col-1]) {
    if (symbol === gameBoard[row-1][col+1]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row+1][col]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkMidRight = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row+1][col]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col-2]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkBottomLeft = (symbol, row, col) => {
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row-2][col]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row-1][col+1]) {
    if (symbol === gameBoard[row-2][col+2]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row][col+1]) {
    if (symbol === gameBoard[row][col+2]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkBottomMid = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col+1]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row-2][col]) {
      console.log('you win!!!');
      return;
    }
  }
};

const checkBottomRight = (symbol, row, col) => {
  if (symbol === gameBoard[row][col-1]) {
    if (symbol === gameBoard[row][col-2]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row-1][col-1]) {
    if (symbol === gameBoard[row-2][col-2]) {
      console.log('you win!!!');
      return;
    }
  }
  if (symbol === gameBoard[row-1][col]) {
    if (symbol === gameBoard[row-2][col]) {
      console.log('you win!!!');
      return;
    }
  }
};



const triggerSymbolAnimation = (event) => {
  event.stopPropagation();
  const symbol = event.target;
  const x = 'x';
  if (symbol.className[0] === x) {
    // Removing entrance animation class to prevent it from triggering again
    symbol.classList.remove('rotating-scale-in-center');
    symbol.classList.add('rotate-center');
    // Removing the new animation class once symbol is done animating so it can be triggered again
    setTimeout(() => symbol.classList.remove('rotate-center'), 800);
  } else {
    symbol.classList.remove('bounce-in-top');
    symbol.classList.add('wobble');
    setTimeout(() => symbol.classList.remove('wobble'), 800);
  }
};

const insertSymbol = (event) => {
  event.stopPropagation();
  const gridSquare = event.target;
  if (gridSquare.innerHTML) {
    return;
  }
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
    console.log('how many turns???', turns)
    checkForWin(symbol, row, col);
  }
};

const addClickListener = (gridSquare) => gridSquare.addEventListener('click', insertSymbol);

grid.forEach(addClickListener);
