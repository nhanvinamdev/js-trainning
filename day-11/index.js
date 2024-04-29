var headingElement = document.querySelector(".heading");

// II. DOM attribute
// 1. Thêm

// headingElement.id = "heading";
// console.log(headingElement);
// 2. Sửa: setAttribute
headingElement.setAttribute("class", "ahihi");

// 3. Lấy: getAttribute
headingElement.getAttribute("accesskey");

// III. InnerText & textContent
// const innerText = headingElement.innerText;

// const textContent = headingElement.textContent;

// headingElement.innerText = "<h1>AAAAA</h1>";

// console.log({
//   innerText,

//   textContent,
// });

// IV. Thêm elmemt vào element trong DOM
// headingElement.innerHTML = "<h1>AAAAA</h1>";
headingElement.outerHTML = "<h1>AAAAA</h1>";
