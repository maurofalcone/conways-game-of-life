var GameStorage = {
  modalStorage: null,
  game: null,
  board: null,
  cancel: null,
  accept: null,
  save: null,
  color: null,
  clear: function () {
    localStorage.removeItem('game');
    localStorage.removeItem('boardSize');
    localStorage.removeItem('color');
  },
  getModalStorage: function () {
    return document.getElementById('modal-storage');
  },
  getColor: function () {
    return localStorage.getItem('color');
  },
  getBoardSize: function () {
    return localStorage.getItem('boardSize');
  },
  getGame: function () {
    return localStorage.getItem('game');
  },
  getBtnCancel: function () {
    return document.getElementById('cancel');
  },
  getBtnAccept: function () {
    return document.getElementById('accept');
  },
  showModalStorage: function () {
    GameStorage.modalStorage = GameStorage.getModalStorage();
    GameStorage.modalStorage.style.display = 'flex';
  },
  hideModalStorage: function () {
    GameStorage.modalStorage = GameStorage.getModalStorage();
    GameStorage.modalStorage.style.display = 'none';
  },
  init: function () {
    Modal.hide();
    GameStorage.showModalStorage();
    GameStorage.cancel = GameStorage.getBtnCancel();
    GameStorage.accept = GameStorage.getBtnAccept();
    GameStorage.cancel.onclick = GameStorage.cancelLoad;
    GameStorage.accept.onclick = GameStorage.acceptLoad;
  },
  save: function () {
    localStorage.setItem('color', document.getElementById('js-color').value);
    localStorage.setItem('game', document.getElementsByClassName('game')[0].innerHTML);
    localStorage.setItem('boardSize', Board.columns);
    alert('The game has been saved');
  },
  load: function () {
    document.getElementsByClassName('game')[0].innerHTML = GameStorage.game;
    Board.columns = GameStorage.getBoardSize();
    Board.rows = GameStorage.getBoardSize();
    document.getElementsByClassName('game')[0].style.display = 'flex';
    var jsColor = document.getElementById('js-color');
    jsColor.style.display = 'flex';
    GameStorage.color = GameStorage.getColor();
    document.documentElement.style.setProperty('--aliveColor', '#'+GameStorage.color+'');
    jsColor.value = GameStorage.color;
    jsColor.style.backgroundColor = '#'+GameStorage.color+'';
    document.getElementById('color-picker').style.display = 'flex';
    document.getElementsByClassName('game-container')[0].style.display = 'flex';
    Game.init();
    Game.start();
  },
  cancelLoad: function () {
    GameStorage.hideModalStorage();
    GameStorage.clear();
    Modal.show();
    window.onload();
  },
  acceptLoad: function () {
    GameStorage.hideModalStorage();
    GameStorage.load();
  }
}
