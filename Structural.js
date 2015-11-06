/**
 * Created by John on 10/8/2015.
 */
var beamAttributes = document.getElementById("beam");
var steelAttributes = document.getElementById("steel");
var steelAttributes1=document.getElementsByClassName("hidden1");
var x = 1;
beamAttributes.onclick= function() {
  x=x*-1;
  if (x == 1) {
    document.getElementsByClassName("hidden")[0].style.display = "";
    document.getElementsByClassName("hidden")[1].style.display = "";
  }
  else if (x == -1) {
    document.getElementsByClassName("hidden")[0].style.display="block";
    document.getElementsByClassName("hidden")[1].style.display = "block";
  }
  for (i = 0; i < steelAttributes1.length; i++) {
    document.getElementsByClassName("hidden1")[i].style.display = "";
  }

}
var y = 1;
steelAttributes.onclick = function() {
  y=y*-1;
  if (y == 1) {
    console.log(steelAttributes1.length);
    for (i = 0; i < steelAttributes1.length; i++) {
      document.getElementsByClassName("hidden1")[i].style.display = "";

    }
  }
  else if (y == -1) {
      for (i = 0; i < steelAttributes1.length; i++) {
        document.getElementsByClassName("hidden1")[i].style.display = "block";
      }
    }
  }
