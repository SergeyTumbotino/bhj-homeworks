const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

const activeSlideIndex = sliderItems.findIndex((slide) =>
  slide.classList.contains("slider__item_active")
);
sliderDots[activeSlideIndex].classList.add("slider__dot_active");

function changeSlide(index) {
  const activeSlideIndex = sliderItems.findIndex((slide) =>
    slide.classList.contains("slider__item_active")
  );
  sliderItems[activeSlideIndex].classList.remove("slider__item_active");
  sliderDots[activeSlideIndex].classList.remove("slider__dot_active");

  sliderItems[index].classList.add("slider__item_active");
  sliderDots[index].classList.add("slider__dot_active");
}

const arrowPrev = document.querySelector(".slider__arrow_prev");
arrowPrev.addEventListener("click", () => {
  const activeSlideIndex = sliderItems.findIndex((slide) =>
    slide.classList.contains("slider__item_active")
  );
  changeSlide(
    activeSlideIndex === 0 ? sliderItems.length - 1 : activeSlideIndex - 1
  );
});

const arrowNext = document.querySelector(".slider__arrow_next");
arrowNext.addEventListener("click", () => {
  const activeSlideIndex = sliderItems.findIndex((slide) =>
    slide.classList.contains("slider__item_active")
  );
  changeSlide(
    activeSlideIndex === sliderItems.length - 1 ? 0 : activeSlideIndex + 1
  );
});

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].addEventListener("click", () => {
    changeSlide(i);
  });
}
