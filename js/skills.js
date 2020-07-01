var oneDotButton = document.getElementById("oneDotButton");
var twoDotButton = document.getElementById("twoDotButton");
var treeDotButton = document.getElementById("treeDotButton");
var fourDotButton = document.getElementById("fourDotButton");
var fiveDotButton = document.getElementById("fiveDotButton");
var obligatoryDotButton = document.getElementById("obligatoryDotButton");
var oneDotSection = document.getElementById("oneDotSection");
var twoDotSection = document.getElementById("twoDotSection");
var treeDotSection = document.getElementById("treeDotSection");
var fourDotSection = document.getElementById("fourDotSection");
var fiveDotSection = document.getElementById("fiveDotSection");
var obligatoryDotSection = document.getElementById("obligatoryDotSection");

oneDotButton.addEventListener("click", function () {
  display(oneDotSection);
});
twoDotButton.addEventListener("click", function () {
  display(twoDotSection);
});
treeDotButton.addEventListener("click", function () {
  display(treeDotSection);
});
fourDotButton.addEventListener("click", function () {
  display(fourDotSection);
});
fiveDotButton.addEventListener("click", function () {
  display(fiveDotSection);
});
obligatoryDotButton.addEventListener("click", function () {
  display(obligatoryDotSection);
});

function display(section) {
  oneDotSection.classList.add("d-none");
  oneDotSection.classList.remove("d-flex");
  twoDotSection.classList.add("d-none");
  twoDotSection.classList.remove("d-flex");
  treeDotSection.classList.add("d-none");
  treeDotSection.classList.remove("d-flex");
  fourDotSection.classList.add("d-none");
  fourDotSection.classList.remove("d-flex");
  fiveDotSection.classList.add("d-none");
  fiveDotSection.classList.remove("d-flex");
  obligatoryDotSection.classList.add("d-none");
  obligatoryDotSection.classList.remove("d-flex");
  section.classList.remove("d-none");
  section.classList.add("d-flex");
}
