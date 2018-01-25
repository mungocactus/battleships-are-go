console.log('holly jesus');

window.onload = init;

function init() {
  var addRow = (function() {
    var divRow = document.getElementById('gameboard');
    for (var i = 0; i < 10; i++) {
      var divider = document.createElement('div');
      divRow.appendChild(divider);
      divider.setAttribute('id', 'row');
    }

    var addBoxes = (function() {
      var divRubbish = document.getElementById('row');
      for (var i = 0; i < 10; i++) {
        var rubbish = document.createElement('div');
        rubbish.setAttribute('class', 'box');
        divRubbish.appendChild(rubbish);
      }
    });
  });

  addRow();
  addBoxes();
}


// try prototype next time
