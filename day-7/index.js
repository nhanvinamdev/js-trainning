"use strict";

// var student = {
//   // Thuộc tính
//   mssv: "17025741",
//   fullName: "Nhan Vi Nam",
//   age: 18,

//   // Phương thức
//   run: function (a, b) {},
//   speak: function () {},
// };

// var tinhToan = {
//   tong: function () {},
//   hieu: function () {},
//   nhan: function () {},
//   chia: function () {},
// };

// var user = {
//   name: "",
//   age: "",
// };

//II. Thao tác với object
// Lấy một key từ 1 object

// 1 object sẽ bao gồm key và value

// var student = {
//   // Thuộc tính
//   mssv: "17025741",
//   fullName: "Nhan Vi Nam",
//   age: 18,
//   //   "full-name": "Yen nhu",

//   // Phương thức
//   run: function (a, b) {},
//   speak: function () {},
// };

// c1 : Lấy thông qua dấu . key
// console.log(student.fullName);

// // c2 : Lấy thông qua dấu []: Dùng cho kí tự đặc biệt của key
// console.log(student.fullName);
// console.log(student["full-name"]);

// Thêm một key vào object

// Nếu . một key đã tồn tại thì sẽ là update
// student.mssv = "AAA";

// Nếu . một key chưa tồn tại thì là create
// student.name = "AAA"

// student["full-$%name"] = "Yen Nhu";

// Xóa một key ra khỏi object

// delete student.fullName;
// delete student.run;

// const { run, speak, ...rest } = student;

// console.log("rest", rest);

// console.log(student);

// class Student {
//   mssv;
//   fullName;
//   age;

//   constructor(mssv, fullName, age) {
//     this.mssv = mssv;
//     this.fullName = fullName;
//     this.age = age;
//   }

//   // Phương thức => Hàm
//   getFullName() {
//     return this.fullName;
//   }
//   getAge() {
//     return this.age;
//   }
// }

// var student1 = new Student("1723432", "Nhan Vi Nam", 20);
// var student2 = new Student("12323423", "Yen nhu", 18);

// console.log("student1:", student1.getAge());

// var studentaasdsdfsf = {
//   fullName: "Nhan Vi Nam",
//   getFullName: function () {
//     return this.fullName;
//   },
// };

// Object.keys
// console.log(Object.keys(student));

// Object.values
// console.log(Object.values(student));

// Object.entries

// console.log(Object.entries(student));

//  Object.fromEntries

// var studentMap = [
//   ["mssv", "17025741"],
//   ["fullName", "Nhan Vi Nam"],
//   ["age", 18],
// ];

// console.log(Object.fromEntries(studentMap));

// Object.is

// var a = NaN;
// var b = NaN;

// console.log(typeof a, typeof b);
// console.log("===:", a === b);
// console.log("Object.is:", Object.is(a, b));

// Object.freeze
const student = {
  // Thuộc tính
  mssv: "17025741",
  fullName: "Nhan Vi Nam",
  age: 18,
};

// Object.freeze(student);

// student.mssv = 1;
// student.aaa = "asfdsdf";
// delete student.age;

// Object.seal
// Object.seal(student);

// student.mssv = 1;
// student.asasdasd = "asdasdasd";

console.log(student);
