var Modal = {
  number: 0,
  modal: null,
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
      Modal.hide();
      game.style.display = "flex";
      Board.columns = Modal.number;
      Board.rows = Modal.number;
  }
}
