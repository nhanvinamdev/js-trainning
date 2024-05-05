// 1. Object constructor

// class User {
//   firstName;
//   lastName;
//   age;
//   constructor(_firstName, _lastName, _age) {
//     this.firstName = _firstName;
//     this.lastName = _lastName;
//     this.age = _age;
//   }
// }

// User.prototype.fullName = "Nhan Vi Nam";

// var user = new User("Nam", "Nhan", 18);

// console.log(user.fullName);

// const user2 = {
//     firstName : 'Nam'
// }

// user2.lastName = "Nhan"

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// var user = new User("Nam", "Nhan", 18);
// var user2 = new User("Yen", "");
// console.log(user.firstName);

// 3. Callback function

// function makeCoffee(onFinish) {
//   let name = "Nhan vi nam";

//   if (typeof onFinish !== "function") return;

//   console.log("Đang pha cà phê...");

//   onFinish(name);

//   //   onFinish();

//   //   function onFinish() {
//   //     console.log("Pha cà phê xong rồi nè, làm gì tiếp đi");
//   //   }
//   //   return onFinish();
// }

// makeCoffee(function (name) {
//   console.log(`${name} đang uống cà phê`);
// });

// 1. truyền function vào params của makeCoffee, nhưng chưa thực thi function đó
// 2. chạy tới dòng 39, 41
// 3. Xong hết tất cả mới thực thi function dòng 42
// 4. chạy dòng 46

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");

// Đồng bộ: Task A -> Task B
// Bất đồng bộ: Song song 2 task

// function xinSdt() {
//   var sdt;
//   console.log("1. Gọi cho thằng bạn xin số của thằng A");

//   console.log("2. Thằng bạn phải tìm số của A");

//   // Giả sử thời gian tìm sdt của thằng bạn mình mất 3s
//   setTimeout(() => {
//     sdt = "0938785724";

//     console.log("3. Tao tìm thấy số diện thoại của A rồi nè");
//   }, 3000);

//   console.log(`4. Gửi cho mày số điện thoại nè: ${sdt}`);
// }

function xinSdt(callBack) {
  var sdt;
  console.log("1. Gọi cho thằng bạn xin số của thằng A");

  console.log("2. Thằng bạn phải tìm số của A");

  // Giả sử thời gian tìm sdt của thằng bạn mình mất 3s
  setTimeout(() => {
    sdt = "0938785724";

    console.log("3. Tao tìm thấy số diện thoại của A rồi nè");

    // Muốn chắc chắn sdt đã có rồi
    callBack(sdt);
  }, 3000);
}

// xinSdt(function (sdt) {
//   console.log(`4. Gửi cho mày số điện thoại nè: ${sdt}`);
// });

const users = [
  {
    name: "A",
    age: 25,
    isActive: true,
  },
  {
    name: "B",
    age: 20,
    isActive: false,
  },
  {
    name: "C",
    age: 18,
    isActive: true,
  },
  {
    name: "D",
    age: 40,
    isActive: false,
  },
];

// 4. Dùng callback function build một số hàm built-in trong array:
// 1. map

Array.prototype.mymap = function (callBack) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    let result = callBack(this[i], i, this);
    newArray.push(result);
  }

  return newArray;
};

// expected output [
//   'A', 'B', 'C', 'D'
// ]

// C1

let newArray = users.mymap(function (element) {
  return element.name;
});

// console.log("newArray:", newArray);

// // C2
// function callBack(element, index, array) {
// }
// const _users = users.mymap(callBack);

// 2. filter
// expected output <= 20t
Array.prototype.myFilter = function (callBack) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    let condition = callBack(this[i], i, this);

    if (condition) newArray.push(this[i]);

    // Nếu điều kiện condition true sẽ chạy qua vế bên phải
    // condition && newArray.push(this[i]);
  }

  return newArray;
};

const a = users.myFilter(function (element) {
  return element.age <= 20;
});

// 3. find

Array.prototype.myFind = function (callBack) {
  let newObj = {};
  for (let i = 0; i < this.length; i++) {
    let condition = callBack(this[i], i, this);

    if (condition) {
      newObj = this[i];
      break;
    }
  }

  return newObj;
};

const b = users.myFind(function (element) {
  return element.age <= 20;
});

// 4. some
Array.prototype.mySome = function (callBack) {
  let output = false;

  for (let i = 0; i < this.length; i++) {
    let condition = callBack(this[i], i, this);

    if (condition) {
      output = condition;
      break;
    }
  }

  return output;
};

const c = users.mySome(function (elm) {
  return elm.age >= 40;
});

// console.log(c);

// 5. every
Array.prototype.myEvery = function (callBack) {
  let output = true;

  for (let i = 0; i < this.length; i++) {
    let condition = callBack(this[i], i, this);

    if (!condition) {
      output = false;
      break;
    }
  }

  return output;
};

const d = users.myEvery(function (elm) {
  return elm.age <= 40;
});

console.log(d);
