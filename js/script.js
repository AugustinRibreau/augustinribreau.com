var helloText = document.getElementById("helloText");
var textChangeColor = document.getElementById("textChangeColor");
var navText = document.getElementById("navText");
var linksTextTwitter = document.getElementById("linksTextTwitter");
var linksTextLinkedin = document.getElementById("linksTextLinkedin");
var linksTextGithub = document.getElementById("linksTextGithub");
var linksTextInstagram = document.getElementById("linksTextInstagram");
var linksTextTechno = document.getElementById("linksTextTechno");
var btsTitle = document.getElementById("btsTitle");
var textEmailColor = document.getElementById("textEmailColor");
var main = document.getElementById("main");
var click = 0;

var allContent = [
  textChangeColor,
  navText,
  linksTextTwitter,
  linksTextLinkedin,
  linksTextGithub,
  linksTextInstagram,
  textEmailColor,
];

helloText.addEventListener("click", function () {
  if (click == 1) {
    click = 0;
    for (var i = 0; i < allContent.length; i++) {
      allContent[i].classList.remove("colorChange");
    }
    helloText.classList.remove("colorGreyTitle");
    main.classList.remove("backgroundBlack");
  } else {
    for (var i = 0; i < allContent.length; i++) {
      allContent[i].classList.add("colorChange");
    }
    helloText.classList.add("colorGreyTitle");
    main.classList.add("backgroundBlack");
    click = 1;
  }
});
