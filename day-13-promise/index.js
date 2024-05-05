// function makeCoffee() {
//   setTimeout(() => {
//     console.log("Khởi động máy pha cà phê");
//   }, 2000);

//   setTimeout(() => {
//     console.log("Đang pha cà phê...");
//   }, 3000);

//   setTimeout(() => {
//     console.log("Pha cà phê xong rồi nè");
//   }, 1000);
// }

// makeCoffee();

// function makeCoffee() {
//   // callback hell
//   setTimeout(function () {
//     console.log("Khởi động máy pha cà phê");
//     setTimeout(function () {
//       console.log("Đang pha cà phê...");
//       setTimeout(function () {
//         console.log("Pha cà phê xong rồi nè");
//       }, 1000);
//     }, 5000);
//   }, 2000);
// }

// makeCoffee();

let loading = false;
let khoiDongMay = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Khởi động máy pha cà phê"); // đẩy ra những dữ liệu thành công
      // reject(new Error("Máy pha cà phê bị lỗi!"));
    }, 3000);
  });

let phaCaPhe = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Đang pha cà phê...");
    }, 2000);
  });

let phaXong = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Pha cà phê xong rồi nè");
    }, 1000);
  });

function makeCoffee() {
  loading = true;
  console.log("loading:", loading);

  khoiDongMay()
    .then(function (text) {
      console.log("text:", text);
      return phaCaPhe();
    })
    .then(function (text) {
      console.log("text:", text);
      return phaXong();
    })
    .then(function (text) {
      console.log("text:", text);
    })
    .catch(function (error) {
      console.log("error:", error);
    })
    .finally(function () {
      loading = false;
      console.log("loading:", loading);
    });
}

makeCoffee();
