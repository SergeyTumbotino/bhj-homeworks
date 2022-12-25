const revealElements = [...document.querySelectorAll(".reveal")];

function isVisible() {
  for (let i = 0; i < revealElements.length; i++) {
    let { top, bottom } = revealElements[i].getBoundingClientRect();
    if (bottom > 0 && top < window.innerHeight) {
      revealElements[i].classList.add("reveal_active");
    } else {
      revealElements[i].classList.remove("reveal_active");
    }
  }
}

window.addEventListener("scroll", isVisible);

// Вариант только с координатой top
// const revealElements = [...document.querySelectorAll(".reveal")];

// function isVisible() {
//   for (let i = 0; i < revealElements.length; i++) {
//     const { innerHeight } = window;
//     const { top } = revealElements[i].getBoundingClientRect();
//     if (top < innerHeight && top > 0) {
//       revealElements[i].classList.add("reveal_active");
//     } else {
//       revealElements[i].classList.remove("reveal_active");
//     }
//   }
// }

// window.addEventListener("scroll", isVisible);
