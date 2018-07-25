window.onload = function() {
  var storage = localStorage.getItem('game');
  console.log(storage);
  if(storage != null){
    GameStorage.init();
    console.log('last game');
  }
  console.log('no game saved');
  var btnSave = document.getElementById('save');
  btnSave.onclick = Modal.init;
    Game.init();
    Game.start();
}
