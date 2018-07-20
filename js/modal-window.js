var Modal = {
  btnSave: null,
  number: 0,
  modal: null,
  show: function () {
    modal = document.getElementById('modal');
    modal.style.display = "block";
  },
  save: function () {
    var game = document.getElementsByClassName('game')[0];
      Modal.number = document.getElementById('number').value;
      modal.style.display = "none";
      game.style.display = "flex";
      Board.columns = Modal.number;
      Board.rows = Modal.number;
    //validate input form
  }
}
