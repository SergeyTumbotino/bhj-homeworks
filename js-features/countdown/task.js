const countDownTimer = function () {
  const time = document.getElementById("timer");
  time.textContent -= 1;
  if (time.textContent <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(count);
  }
};
let count = setInterval(countDownTimer, 1000);
