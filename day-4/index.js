//I. if else else if

// var a = 2;
// var b = 1;

// if (a > b) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

// // Falsy: Bao gồm 6 giá trị chính
// 1. 0
// 2. "" | ''
// 3. NaN
// 4. null
// 5. undefined
// 6. false

// var a = [];

// console.log(Boolean(a));

// if (a) {
//   console.log("Đúng");
// } else {
//   // Trường hợp cuối cùng có thể xãy ra
//   console.log("Sai");
// }

// Boolean
// true;
// false;

// else if
// var day = new Date().getDay();
// console.log("day:", day);

// if (day == 0) {
//   console.log("Hôm nay là Chủ Nhật");
// } else if (day == 1) {
//   console.log("Hôm nay là Thứ Hai");
// } else if (day == 2) {
//   console.log("Hôm nay là Thứ Ba");
// } else if (day == 3) {
//   console.log("Hôm nay là Thứ Tư");
// } else if (day == 4) {
//   console.log("Hôm nay là Thứ Năm");
// } else if (day == 5) {
//   console.log("Hôm nay là Thứ Sáu");
// } else {
//   console.log("Hôm nay là Thứ Bảy");
// }

// II. Switch case: 3 case trở lên dùng này!

// var day = new Date().getDay();

// switch (day) {
//   case 0: {
//     console.log("Hôm nay là Chủ Nhật");
//     break;
//   }

//   case 1: {
//     console.log("Hôm nay là Thứ Hai");
//     break;
//   }

//   default: {
//     console.log("Hôm nay là Thứ Bảy");
//     break;
//   }
// }

//III. Mảng trong JS (array)
// var js = "Javascript"
// var php = "PHP"
// var java = "java"

// Cách Tạo
var languages = ["Javascript", "PHP", "java"];
// var languages2 = new Array("Javascript", "PHP", "java");

// index 0 -> N
// element

// Lấy 1 element trong mảng
// console.log(languages[2]);
// => Chọn cách 1

// Kiểm tra data type: typeof

// const user = {
//   name: "Nam",
// };

// console.log(typeof languages);

// // Cách để phân biệt array hay ko array
// console.log(Array.isArray(languages));

// // lấy độ dài của mảng
// console.log(languages.length);

// 4.1
// console.log(languages.toString());

// 4.2
// console.log(languages.join(" *-* "));

// 4.3
// var test = languages.pop();

// console.log(languages.pop());

// 4.4
// languages.shift();

// 4.5

// languages.push("A", "B");

// console.log(languages);

// 4.6
// languages.push("A", "B");

// console.log(languages);

// 4.7

var languages = ["Javascript", "PHP", "java"];

// languages.splice(1, 1, "Ruby", "AAA");

 console.log(languages);

// // 4.8

// var _languages = languages.slice(1, 0);

// // step 1 : copy languages ra 1 biến khác
// // step 2: Thay đổi biến vừa mới tạo
// console.log(_languages);

// 4.9
// var languages2 = ["A", "B", "C"];

// console.log(languages.concat(languages2));
