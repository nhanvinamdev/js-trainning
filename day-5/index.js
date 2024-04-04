// 1.khối mã là code nằm trong ngoac nhọn

// best practice: mỗi hàm chỉ nên làm 1 công việc duy nhất thôi

function b() {
  var tru = 2 - 3;
}

// truyền tham số a, b để tăng tính tái sử dụng của hàm
// Tham số có thể là tất cả kiểu dữ liệu mình đã học như là Function, object, NaN...
// Không có giới hạn số lượng tham số

// trả ra 2 kiểu: 1 là string 2 là number (giá trị tổng)
// trả ra 1 là string hoặc 2 là number

function tong2So(a, b) {
  //   var name = "Nam";
  if (a === undefined || b === undefined) {
    return "Nhập thiếu a hoặc b rồi bạn eii";
  }

  var tong = a + b;

  return tong;
}

function tong2So() {
  console.log("@@@@@@");
}

// tong2So(); // nếu đặt trùng tên function, mặc định sẽ lấy hàm dưới cùng

// console.log(typeof tong2So());

// a(); // Muốn tính tổng thì dùng func a

// 2.
// alert("Ahihi");

// 4.
// Có thể định nghĩa hàm trong hàm được không?: Có

function getFullName(firstName) {
  return function getLastName(lastName) {
    return `${firstName} ${lastName}`;
  };
}

// console.log(getFullName("Nam")("Nhan"));

// 5.
// Declaration function
function ahi() {}

// Expression function

// anonymous function: Nghĩa là function ko có tên
const tinhtong = function (a, b) {
  return a + b;
};

// console.log(tinhtong(1, 2));

// ng ta ngầm hiểu sẽ tính tỗng sau 1s
// setTimeout(function tinhtong() {
//   console.log(1 + 2);
// }, 1000);
