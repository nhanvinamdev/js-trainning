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

// get data khi mới vô page
// có 1 cái điều kiện gì đó mới get data

// payload: {
//   per_page: number ;
//   _rf: string,
// };

// const data = [
//   {
//     deal_id: 472350574,
//     name: "Màn hình máy tính LG 27MP500-B 27 inch Full HD 5ms 75Hz IPS - Hàng Chính Hãng",
//     version: 1,
//     deal_status: "running",
//     status: 2,
//     url: "",
//     tags: "best_deals",
//     discount_percent: 34,
//     special_price: 2750000,
//     special_from_date: 1715504400,
//     from_date: "2024-05-12 16:00:00",
//     special_to_date: 1715518800,
//     score: 0,
//     store_id: 0,
//     store_name: "",
//     store_logo: "",
//     progress: {
//       qty: 3,
//       qty_ordered: 1,
//       qty_remain: 2,
//       percent: 67,
//       status: "progress-bar-info",
//       progress_text: "Đã bán 1",
//       ordered_percent: 33,
//     },
//     product: {
//       id: 99289889,
//       master_id: 94161538,
//       sku: "1538550165484",
//       name: "Màn hình máy tính LG 27MP500-B 27 inch Full HD 5ms 75Hz IPS - Hàng Chính Hãng",
//       url_key:
//         "man-hinh-may-tinh-lg-27mp500-b-27-inch-full-hd-5ms-75hz-ips-hang-chinh-hang-p94161538",
//       url_path:
//         "man-hinh-may-tinh-lg-27mp500-b-27-inch-full-hd-5ms-75hz-ips-hang-chinh-hang-p94161538.html?spid=99289889&itm_campaign=tiki-reco_UNK_DT_UNK_UNK_deal-hot_UNK_rule-base-flash-deal-v3_UNK_RB_batched_PID.99289889&itm_medium=CPC&itm_source=tiki-reco&tclid=f6a2f5e30d5d9f9de34b4c030e84843aa11b07b0f2244bce19e0c313e23b32cf",
//       type: "simple",
//       short_description: "",
//       price: 2750000,
//       list_price: 4190000,
//       original_price: 4190000,
//       price_prefix: "2.xxx.xxx",
//       badges_new: [],
//       discount: 1440000,
//       discount_rate: 34,
//       rating_average: 4.8,
//       review_count: 36,
//       favourite_count: 0,
//       thumbnail_url:
//         "https://salt.tikicdn.com/cache/280x280/ts/product/ca/87/45/4ae338981680a9e7b2a4b3b28edb401e.jpg",
//       has_ebook: false,
//       inventory_status: "",
//       inventory_type: "",
//       productset_group_name: "",
//       is_flower: false,
//       is_fresh: false,
//       is_gift_card: false,
//       seller_product_id: 99289889,
//       delivery_info_text: "",
//       stock_item: {
//         max_sale_qty: 1000,
//         min_sale_qty: 1,
//         preorder_date: null,
//         qty: 1000,
//       },
//       impression_info: [
//         {
//           checksum: "",
//           impression_id: "data-reco--65712a883ac640089be017f6ff3a738b",
//           metadata: {
//             model_ids: "fcb5c955-8779-4521-a2a9-d318a804b154",
//             rule_code: "rule_base_flash_deal_v3",
//             service_name: "reco",
//             spid: 99289889,
//             version: "flash_deal_v1_202405121100",
//           },
//         },
//       ],
//     },
//   },
// ];
