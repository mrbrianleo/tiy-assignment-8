var counter = function() {
  var date = new Date();
  var seconds = date.getSeconds();

  seconds
  $
;  $(".seconds").text(seconds);
}

$(function() {

  counter();

  var intID = setInterval(counter, 1000);
  
});

