const book = document.querySelector(".book");
const fontSizeList = [...book.querySelectorAll(".font-size")];
const fontColorList = [...book.querySelectorAll(".book__control_color > a")];
const backgroundColorList = [
  ...book.querySelectorAll(".book__control_background > a"),
];

function changeFont(item, event) {
  event.preventDefault();
  const activeSizeIndex = fontSizeList.findIndex((book) =>
    book.classList.contains("font-size_active")
  );
  fontSizeList[activeSizeIndex].classList.remove("font-size_active");
  fontSizeList[item].classList.add("font-size_active");

  if (item === 0) {
    book.classList.remove("book_fs-big");
    book.classList.add("book_fs-small");
  } else if (item === 1) {
    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");
  } else {
    book.classList.remove("book_fs-small");
    book.classList.add("book_fs-big");
  }
}

function changeColor(item, event) {
  event.preventDefault();
  const activeColorIndex = fontColorList.findIndex((book) =>
    book.classList.contains("color_active")
  );
  fontColorList[activeColorIndex].classList.remove("color_active");
  fontColorList[item].classList.add("color_active");

  if (item === 0) {
    book.classList.remove("book_color-gray");
    book.classList.remove("book_color-whitesmoke");
    book.classList.add("book_color-black");
  } else if (item === 1) {
    book.classList.remove("book_color-whitesmoke");
    book.classList.remove("book_color-black");
    book.classList.add("book_color-gray");
  } else {
    book.classList.remove("book_color-black");
    book.classList.remove("book_color-gray");
    book.classList.add("book_color-whitesmoke");
  }
}

function changeBackground(item, event) {
  event.preventDefault();
  const activeBackgroundIndex = backgroundColorList.findIndex((book) =>
    book.classList.contains("color_active")
  );
  backgroundColorList[activeBackgroundIndex].classList.remove("color_active");
  backgroundColorList[item].classList.add("color_active");

  if (item === 0) {
    book.classList.remove("book_bg-gray");
    book.classList.remove("book_bg-white");
    book.classList.add("book_bg-black");
  } else if (item === 1) {
    book.classList.remove("book_bg-black");
    book.classList.remove("book_bg-white");
    book.classList.add("book_bg-gray");
  } else {
    book.classList.remove("book_bg-black");
    book.classList.remove("book_bg-gray");
    book.classList.add("book_bg-white");
  }
}

for (let i = 0; i < fontSizeList.length; i++) {
  fontSizeList[i].addEventListener("click", (event) => {
    changeFont(i, event);
  });
  fontColorList[i].addEventListener("click", (event) => {
    changeColor(i, event);
  });
  backgroundColorList[i].addEventListener("click", (event) => {
    changeBackground(i, event);
  });
}
