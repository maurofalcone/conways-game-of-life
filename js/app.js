window.onload = function() {
  var storage = localStorage.getItem('game');
  console.log(storage);
  if(storage != null){
    GameStorage.init();
    console.log('last game');
  }
  else{
    console.log('no game saved');
    var btnSave = document.getElementById('save');
    btnSave.onclick = function () {
      GameStorage.hideModalStorage();
      Modal.save();
      Board.resize();
      var Play = function () {
        var liAlives = Board.getCells();
        Board.updateCells(liAlives);
      }
    }
      Game.init();
      Game.start();
    }
}
