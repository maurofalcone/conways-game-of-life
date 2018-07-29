var Game = {
  count: 0,
  next: null,
  play: null,
  speedUp: null,
  saveProgress: null,
  reset: null,
  board: null,
  cells: null,
  id: null,
  color: null,
  inputColor: null,
  init: function () {
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.play = document.getElementById('play');
    Game.saveProgress = document.getElementById('saveProgress');
    Game.speedUp = document.getElementById('speedUp');
    Game.reset = document.getElementById('reset');
    Game.inputColor = document.getElementById('js-color');
    time = 1000;
    id = 0;
  },
  start: function () {
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
    Game.speedUp.onclick = Game.increaseSpeed;
    Game.reset.onclick = Game.resetGame;
    Game.saveProgress.onclick = Game.save;
    Board.paint();
    changeButtonImage();
    Game.play.value = 'Play'
    Game.play.style.backgroundImage = "url('image/play.png')";
    Game.inputColor.onchange = Game.changeCellsColor;
  },
  update: function () {
    if(Game.play.value === 'Play'){
      Game.bool = true;
      id = setInterval(Board.nextStep,time);
      Game.play.value = 'Stop';
      Game.play.style.backgroundImage = "url('image/stop.png')";
      Game.speedUp.disabled = true;
    }
    else if(Game.play.value === 'Stop'){
      Game.bool = false;
      clearInterval(id);
      Game.play.value = 'Play'
      Game.play.style.backgroundImage = "url('image/play.png')";
      Game.speedUp.disabled = false;
    }
  },
  resetGame: function () {
    time = 1000;
    clearInterval(id);
    Board.createCells();
    Game.play.value = 'Play'
    Game.play.style.backgroundImage = "url('image/play.png')";
    Board.paint();
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
    }
  },
  save: function () {
    if(id !== 0){
      clearInterval(id);
    }
      GameStorage.save();
      Game.play.value = 'Play'
      Game.play.style.backgroundImage = "url('image/play.png')";
    },
  changeCellsColor: function () {
    var color = document.getElementById('js-color');
    document.documentElement.style.setProperty('--aliveColor', '#'+color.value+'');
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
 Game.reset.onmouseover = function () {
   Game.reset.title = 'Reset';
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
