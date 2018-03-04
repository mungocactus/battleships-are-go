var buttonText = document.getElementById('launch-button');
var launch = document.querySelector('.circle-bottom');

var launchShips = function () {
  console.log('boat');

  launch.addEventListener('click', function () {
    launch.classList.add('launched');
    buttonText.innerHTML = "LAUNCHED";
    console.log('ship');
    var row = Math.floor(Math.random() * 10) + 1;
    console.log(row);
    var column = Math.floor(Math.random() * 10) + 1;
    console.log(column);
  });

}

launchShips();

var resetLaunch = function () {
  var reset = document.querySelector('.reset');
  reset.addEventListener('click', function () {
    console.log('steam');
    launch.classList.remove('launched');
    buttonText.innerHTML = "LAUNCH";
  });
}

resetLaunch();
