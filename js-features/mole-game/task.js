const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const hole = Array.from(document.querySelectorAll(".hole"));
let deadCounter = 0;
let lostCounter = 0;

function getMole(index) {
  if (hole[index].classList.contains("hole_has-mole")) {
    deadCounter++;
    dead.textContent = deadCounter;
  } else {
    lostCounter++;
    lost.textContent = lostCounter;
  }
}

for (let i = 0; i < 9; i++) {
  hole[i].addEventListener("click", () => {
    getMole(i);

    if (deadCounter === 10) {
      deadCounter = 0;
      lostCounter = 0;
      dead.textContent = deadCounter;
      lost.textContent = lostCounter;
      alert("Победа!");
    } else if (lostCounter === 5) {
      deadCounter = 0;
      lostCounter = 0;
      dead.textContent = deadCounter;
      lost.textContent = lostCounter;
      alert("Вы проиграли!");
    }
  });
}
