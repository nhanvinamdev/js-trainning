// var h1Element = document.querySelector("h1");

// h1Element.onclick = function () {
//   console.log(Math.random());
// };

// var h1Elements = document.querySelectorAll("h1");

// for (let i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function (e) {
//     // console.log(h1Elements[i]);
//     // console.log(e.target);
//   };
// }

// input

let inputElement = document.querySelector('input[type="text"]');

// Lấy sau khi blur
// inputElement.onchange = function (e) {
//   console.log(e.target.value);
// };

let inputValue = "";
inputElement.oninput = function (e) {
  inputValue = e.target.value;
  //   console.log(inputValue);
};

// checkbox

let checkboxElement = document.querySelector('input[type="checkbox"]');
checkboxElement.onchange = function (e) {
  console.log(e.target.checked);
};

// select

let selectElement = document.querySelector("select");
selectElement.onchange = function (e) {
  console.log(e.target.value);
};

// - keyup/ down
inputElement.onkeydown = function (e) {
  // e.which
  console.log("down:", e.which);
};

inputElement.onkeyup = function (e) {
  console.log("up:", e.target.value);
};
