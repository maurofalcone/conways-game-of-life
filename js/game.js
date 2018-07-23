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
    changeButtonImage();
  },
  update: function () {
    console.log(Game.play.value);
    if(Game.play.value === 'Play'){
      id = setInterval(Board.nextStep,1000);
      Game.play.value = 'Stop';
      Game.play.style.backgroundImage = "url('image/stop.jpg')";
      console.log(Game.play.style.backgroundImage);
    }
    else if(Game.play.value === 'Stop'){
      clearInterval(id);
      Game.play.value = 'Play'
      Game.play.style.backgroundImage = "url('image/play.jpg')";
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
       Game.next.style.backgroundImage = "url('image/alt_next.png')";
       Game.next.title = 'Next Step';
 }
 Game.play.onmouseout = function () {
     if(Game.play.value === 'Play'){
       Game.play.style.backgroundImage = "url('image/play.jpg')";
     }
     else if(Game.play.value === 'Stop'){
       Game.play.style.backgroundImage = "url('image/stop.jpg')";
     }
 }
 Game.next.onmouseout = function () {
      Game.next.style.backgroundImage = "url('image/next.png')";
 }
}
