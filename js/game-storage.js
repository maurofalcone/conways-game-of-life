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
  },
  load: function () {
    GameStorage.game = localStorage.getItem('game');
    Board.columns = localStorage.getItem('boardSize');
    Board.rows = localStorage.getItem('boardSize');
    GameStorage.game.style.display = "flex";
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
    Modal.show();
  },
  acceptLoad: function () {
    GameStorage.hideModalStorage();
    GameStorage.load();
  }
}