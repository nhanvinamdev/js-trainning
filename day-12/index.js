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

// inputTextElement.onkeyup = function (e) {
//   //   console.log(e.target.value);
// };

// inputTextElement.onkeydown = function (e) {
//   console.log(e.target.value);
// };

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

// III. Một số DOM events khác
// 1. preventDefault: loại bỏ sự kiện mặc định của trình duyệt

// var buttonElement = document.querySelector("form > button[type='submit']");
// buttonElement.onclick = function (e) {
//   // e.preventDefault();
//   console.log("clicked");
// };

// document
//   .getElementById("myCheckbox")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//   });

// 2. stopPropagation: loại bỏ sự kiện nổi bọt
// function func1(event) {
//   alert("DIV 1");
//   event.stopPropagation();
// }

// function func2() {
//   alert("DIV 2");
// }

// // IV: Event listener
// // 1. Xữ lý nhiều việc khi 1 event xảy ra
function viec1() {
  console.log("viec 1");
}

function viec2() {
  console.log("viec 2");
}

function viec3() {
  console.log("viec 3");
}

var btn = document.querySelector("button");

// btn.onclick = function () {
//   viec1();
//   viec2();
//   viec3();
// };

btn.addEventListener("click", viec1);
// btn.addEventListener("click", viec2);
// btn.addEventListener("click", viec3);

setTimeout(() => {
  btn.removeEventListener("click", viec1);
}, 3000);

// 2. Lắng nghe / hủy bỏ lắng nghe
