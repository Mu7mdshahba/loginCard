let mail = document.getElementById("mail");
let section = document.querySelector("section");
let deimsBox = document.getElementById("demis");
let deimsBtn = document.getElementById("demis-btn");
let submitBtn = document.getElementById("submit");
let backgr = document.querySelector(".backgr-img");
let pass = document.querySelector("#pass");
let suVal = document.querySelector("#suVal");
let h2 = document.querySelector("h2");
let img;
let mobsrc;
let desctopSrc;

submitBtn.addEventListener("click", switchpage);
deimsBtn.addEventListener("click", removePage);

checkWidth();
function switchpage() {
  if (mail.value != "") {
    deimsBox.style.display = "grid";
    section.style.display = "none";
  } else {
    mail.focus();
    mail.placeholder = "write Your mail here";
  }
  if (screen.availWidth < 768) {
    desctopimg.src = desctopSrc;
  }
  validation(mail.value);
}
function removePage() {
  deimsBox.style.display = "none";
  section.style.display = "grid";
}

function checkWidth() {
  if (screen.availWidth >= 768) {
    img = document.createElement("img");
    img.src = "assets/images/illustration-sign-up-desktop.svg";
  }
  if (screen.availWidth < 768) {
    img = document.createElement("img");
    img.src = "assets/images/illustration-sign-up-mobile.svg";
  }
  backgr.append(img);
}
// checkWidth();
// mobsrc = "assets/images/illustration-sign-up-mobile.svg";
// desctopSrc = "assets/images/illustration-sign-up-desktop.svg";

// console.log(mobsrc);

// console.log(screen.availWidth)

// new form validation
let datArr = [];
let datPas = {};

function validateMail(ma) {
  var mailformat = /\w+@gmail.com/;
  if (mailformat.test(ma)) {
    return true;
  }
  else {
    return false
  }
}
function validatePass(pas) {
  const pasChck = /\w+n#/;
  if (pasChck.test(pas)) {

    return true;
  } else {
    return false;
  }
}

// add to localStorage

suVal.addEventListener("click", (e) => {
  e.preventDefault();
  if (mail.value != "" && pass.value != "") {
    validateMail(mail.value);
    validatePass(pass.value);
    h2.textContent = "welcome with you ,we will mail you soon";
    h2.style.color = 'green'
    toLocalStr(mail.value, pass.value);
    mail.value = "";
    pass.value =""
  }
  else{
    h2.textContent = "Please inter valid data";
    h2.style.color = 'red'
  }
});
function toLocalStr(mal, pa) {
  datPas.mail = mal;
  datPas.pass = pa;
  datArr.push(datPas);
  console.log(datPas);
  localStorage.setItem("dataArr", JSON.stringify(datArr));1
}
