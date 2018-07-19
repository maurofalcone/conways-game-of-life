var Modal = {
  show: function () {
    var modal = document.getElementById('modal');
    modal.style.display = "block";
  },
  save: function () {
    var btnSave = document.getElementById('save');
    var game = document.getElementsByClassName('game')[0];
    btnSave.onclick = function () {
      modal.style.display = "none";
      game.style.display = "flex";
  /*adaptar el board a las filas y columnas ingresadas*/
    var Play = function () {
      var liAlives = Board.getCells();
      Board.updateCells(liAlives);
    }
    // ejecute validation
    Game.init();
    Game.start();
    }
    //validate input form
  }
}
