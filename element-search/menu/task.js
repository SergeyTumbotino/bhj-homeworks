const menuLinkArr = Array.from(document.querySelectorAll(".menu__link"));

menuLinkArr.forEach((item) => {
  item.onclick = function () {
    if (item.nextElementSibling.className === "menu menu_sub") {
      item.nextElementSibling.className = "menu menu_sub menu_active";
      return false;
    }
  };
});

// function menuClicker(item) {
//   if (menuLinkArr[item].nextElementSibling) {
//     if (menuLinkArr[item].nextElementSibling.className === "menu menu_sub") {
//       menuLinkArr[item].nextElementSibling.classList.add("menu_active");
//     }
//     menuLinkArr.preventDefault();
//   }
// }

// for (let i = 0; i < menuLinkArr.length; i++) {
//   menuLinkArr[i].addEventListener("click", () => {
//     menuClicker(i);
//   });
// }
