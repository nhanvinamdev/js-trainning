// Cho 3 số a, b, c. Viết hàm tính + - * / của 3 con số này
// function sum(a,b,c) {
//  var tong = a + b + c
//  return tong
// }

// console.log(sum(1,2,3));

// function hieu(a,b,c) {

//     return a - b - c
//    }

//    console.log(hieu(1,0,3));

// function chia(a,b)
// {
// //    if (b===0)
// //    {
// //     return "Vui long nhap gia tri cua b khac 0";
// //    }
// //     else return a / b
//     if(typeof a !== 'number' || typeof b !== 'number') return "b"
//     if(b === 0) return "a"
//     return a / b

// }
//     console.log(chia(9,0));

// Cho 2 số a, b. Viết hàm in ra "a lớn hơn b" nếu a > b và ngược lại
// function checkTypeNumber(a, b)
// {
//     if(typeof a !== 'number' || typeof b !== 'number') return false
//     return true
// }

// function compare(a,b) {
//     if(!checkTypeNumber(a, b)) return "Vui long nhap so"
//     if ( a > b ) return "A lon hon B"
//     if ( a === b ) return "A bang B"
//     return "A nho hon B"
// }
// console.log( compare("h",5));

// Viết hàm kiểm tra 1 số bất kì là số chẵn hay số lẽ, hàm trả ra 1 nếu là số chẵn, trả ra 0 nếu là số lẻ

// function checkTypeNumber(a)
// {
//     if(typeof a !== 'number') return false
//     return true
// }

// function compare(a) {
//     if(!checkTypeNumber(a)) return "Vui long nhap so"
//     if ( a % 2 === 0 ) return "So chan"
//     return "so le"
// }
// console.log( compare("s"));

// Viết hàm tính chu vi hình tròn và diện tính hình tròn

function checkTypeNumber(a) {
  if (typeof a !== "number") return false;
  return true;
}

function chuvi(d) {
  const PI = 3.14;
  if (!checkTypeNumber(d)) return "Vui long nhap so";
  return d * PI;
}
console.log(chuvi("s"));
