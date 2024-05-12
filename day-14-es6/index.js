// 1. Var & Let & const
// - Sự khác nhau giữ var/ let/ const: Scope, Hoisting
// - Assignent

// var a = "";
// let b = "";

// const c = ""; // xài nhiều nhất vì nó có tính bất biến

// Scope : phạm vi hoạt động của biến
// const & let nằm trong block scope
// if (true) {
//   // block scope là nó chỉ có trong let và const
//   // var a = "A";
//   // let a = "B";
//   // const a = "C";
// }

// Hoisiting: đối với var sẽ bị hoisting:
// đưa var a; lên đầu phạm vi (scope)

// a = 1;
// console.log("a:", a);

// console.log(a);
// var a = 1;

// var a;
// a = 1;

// let a = 1;

// Assignent : let và var giống nhau điểm này
// let a = 1;
// a = "Ahihi";

// const a = 1;
// a = "Ahihi";

// console.log("a:", a);

// Trường hợp dùng let

// let a = "AAAA";

// if (condition) {
//   a = "Z";
// } else {
//   a = "B";
// }

// return a

// 2. Template Literals string
// 3. Multi-line string

// const lastName = "Nhan";
// const firstName = "Nam";

// const fullName = lastName + " " + firstName;

// Multiple line thì \n
// const fullName = `${lastName} ${firstName} \n a \n b`;
// console.log(fullName);

//4. Arrow Function: hàm mũi tên
// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => a + b;

// const student = {
//   name: "Nam",
//   age: 18,
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(student.getName());

// Arrow function không có this
// const student = {
//   name: "Nam",
//   age: 18,
//   getName: () => {
//     console.log("this:", this);
//     return this.age;
//   },
// };

// console.log(student.getName());

// Tóm lại trong hầu hết trường hợp sẽ sử dụng arrow function
// còn trường hợp khai báo function trong object hoặc class thì dùng function bình thường
