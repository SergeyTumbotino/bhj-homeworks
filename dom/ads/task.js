const cards = Array.from(document.querySelectorAll(".card"));

cards.forEach(() => {
  const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
  const rotator = document.querySelector(".rotator");
  let counter = 0;

  setInterval(function switchCase() {
    console.log(counter);
    rotatorCase[counter].classList.remove("rotator__case_active");
    rotatorCase[counter + 1].classList.add("rotator__case_active");
    rotatorCase[counter + 1].style.color =
      rotatorCase[counter + 1].dataset.color;
    counter++;

    if (counter === rotatorCase.length - 1) {
      setTimeout(() => {
        rotatorCase[counter].classList.remove("rotator__case_active");
        counter = 0;
        rotator.firstElementChild.classList.add("rotator__case_active");
        rotator.firstElementChild.style.color =
          rotator.firstElementChild.dataset.color;
      }, rotator.firstElementChild.dataset.speed);
    }
  }, rotatorCase[counter + 1].dataset.speed);
});
