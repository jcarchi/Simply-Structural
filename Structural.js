/**
 * Created by John on 10/8/2015.
 */
var friends = document.getElementById("beam");
console.log(friends.innerHTML);

friends.onclick= function() {
  var x = 1;
  x=x*-1;
  console.log(x);
  if (x = 1) {
    document.getElementById("hidden1").style.display = "none";
    console.log("hello");
  }
  else if (x = -1) {
    document.getElementById("hidden1").style.display = "none";
    console.log("HI");
  }
}


