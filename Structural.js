/**
 * Created by John on 10/8/2015.
 */
var friends = document.getElementById("beam");
console.log(friends.innerHTML);
var x = 1;
friends.onclick= function() {
  x=x*-1;
  console.log(x);
  if (x == 1) {
    document.getElementsByClassName("hidden")[0].style.display = "none";
    document.getElementsByClassName("hidden")[1].style.display = "none";
    console.log("hello");
  }
  else if (x == -1) {
    document.getElementsByClassName("hidden")[0].style.display = "block";
    document.getElementsByClassName("hidden")[1].style.display = "block";
    console.log("HI");
  }
}


