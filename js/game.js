var Game = {
  next: null,
  play: null,
  speedUp: null,
  saveProgress: null,
  board: null,
  cells: null,
  id: null,
  init: function () {
    Board.createCells();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.play = document.getElementById('play');
    Game.saveProgress = document.getElementById('saveProgress');
    Game.speedUp = document.getElementById('speedUp');
  },
  start: function () {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
    changeButtonImage();
  },
  update: function () {
    if(Game.play.value === 'Play'){
      id = setInterval(Board.nextStep,1000);
      Game.play.value = 'Stop';
      Game.play.style.backgroundImage = "url('image/stop.png')";
    }
    else if(Game.play.value === 'Stop'){
      clearInterval(id);
      Game.play.value = 'Play'
      Game.play.style.backgroundImage = "url('image/play.png')";
      }
  }
}
function changeButtonImage() {
 Game.play.onmouseover = function () {
   if(Game.play.value === 'Play'){
     Game.play.style.backgroundImage = "url('image/alt_play.png')";
     Game.play.title = 'Play';
   }
   else if(Game.play.value === 'Stop'){
     Game.play.style.backgroundImage = "url('image/alt_stop.png')";
     Game.play.title = 'Stop';
   }
 }
 Game.next.onmouseover = function () {
   Game.next.title = 'Next Step';
 }
 Game.speedUp.onmouseover = function () {
   Game.speedUp.title = 'Speed Up';
 }
 Game.saveProgress.onmouseover = function () {
   Game.saveProgress.title = 'Save';
 }
 Game.play.onmouseout = function () {
     if(Game.play.value === 'Play'){
       Game.play.style.backgroundImage = "url('image/play.png')";
     }
     else if(Game.play.value === 'Stop'){
       Game.play.style.backgroundImage = "url('image/stop.png')";
     }
 }
}
