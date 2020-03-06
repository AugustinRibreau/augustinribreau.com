var circleButton = document.getElementById("inner-circle-button");
var main = document.getElementById("main");
var buttonArea = document.getElementById("buttonArea");

circleButton.addEventListener("click", function() {
  buttonArea.classList.add("d-none");
  main.classList.add("d-flex");
  main.classList.add("zoomIn");
});
