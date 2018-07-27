var Modal = {
  number: 0,
  modal: null,
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
   Modal.modal = document.getElementById('modal');
   Modal.modal.style.display = "flex";
  },
  hide: function () {
     Modal.modal = document.getElementById('modal');
     Modal.modal.style.display = "none";
  },
  save: function () {
  var game = document.getElementsByClassName('game')[0];
    Modal.number = document.getElementById('number').value;
    Board.columns = Modal.number;
    Board.rows = Modal.number;
    Modal.hide();
    game.style.display = "flex";
  }
}
