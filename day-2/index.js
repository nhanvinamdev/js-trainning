// 2 bước khai báo biến
var a; // tạo 1 vùng nhớ trong RAM
a = 1; // = null

// null vs undified khác nhau chổ nào

// Tham trị

const fullName = "Nhan Vi Nam";

var number = 6;

var nan = 0 / 0;

var a = undefined;

var b = null;

const mySymbol = Symbol("Some test");

// console.log("mySymbol", mySymbol);

// Tham chiếu: tạo ô nhớ và lưu cái địa chỉ #0x12314
// array

var mssvs = [1, "nam", 3, 4, 5, 6];

var students = [
  {
    name: "Nam",
    age: 18,
    heigh: 65,
    crush: null,
  },
  {
    name: "Nhi",
    age: 19,
    heigh: 65,
    crush: null,
  },
];

// object
var student = {
  name: "Nam",
  age: 18,
  heigh: 65,
  crush: null,
};

var dog = {
  name: "Boby",
  age: 1,
};

// function (hàm) // Đảm nhiệm một chức năng duy nhất
function run() {
  console.log("I am running....");
  console.log("Ahihi đồ ngốc");
}

// execute
// run();

function logger(info) {
  // gọi api
  // ghi log

  console.log("Info:", info);
  // return void
}

function total(a, b) {
  return a + b; // trả ra mục đích của hàm
}

function divide(a, b) {
  return a / b;
}

function caculate() {
  var _sum = total(3, 4);
  var _divide = divide(8, 4);

  logger(_sum);
}

caculate();

var _sum = total(8, 10);
console.log("_sum:", _sum);

// Tại sao lại chia làm 2 loại?
// Tham trị: lưu giá trị vào ô nhớ : Ví dụ var a = 1 => lưu giá trị 1 vào ô nhớ
// Tham chiếu: Lưu địa chỉ vào ô nhớ (nặng quá lưu méo nổi)
