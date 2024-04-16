// // // BASIC

// // // Viết hàm truyền vào tham số n:
// // // 1. In các số chẵn từ 1 -> n
// // function bT1(n) {
// //   //   for (let i = 2; i <= n; i = i + 2) {
// //   //     // if (i % 2 === 0) console.log(i);
// //   //     console.log(i);
// //   //   }
// //   let i = 2;
// //   while (i <= n) {
// //     console.log(i);
// //     i = i + 2;
// //   }
// // }

// // // console.log();
// // // bT1(10);

// // // 2. In các số lẽ từ 1 -> n
// // function bT2(n) {
// //   for (let i = 1; i <= n; i = i + 2) console.log(i);
// // }
// // // bT2(11);
// // // 3. tính tổng từ 1 đến số n đó (S = 1 + 2 + 3 + ... + n)
// function bT3(n) {
//   let i = 1;
//   let sum = 0;
//   //   for (; i <= n; i++) {
//   //     sum = sum + i;
//   //   }
//   while (i <= n) {
//     sum = sum + i;
//     i++;
//   }
//   return sum;
// }
// console.log(bT3(3));

// // 4. tính tích từ 1 đến số n đó (S = 1.2.3.4.5. ... .n)
// function bT4(n) {
//   let i = 1;
//   let m = 1;
//   for (; i <= n; i++) {
//     m = m * i;
//   }
//   return m;
// }
// console.log(bT4(4));

// // // 5. In ra màn hình giá trị của S = 1^2 + 2^2 + 3^2 + ... + n^2.
// function bT5(n) {
//   let i = 1;
//   let S = 0;
//   for (; i <= n; i++) {
//     S = S + Math.pow(i, 2);
//     //S+=Math.pow(i,2)
//   }
//   return S;
// }
// console.log(bT5(11));

// // 6. In ra màn hình các số chia hết cho 5 từ 1 đến n.
// (VD: n = 20 -> 5 10 15 20)
function bT6(n) {
  let i = 1;
  for (; i <= n; i++) {
    if (i % 5 === 0) console.log(i);
  }
}
bT6(10);

// 7. Tính số lượng phần tử trong dãy số (12345 -> 5)
function bT7(n) {
  let c = Math.abs(n);
  let i = 0;
  for (; c > 0; c = Math.floor(c / 10)) {
    i++;
  }
  return i;
}
console.log(bT7(10));

// var c = Math.floor(123 / 10);
// console.log(Math.floor(c / 10));
// // 8. Tính tổng số lượng phần tử trong dãy số (1234 -> 10)
function bT8(n) {
  let c = Math.abs(n);
  let sum = 0;
  for (; c > 0; c = Math.floor(c / 10)) {
    sum = sum + (c % 10);
  }
  return sum;
}
console.log(bT8(127));

