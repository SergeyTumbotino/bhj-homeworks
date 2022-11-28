// const clicker = function () {
//   const click = document.getElementById("clicker__counter");
//   click.textContent += 1;
//   const image = document.getElementById("cookie");
//   image.width = 150;
//   image.width = 200;
// };
// image.onclick = clicker;

const image = document.getElementById("cookie");
let clickTime = new Date();
const clicker = function () {
  const click = document.getElementById("clicker__counter");
  click.textContent = +click.textContent + 1;
  if (click.textContent % 2 === 0) {
    image.width = 150;
  } else {
    image.width = 200;
  }
  const clickSpeed = document.getElementById("clicker__speed");
  clickSpeed.textContent = 1000 / (new Date() - clickTime);
  clickTime = new Date();
};
image.onclick = clicker;
