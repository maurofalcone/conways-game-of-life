window.onload = function() {
  var storage = localStorage.getItem('game');
  if(storage !== null){
    GameStorage.init();
      var Play = function () {
      var liAlives = Board.getCells();
      Board.updateCells(liAlives);
    }
  }
  else{
    var btnSave = document.getElementById('save');
    btnSave.onclick = Modal.init;
    function Play() {
        var liAlives = Board.getCells();
        Board.updateCells(liAlives);
    }
  }
}
