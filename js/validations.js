var Validation = {
  onlyNumbers: function (text) {
      if (text.match(/^[0-9]+$/)) {
        if(text >= 5 && text <= 15) {
          return true;
        }
      }
      else {
        return false;
      }
    },
    message: function () {
      var p = document.getElementsByTagName('span')[0];
      p.style.backgroundColor = '#FF0532';
      var input = document.getElementById('number');
      input.focus();
      input.onkeypress = function () {
          p.style.backgroundColor = '#FFF';
      }
    }
}
