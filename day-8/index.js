// For
// for (let index = 0; index < 10; index++) {
//   // Block of statements
//   console.log("index", index);
// }

// Thứ tự chạy vòng lặp
// Initial: index = 0
// Condition : index <= 10 -> true / false
// Updation : index++ -> là viết tắt của index = index + 1

/**
 * index = 0
 * Lần lặp 1
 * 0 <= 10 -> true
 * console.log("index:", 0)
 * index = 0 + 1 -> index = 1
 *
 * Lần lặp 2
 * 1 <= 10 -> true
 * console.log("index:", 1)
 * index = 1 + 1 -> index = 2
 * .
 * .
 * .
 * lần lặp cuối cùng
 * 10 < 10 -> false
 * Kết thúc vòng lặp
 */

// function bangCuuChuong2() {
//   // Max = 10 lần -> i <= 10
//   // Giá trị khởi tạo = 1

//   for (let i = 1; i <= 10; i = i + 1) {
//     console.log(`2 x ${i} = ${2 * i}`);
//   }
// }
// 2 x 1 = 2
// 2 x 10 = 20

// While

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Viết hàm truyền vào tham số n:
// Tính số lượng phần tử trong dãy số (12345 -> 5)

// 12345 -> 12345 / 10 -> 1234 -> dem = 1
// 1234 -> 1234 / 10 -> 123 -> dem = 2
// 1  -> 1 / 10 -> dem = 5

// function demSoLuongChuSo(n) {
//   let dem = 0;
//   let _n = Math.abs(n); // absolute |-1| -> 1

//   while (_n > 0) {
//     dem++;
//     _n = Math.floor(_n / 10); // làm tròn xuống

//     console.log(Math.floor(_n / 10));
//   }

//   return dem;
// }

// console.log(demSoLuongChuSo(12345));

let i = 1;
// while (i < 10) {
//   console.log("Không chạy vô");
// }

// console.log("out side");

// Do While

// do {
//   console.log("i:", i);

//   // if (i === 2) break;
//   i++;
// } while (i < 5);

// console.log("out side");

// console.log(languages[0]);
// console.log(languages[1]);

// Duyệt mảng
// var languages = ["Javascript", "Java", "Ruby", "PHP", "AAA", "BBB"];

// for (let index = 0; index < languages.length; index++) {
//   const element = languages[index];
//   console.log("element:", element.toUpperCase());
// }

var languages = ["Javascript", "Java", "Ruby", "PHP", "AAA", "BBB"];

// for of : Không cần biết giá trị của index
// for (const language of languages) {
//   console.log(language);
// }
//- in ra các phần tử trong mảng không cần điều kiện với index

// for in
let user = {
  name: "Nam",
  age: 18,
};

user.name;
user["name"];
for (const key in user) {
  // let value = user[key];
  console.log(key);
}
//foreach

// languages.forEach(function (value, index) {
//   // localStorage.setItem(index, value);
//   console.log(value);
//   return value;
// });

// localStorage.setItem("0", languages[0]);
// localStorage.setItem("1", languages[1]);
// localStorage.setItem("2", languages[2]);
// localStorage.setItem("3", languages[3]);
// localStorage.setItem("4", languages[4]);

// map: Dùng để format lại array thành 1 array mới mong muốn

// Điểm khác nhau giữa map và foreach:
// map : Tạo ra mảng mới và có thể gán nó vào 1 biến
// foreach: không thể
// var a = languages.map(function (value, index) {
//   return `${value}`.toUpperCase();
// });
// console.log(a);

// filter
// Điều kiện filter phải là true hoặc false
var users = [
  {
    name: "Nam",
    age: 25,
  },
  {
    name: "A",
    age: 18,
  },
  {
    name: "Như",
    age: 20,
  },
];

// var a = users.filter(function (user) {
//   // return true hoặc false
//   return user.age < 25;
// });

// find
// Sự khác biệt giữa filter và find là filter trả ra 1 mảng các giá trị thỏa điều kiện
// Còn find sẽ trả ra duy nhất một giá trị đầu tiên tìm thấy (object)

// var a = users.find(function (user) {
//   return user.age < 25;
// });
// console.log(a.name);

// findIndex trã ra index thỏa mãn điều kiện cần tìm
// var a = users.findIndex(function (user) {
//   return user.age < 25;
// });

// console.log(a);
