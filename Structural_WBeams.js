/**
 * Created by John on 10/23/2015.
 */
$.ajax();
var arrow = document.createElement("li");
arrow.className="draggable";
arrow.id="arrowMove";
arrow.innerHTML='&#8595 hello';
//var arrowDown = $('<li>  \n &#8595 \n </li>');

//$('#addLoad').on('click', arrow, function(){
  //$(this).append(arrow);
  //$('.arrowDown').appendChild=arrow;
  //});
console.log(arrow.nodeType);
var x = document.getElementById("arrowMove");
console.log(arrow);
console.log($('#addLoad'));
$('.arrowDown').draggable();
$('#pull-left').draggable();
$("#addLoad").click(function () {
  var x = $('<li> &#8595<li/>').attr({
    'class': 'draggable'
  }).draggable().appendTo("#area");
});

console.log(x.nodeType);;
