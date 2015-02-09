var counter = function() {
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours()-12;

  if (seconds.toString().length < 2) {
    seconds = "0" + seconds;
  }
  if (minutes.toString().length < 2) {
    minutes = "0" + minutes;
  }
  if (hours.toString().length < 2) {
    hours = "0" + hours;
  }

  $(".seconds").text(seconds);
  $(".minutes").text(minutes);
  $(".hours").text(hours);
}


$(function() {

  counter();

  var intID = setInterval(counter, 1000);
  
})