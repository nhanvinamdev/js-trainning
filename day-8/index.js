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

function bangCuuChuong2() {
  // Max = 10 lần -> i <= 10
  // Giá trị khởi tạo = 1

  for (let i = 1; i <= 10; i = i + 1) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}
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

do {
  console.log("i:", i);

  // if (i === 2) break;
  i++;
} while (i < 5);

console.log("out side");
