//BEGIN clock counter

var clockCounter = function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  if (hours > 12) {
    hours - 12;
  }
  if (hours.toString().length < 2) {
    hours = "0" + hours;
  }
  if (minutes.toString().length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length < 2) {
    seconds = "0" + seconds;
  }

  
  var clock = hours + ":" + minutes + ":" + seconds;

  $(".clock").text(clock);
}


$(function() {

  clockCounter();

  var intID = setInterval(clockCounter, 1000);
  
})

//END clock counter

//BEGIN hex counter

var hexCounter = function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours > 12) {
    hours - 12;
  }
  if (hours.toString().length < 2) {
    hours = "0" + hours;
  }
  if (minutes.toString().length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length < 2) {
    seconds = "0" + seconds;
  }

  var hexClock = "#" + hours + minutes + seconds;

  $(".hexClock").text(hexClock);

  $(".hexBlock").css("background-color", hexClock);
}


$(function() {

  hexCounter();

  var intID = setInterval(hexCounter, 1000);
  
})

//END hex counter

