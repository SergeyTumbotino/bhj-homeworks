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
