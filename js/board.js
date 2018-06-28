var Board = {
  rows: 5,
  columns: 5,
  getBoard: function () {
    return document.getElementsByClassName('board')[0];
  },
  getCells: function () {
    var board = Board.getBoard();
    return board.getElementsByTagName('li');
  },
  getAlivesCells: function () {
    return document.getElementsByClassName('alive');
  },
  createCells: function () {
    var board = Board.getBoard();
    var html = '';
    var cellCount = Board.rows * Board.columns;
    for (var i = 0; i < cellCount; i++) {
      html = html + '<li></li>';
    }
    board.innerHTML = html;
  },
  updateCells: function (boardJS) {
    var board = Board.getBoard();
    var html = '';
    for (var i = 0; i < Board.rows; i++) {
      for (var j = 0; j < Board.columns; j++) {
        if (boardJS[i][j]) {
            html = html + '<li class = "alive"></li>';
        }else {
            html = html + '<li></li>';
        }
      }

    }
    board.innerHTML = html;
  },
  nextStep: function () {
    var boardHTML = Board.getCells();
    var currentBoard = GameOfLife.getBoardFromHTML(boardHTML, Board.columns);
    var newBoard = GameOfLife.createEmtyBoard(Board.rows, Board.columns);
    GameOfLife.getNextStep(currentBoard, newBoard);
    Board.updateCells(newBoard);
  }
}
