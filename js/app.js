window.onload = function() {
  var storage = localStorage.getItem('game');
  if(storage !== null){
    GameStorage.init();
    Game.init();
    Game.start();
  }
  else{
    var btnSave = document.getElementById('save');
    btnSave.onclick = Modal.init;
    Game.init();
    Game.start();
    }
}
