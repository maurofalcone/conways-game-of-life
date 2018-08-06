var Modal = {
  number: 0,
  modal: null,
  game: null,
  getModal: function () {
    return document.getElementById('modal');
  },
  getGame: function () {
    return document.getElementsByClassName('game')[0];
  },
  getNumber: function () {
    return document.getElementById('number').value;
  },
  getBtnSave: function () {
    return document.getElementById('save');
  },
  init: function () {
    var text = document.getElementById('number').value;
    if(Validation.onlyNumbers(text) === true){
      GameStorage.hideModalStorage();
      Modal.save();
      Board.resize();
      Game.init();
      Game.start();
    }
    else
    {
      Validation.message();
    }
  },
  show: function () {
   Modal.modal = Modal.getModal();
   Modal.modal.style.display = "flex";
  },
  hide: function () {
     Modal.modal = Modal.getModal();
     Modal.modal.style.display = "none";
  },
  save: function () {
    Modal.game = Modal.getGame();
    Modal.number = Modal.getNumber();
    Board.columns = Modal.number;
    Board.rows = Modal.number;
    Modal.hide();
    Modal.game.style.display = "flex";
    document.getElementById('color-picker').style.display = 'flex';
    document.getElementsByClassName('game-container')[0].style.display = 'flex';
  }
}
