// Viết hàm truyền vào tham số n:
// 1. In các số chẵn từ 1 -> n

function bt1(n) {
  let i = 0;

  for (; i <= n; i += 2) {
    console.log(i);
  }

  while (i <= n) {
    console.log(i);
    i += 2;
  }

  do {
    console.log(i);
    i += 2;
  } while (i <= n);
}

// bt1(10);

// 2. In các số lẽ từ 1 -> n Tương tự bài trên

// 3. tính tổng từ 1 đến số n đó (S = 1 + 2 + 3 + ... + n)
function bt3(n) {
  let sum = 0;
  //   for (let i = 0; i <= n; i++) {
  //     sum += i;
  //   }

  let i = 0;
  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

// console.log(bt3(10));

// 4. tính tích từ 1 đến số n đó (S = 1.2.3.4.5. ... .n)
function bt4(n) {
  let multi = 1;
  let i = 1;
  for (; i <= n; i++) {
    multi *= i;
  }
  return multi;
}

// console.log(bt4(4));

// 5. In ra màn hình giá trị của S = 1^2 + 2^2 + 3^2 + ... + n^2.

// function bt5(n) {
//   let sum = 0;
//   let i = 1;
//   for (; i <= n; i++) {
//     sum += Math.pow(i, 2);
//   }
//   return sum;
// }

// console.log(bt5(3));

// 6. In ra màn hình các số chia hết cho 5 từ 1 đến n. (VD: n = 20 -> 5 10 15 20)
// 7. Tính số lượng phần tử trong dãy số (12345 -> 5)

function bt7(n) {
  let count = 0;
  let _n = Math.abs(n);

  for (; _n > 0; _n = Math.floor(_n / 10)) {
    count++;
  }

  //   while (_n > 0) {
  //     count++;
  //     _n = Math.floor(_n / 10);
  //   }

  return count;
}

// console.log(bt7(12345));

// 8. Tính tổng số lượng phần tử trong dãy số (1234 -> 10)

function bt8(n) {
  let sum = 0;
  let _n = Math.abs(n);
  while (_n > 0) {
    sum += _n % 10;
    _n = Math.floor(_n / 10);
  }

  return sum;
}

// console.log(bt8(1111));

// 9. Bảng cữu chương 1 đến 9
function bt9(bcc) {
  let i = 1;
  for (; i <= 10 && bcc > 1 && bcc < 10; i++) {
    console.log(`${bcc} x ${i} = ${bcc * i}`);
  }
  console.log(`Không có bản cửu chương ${bcc}`);
}

// bt9(10);

// 10. Tính giả trị của biểu thức S = 1.2 + 2.3 + 3.4 + ... + n ( n + 1 )
function bt10(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * (i + 1);
  }
  return sum;
}
// console.log(bt10(2));

// 11. Viêt hàm truyền vào 2 số a và b, Tìm tổng tất cả các số chẵn và lẻ nằm giữa
// hai số đã được nhập (a = 5, b = 9 => tổng số lẻ = 21, tổng số chẵn = 14)

function bt11(a, b) {
  let tongLe = 0;
  let tongChan = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) tongChan += i;
    else tongLe += i;
  }

  return {
    tongLe,
    tongChan,
  };
}
// console.log(bt11(5, 9));

// 12. In bảng cửu chương rút gọn: Bảng cửu chương rút gọn là bảng có hàng là kết quả của phép nhân một số với các giá trị từ 1 tới 10. Chúng ta sẽ in 9 hàng tương ứng với các số từ 2 tới 10.
function bt12() {
  for (let num = 2; num <= 10; num++) {
    console.log(`\n${num} x 1 = ${num * 1}`);
    for (let multiplier = 2; multiplier <= 10; multiplier++) {
      console.log(`${num} x ${multiplier} = ${num * multiplier}`);
    }
  }
}

// bt12();
