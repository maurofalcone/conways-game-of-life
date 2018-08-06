window.onload = function() {
  GameStorage.game = GameStorage.getGame();
  if(GameStorage.game !== null){
    GameStorage.init();
    Board.play;
  }
  else{
    var btnSave = Modal.getBtnSave();
    btnSave.onclick = Modal.init;
    Board.play;
  }
}
