console.log("asd");

var Play = function () {
var liAlives = Board.getCells();
Board.updateCells(liAlives)
}

var init =  function () {
  Game.init();
  Game.start();
  //var btnPlay = Board.getPlayButtton();
  //btnPlay.onclick = play;
}


window.onload = init;
