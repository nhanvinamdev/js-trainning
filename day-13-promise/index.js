// function makeCoffee() {
//   setTimeout(() => {
//     console.log("Khởi động máy pha cà phê");
//   }, 2000);

//   setTimeout(() => {
//     console.log("Đang pha cà phê...");
//   }, 2000);

//   setTimeout(() => {
//     console.log("Pha cà phê xong rồi nè");
//   }, 1000);
// }

// makeCoffee();

// function makeCoffee() {
//   setTimeout(() => {
//     console.log("Khởi động máy pha cà phê");
//     setTimeout(() => {
//       console.log("Đang pha cà phê...");
//       setTimeout(() => {
//         console.log("Pha cà phê xong rồi nè");
//       }, 1000);
//     }, 5000);
//   }, 2000);
// }

// makeCoffee();
let khoiDongMay = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Khởi động máy pha cà phê");
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

let loading = false;

function makeCoffee() {
  khoiDongMay()
    .then(function (text) {
      loading = true;
      console.log(text);
      console.log("loading:", loading);
      return phaCaPhe();
    })
    .then(function (text) {
      console.log(text);
      return phaXong();
    })
    .then(function (text) {
      console.log(text);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      loading = false;
      console.log("loading:", loading);
      console.log("all done");
    });
}

makeCoffee();