// // // 9. Bảng cữu chương 1 đến 9
function bT9(n) {
  let i = 1;
  for (; i <= 10 && n >= 1 && n <= 9; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
  console.log(" nhap so tu 1 den 9");
}

bT9(11);

// // 10. Tính giả trị của biểu thức S = 1.2 + 2.3 + 3.4 + ... + n( n + 1 )
// function bT10(n) {
//   let i = 1;
//   let S = 0;
//   for (; i <= n; i++) {
//     S += i * (i + 1);
//   }
//   return S;
// }
// console.log(bT10(2));

// // // 11. Viêt hàm truyền vào 2 số a và b, Tìm tổng tất cả các số chẵn và lẻ nằm giữa
// // // hai số đã được nhập (a = 5, b = 9 => tổng số lẻ = 21, tổng số chẵn = 14)

// function bt11(a, b) {
//   let i = a;
//   let sumLe = 0;
//   let sumChan = 0;

//   for (; i <= b; i++) {
//     if (i % 2 !== 0) {
//       sumLe = sumLe + i;
//     } else sumChan = sumChan + i;
//   }
//   console.log("Tong so le", sumLe);
//   console.log("Tong so chan", sumChan);
// }
// bt11(5, 9);
// 1 2 3 4 5 6 7 8 9 10 11

// // 12. In bảng cửu chương rút gọn: Bảng cửu chương rút gọn là bảng
// có hàng là kết quả của phép nhân một số với các giá trị từ 1 tới 10.
// Chúng ta sẽ in 9 hàng tương ứng với các số từ 2 tới 10.
function bt12() {
  for (let num = 2; num <= 10; num++) {
    console.log(`\n${num} x 1 = ${num * 1}`);
    for (let multiplier = 2; multiplier <= 10; multiplier++) {
      console.log(`${num} x ${multiplier} = ${num * multiplier}`);
    }
  }
}

bt12();

// // // MAP, FILTER, FIND
// // /**
// //  * Input: numbers = [1, 2, 3, 4, 5];
// //  * Output : _numbers = [2, 4 , 6, 8, 10]
// //  *
// // const numbers = [1, 2, 3, 4, 5];
// // var _numbers = numbers.map(function(number){
// //     return number * 2
// // })
// // console.log(_numbers);

// //  * Input: const strings = ["hello", "world", "javascript"];
// //  * Output: ["HELLO", "WORLD", "JAVASCRIPT"]
// const strings = ["hello", "world", "javascript"];
// var _strings = strings.map(function (string) {
//   return string.toUpperCase();
// });
// console.log(_strings);

// //  * Input: const objects = [{ name: "John" }, { name: "Jane" }, { name: "Peter" }];
// //  * Output: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Peter" }]

// // const objects = [{ name: "John" }, { name: "Jane" }, { name: "Peter" }];

// var _objects = objects.map(function (object, index) {
//   return {
//     ID: index + 1,
//     Name: object.name,
//   };
// });
// console.log(_objects);

//  *Input: const products = [{ id: 1, name: "Laptop", price: 1000 }, { id: 2, name: "Phone", price: 500 }, { id: 3, name: "Tablet", price: 300 }];
//  * Với discountedPrice = price * 0.8,
// shippingFee = Nếu price >= 500 thì là 0, ngược lại là phí 50k
//  * Output: [{ id: 1, discountedPrice: 800, shippingFee: 0 }, { id: 2, discountedPrice: 400, shippingFee: 0 }, { id: 3, discountedPrice: 240, shippingFee: 50 }]
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 300 },
// ];

// var _products = products.map(function (product) {
//   return {
//     id: product.id,
//     discountedPrice: product.price * 0.8,
//     shippingFee: product.price >= 500 ? 0 : "50k",
//   };
// });
// console.log(_products);

// //  * Input: const coordinates = [
// //   { la2.titude: 37.783333, longitude: -122.416667 },
// //   { latitude: 40.7128, longitude: -74.0060 },
// //   { latitude: 34.0522, longitude: -118.2437 }
// //   ];
// //   Output: ["(37.783333, -122.416667)", "(40.7128, -74.0060)", "(34.0522, -118.2437)"]
const coordinates = [
  { latitude: 37.783333, longitude: -122.416667 },
  { latitude: 40.7128, longitude: -74.006 },
  { latitude: 34.0522, longitude: -118.2437 },
];
var _coordinates = coordinates.map(function (coordinate) {
  return `(${coordinate.latitude} ${coordinate.longitude})`;
});
console.log(_coordinates);

// //   FILTER:
//   Input: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   Output: [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var _numbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(_numbers);

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Watch", price: 200 },
];
// //  Tìm các sản phẩm có giá cao hơn $300 trong một mảng:
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
//   { name: "Watch", price: 200 },
// ];
// var _products = products.filter(function (product) {
//   return product.price > 300;
// });
// console.log(_products);

// //   Input: const strings = ["Hello", "", "World", "", "JavaScript"];
// //   Output: ["Hel0lo", "World", "JavaScript"]

// const strings = ["Hello", "", "World", "", "JavaScript"];
// var _strings = strings.filter(function (string) {
//   return string !== "";
// });
// console.log(_strings);

//   Input: const users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 32 },
//   { name: "Peter", age: 18 },
//   { name: "Mary", age: 28 }
// ];
// // Output: Tìm các người dùng có độ tuổi từ 20 đến duoi 30 trong một mảng:
// //  */
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Mary", age: 28 },
];
var _users = users.filter(function (user) {
  return user.age >= 20 && user.age < 30;
});
console.log(_users);
