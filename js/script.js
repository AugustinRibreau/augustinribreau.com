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

helloText.addEventListener("click", function() {
  if (click == 1) {
    click = 0;
    textChangeColor.classList.remove("colorChange");
    navText.classList.remove("colorChange");
    linksTextTwitter.classList.remove("colorChange");
    linksTextLinkedin.classList.remove("colorChange");
    linksTextGithub.classList.remove("colorChange");
    linksTextInstagram.classList.remove("colorChange");
    linksTextTechno.classList.remove("colorChange");
    btsTitle.classList.remove("colorChange");
    textEmailColor.classList.remove("colorChange");
    helloText.classList.remove("colorGreyTitle");
    main.classList.remove("backgroundBlack");
  } else {
    textChangeColor.classList.add("colorChange");
    navText.classList.add("colorChange");
    linksTextTwitter.classList.add("colorChange");
    linksTextLinkedin.classList.add("colorChange");
    linksTextGithub.classList.add("colorChange");
    linksTextInstagram.classList.add("colorChange");
    linksTextTechno.classList.add("colorChange");
    btsTitle.classList.add("colorChange");
    textEmailColor.classList.add("colorChange");
    helloText.classList.add("colorGreyTitle");
    main.classList.add("backgroundBlack");
    click = 1;
  }
});
