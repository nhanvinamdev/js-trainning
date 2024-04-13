// BASIC

// Viết hàm truyền vào tham số n:
// 1. In các số chẵn từ 1 -> n
function bT1(n) {
  //   for (let i = 2; i <= n; i = i + 2) {
  //     // if (i % 2 === 0) console.log(i);
  //     console.log(i);
  //   }
  let i = 2;
  while (i <= n) {
    console.log(i);
    i = i + 2;
  }
}

// console.log();
// bT1(10);

// 2. In các số lẽ từ 1 -> n
function bT2(n) {
  for (let i = 1; i <= n; i = i + 2) console.log(i);
}
// bT2(11);
// 3. tính tổng từ 1 đến số n đó (S = 1 + 2 + 3 + ... + n)
function bT3(n) {
  let i = 1;
  let sum = 0;
  //   for (; i <= n; i++) {
  //     sum = sum + i;
  //   }
  while (i <= n) {
    sum = sum + i;
    i++;
  }
  return sum;
}
// console.log(bT3(3));

// 4. tính tích từ 1 đến số n đó (S = 1.2.3.4.5. ... .n)
// function bT4(n) {
//   let i = 1;
//   let m = 1;
//   for (; i <= n; i++) {
//     m = m * i;
//   }
//   return m;
// }
// console.log(bT4(4));

// 5. In ra màn hình giá trị của S = 1^2 + 2^2 + 3^2 + ... + n^2.
// 6. In ra màn hình các số chia hết cho 5 từ 1 đến n. (VD: n = 20 -> 5 10 15 20)
// 7. Tính số lượng phần tử trong dãy số (12345 -> 5)
// 8. Tính tổng số lượng phần tử trong dãy số (1234 -> 10)
// 9. Bảng cữu chương 1 đến 9
// 10. Tính giả trị của biểu thức S = 1.2 + 2.3 + 3.4 + ... + n( n + 1 )
// 11. Viêt hàm truyền vào 2 số a và b, Tìm tổng tất cả các số chẵn và lẻ nằm giữa
// hai số đã được nhập (a = 5, b = 9 => tổng số lẻ = 21, tổng số chẵn = 14)

// 12. In bảng cửu chương rút gọn: Bảng cửu chương rút gọn là bảng có hàng là kết quả của phép nhân một số với các giá trị từ 1 tới 10. Chúng ta sẽ in 9 hàng tương ứng với các số từ 2 tới 10.
