var GameOfLife = {
  createEmtyBoard: function (rows, cols) {
    var newBoard = [];
    for (var i = 0; i < rows; i++) {
      var row = [];
      for (var j = 0; j < cols; j++) {
        row.push(false);
      }
      newBoard.push(row);
    }
    return newBoard;
  },
  getBoardFromHTML: function (cells, cols) {
    var board = [];
    var row = [];
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var isAlive = cell.className === 'alive';
      row.push(isAlive);
      if (i % cols === (cols-1)) {
        board.push(row);
        row = [];
      }
    }
    return board;
  },
  getNextStep: function (a , b) {
    for (var i = 0; i < a.length; i++) {
      var row = a[i];
      for (var j = 0; j < row.length; j++) {
        var cell = row[j];
        var willBeAlive = GameOfLife.applyRule(a, i, j);
        if (willBeAlive) {
          b[i][j] = true;
        }
      }
    }
    return b;
  },
  applyRule: function (board, posX, posY) {
    var cell = board[posX][posY];
    var count = 0;
    if(board[posX-1] && board[posX-1][posY-1]) ++count;
    if(board[posX-1] && board[posX-1][posY]) ++count;
    if(board[posX-1] && board[posX-1][posY+1]) ++count;
    if(board[posX] && board[posX][posY-1]) ++count;
    if(board[posX] && board[posX][posY+1]) ++count;
    if(board[posX+1] && board[posX+1][posY-1]) ++count;
    if(board[posX+1] && board[posX+1][posY]) ++count;
    if(board[posX+1] && board[posX+1][posY+1]) ++count;
    var rule1 = !cell && count>= 3;
    var rule2 = cell && (count === 2 || count=== 3);
    return rule1 || rule2;
  }
}
