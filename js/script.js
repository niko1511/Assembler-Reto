// event document addEventListener
document.getElementById("tab").addEventListener("click", tabMove);

var tab = document.getElementById("tab");
var cont = document.getElementById("content");
var point = document.getElementById("point");


tab.classList.toggle("slider-tab-off");
cont.classList.toggle("content-Max-Width");
//cont.classList.toggle("containerControl");
point.classList.toggle("navigation-manual-reduction");

// event touch move tab
function tabMove() {
  tab.classList.toggle("slider-tab");
  tab.classList.toggle("slider-tab-off");
  cont.classList.toggle("content-Max-Width");
  //cont.classList.toggle("containerControl");
  point.classList.toggle("navigation-manual-reduction");
}

//funtion for navigation automatic
//
var counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
