// có 2 cach tạo chuỗi
var a = "abc";
// var b = new String("new abc");

// Xem độ dài chuỗi
// a.length
// trong JS chỉ có 2 kiểu string vs array có phương thức .length
// console.log(a.length);

// template string `${}`: Công dụng là để truyền biến cho cái string

var lastName = "Nhan";
var firstName = "Nam";

// console.log(lastName + " " + firstName);

// console.log(`asdasduashdu ${lastName} ${firstName} dsufsudfguisdfgs`);

// II. Làm việc với chuỗi trong JS
// Find index: Tìm kiếm vị trí của chuỗi

var programming = "    Hoc lap trinh JS di ban JS lap JSX     ";

// console.log(programming.indexOf("di"));
// console.log(programming.lastIndexOf("di"));

// console.log(programming.search(/JS/));

// console.log(programming.slice(0, 14));

// console.log(programming.replaceAll("JS", "AAA"));

// console.log(programming.toLowerCase());
// console.log(programming.toUpperCase());

// console.log(programming.length);
// console.log(programming.trim().length);

var programming2 = "A,+ B, C";

// console.log(programming.trim().split(" "));

console.log(programming.charAt(10));
