var GameStorage = {
  modalStorage: null,
  game: null,
  board: null,
  cancel: null,
  accept: null,
  save: null,
  showModalStorage: function () {
    GameStorage.modalStorage = document.getElementById('modal-storage');
    GameStorage.modalStorage.style.display = 'flex';
  },
  hideModalStorage: function () {
    GameStorage.modalStorage = document.getElementById('modal-storage');
    GameStorage.modalStorage.style.display = 'none';
  },
  init: function () {
    Modal.hide();
    GameStorage.showModalStorage();
    GameStorage.cancel = document.getElementById('cancel');
    GameStorage.accept = document.getElementById('accept');
    GameStorage.cancel.onclick = GameStorage.cancelLoad;
    GameStorage.accept.onclick = GameStorage.acceptLoad;
  },
  save: function () {
    GameStorage.game = localStorage.setItem('game', document.getElementsByClassName('game')[0]);
    GameStorage.board = localStorage.setItem('boardSize', Board.columns);
    alert('The game has been saved');
  },
  load: function () {
    var game = localStorage.getItem('game');
    document.getElementsByClassName('game')[0].innerHTML = game;
    Board.columns = localStorage.getItem('boardSize');
    Board.rows = localStorage.getItem('boardSize');
    console.log(Board.columns);
    var aux = document.getElementsByClassName('game')[0];
    console.log(aux);
    aux.style.display = 'flex';
    //si no las crea es porq falta en el init el Board.createCells();
    Board.resize();
      var Play = function () {
      var liAlives = Board.getCells();
      Board.updateCells(liAlives);
     }
     Game.init();
     Game.start();
  },
  cancelLoad: function () {
    GameStorage.hideModalStorage();
    localStorage.removeItem('game');
    Modal.show();
    window.onload();
  },
  acceptLoad: function () {
    GameStorage.hideModalStorage();
    GameStorage.load();
  }
}
