window.onload = function() {
  Modal.show();
  var btnSave = document.getElementById('save');
  btnSave.onclick = function () {
    Modal.save();
    Board.resize();
    var Play = function () {
      var liAlives = Board.getCells();
      Board.updateCells(liAlives);
    }
    Game.init();
    Game.start();
  }
}
