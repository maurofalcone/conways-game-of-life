var Game = {
  next: null,
  play: null,
  board: null,
  cells: null,
  id: null,
  init: function () {
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
    console.log(Game.play.textContent);
    if(Game.play.textContent === 'Play'){
      id = setInterval(Board.nextStep,1000);
      Game.play.innerHTML = "Stop";
    }
    else if(Game.play.textContent === 'Stop'){
      clearInterval(id);
      Game.play.innerHTML = 'Play';
    }
  }
};
