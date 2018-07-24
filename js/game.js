var Game = {
  count: 0,
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
    time = 1000;
  },
  start: function () {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
    Game.speedUp.onclick = Game.increaseSpeed;
    changeButtonImage();
  },
  update: function () {
    if(Game.play.value === 'Play'){
      id = setInterval(Board.nextStep,time);
      Game.play.value = 'Stop';
      Game.play.style.backgroundImage = "url('image/stop.png')";
      Game.speedUp.disabled = true;
    }
    else if(Game.play.value === 'Stop'){
      clearInterval(id);
      Game.play.value = 'Play'
      Game.play.style.backgroundImage = "url('image/play.png')";
      Game.speedUp.disabled = false;
    }
  },
  increaseSpeed: function () {
    if(Game.count === 0){
      time = 1000;
      Game.count = Game.count + 1;
    }
    else if(Game.count === 1) {
      time = 500;
      Game.count = Game.count + 1;
    }
    else if(Game.count === 2) {
      time = 250;
      Game.count = Game.count + 1;
    }
    else if(Game.count === 3) {
      time = 50;
      Game.count = 0;
      console.log('ahora si', Game.count);
    }
    console.log('click' + Game.count);
    console.log('time' + time);
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
