window.onload = function() {
  var storage = localStorage.getItem('game');
  console.log(storage);
  if(storage !== null){
    GameStorage.init();
    console.log('last game');
  }
  else
  {
    console.log('new game');
    var btnSave = document.getElementById('save');
    console.log('click' + btnSave);
    btnSave.onclick = Modal.init;
    Game.init();
    Game.start();
  }
}
