var total = 0;

$(document).ready(function() {
  $("form#count").submit(function(event) {
    event.preventDefault();

    var inputNumber1 = parseInt($('#input1').val());
    var inputNumber2 = parseInt($('#input2').val());

    
    for (var start = 0;  start < inputNumber1;  start += inputNumber2) {
      total += inputNumber2;
      $('ul').append('<li>' + total + '</li>');
    }


 });
 });
