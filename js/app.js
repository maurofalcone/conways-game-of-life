window.onload = function() {
  Modal.show();
  Modal.btnSave = document.getElementById('save');
  Modal.btnSave.onclick = function () {
  Modal.save();
  var Play = function () {
    var liAlives = Board.getCells();
    Board.updateCells(liAlives);
  }
  Game.init();
  Game.start();
  console.log(Modal.number);
  }
}
