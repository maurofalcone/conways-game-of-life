var Game = {
  next: null,
  play: null,
  board: null,
  cells: null,
  init: function() {
    Board.createCells();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.play = document.getElementById('play');
  },
  start: function () {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
  },
  update: function () {
    console.log('update');
    setInterval(Board.nextStep,1000);
  }
};
