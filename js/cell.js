var Cell = {
  toggle: function (evt) {
    var cell = evt.target;
    if(cell.className === 'alive'){
      cell.className = '';
    }else {
      cell.className = 'alive';
    }
  }
}
