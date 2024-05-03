// 2. Dùng JS để tương tác với DOM events

// var h1Element = document.querySelector("h1");

// let count = 0;

// h1Element.onclick = function () {
//   count++;
//   console.log(count);
// };

// var h1Elements = document.querySelectorAll("h1");

// for (let i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function (event) {
//     // console.log(h1Elements[i].innerText);
//     console.log(event.target);
//   };
// }

// input
var inputTextElement = document.querySelector("input[type='text']");

// Nhược điểm của onchange là phải blur ra bên ngoài mới thực hiện func
// inputTextElement.onchange = function (e) {
//   console.log(e.target.value);
// };

// inputTextElement.oninput = function (e) {
//   console.log(e.target.value);
// };

inputTextElement.onkeyup = function (e) {
  //   console.log(e.target.value);
};

inputTextElement.onkeydown = function (e) {
  console.log(e.target.value);
};

// checkbox
var inputCheckboxElement = document.querySelector("input[type='checkbox']");

// inputCheckboxElement.onchange = function (e) {
//   console.log(e.target.checked);
// };

// select
var selectElement = document.querySelector("select");

// selectElement.oninput = function (e) {
//   console.log(e);
// };
