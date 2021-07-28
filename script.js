// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function () {
//   console.log("CLICK!!!");
// });

// SHOPPING LIST

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

//Length Function
function inputLength() {
  return input.value.length;
}

function listLength() {
  return li.length;
}

// Adding new element
function createListElement() {
  var listItem = document.createElement("LI");
  listItem.setAttribute("class", "removeButton");
  listItem.appendChild(document.createTextNode(input.value));
  ul.appendChild(listItem);
  input.value = "";

  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete!"));
  listItem.appendChild(btn);
  btn.onclick = removeParent;
}

// Adding li after click
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Adding li after keypress
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// Toggling a strike throught after click
function toggleClassAfterClick(c) {
  if (c.target.tagName === "LI") {
    c.target.classList.toggle("done");
  }
}

// Adding button "delete" to list item
function deleteButtoni() {
  var delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("Delete!"));
  li[i].appendChild(delBtn);
  delBtn.onclick = removeParent;
}

//Executing deleteButton
function executingButton() {
  for (i = 0; i < listLength(); i++) {
    deleteButtoni();
  }
}

// Removing button "delete" to each list item
function removeParent(evt) {
  var dol = evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);
// console.log("click is working");
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleClassAfterClick);
executingButton();

// input.addEventListener("keypress", function (event) {
//   // console.log(event);
//   if (inputLength() > 0 && event.keyCode === 13) {
//     createListElement();
// To refactore the code, we can add a function to used repeat function
// in this case we have craeteListElement, same for input.value.length
// var li = document.createElement("li");
// li.appendChild(document.createTextNode(input.value));
// ul.appendChild(li);
// input.value = "";
//   }
// })

// COLOR GENERATOR

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonColor = document.getElementById("random");

// console.log(css);
// console.log(color1);
// console.log(color2);
//console.log(button);
//console.log(Math.floor(49.97));

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function randomBg() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);
  var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
  var bgColor2 = "rgb(" + a + "," + b + "," + c + ")";
  body.style.background =
    "linear-gradient(to right, " + bgColor1 + ", " + bgColor2 + ")";
  css.textContent = body.style.background + ";";
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
buttonColor.addEventListener("click", randomBg);

//we can install the function into index.html by
//adding oninput="setGradient()"
