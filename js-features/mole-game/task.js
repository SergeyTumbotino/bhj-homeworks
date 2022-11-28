getMole = function () {
  if (hole.className.includes("hole_has-mole")) {
    dead.textContent = +dead.textContent + 1;
  } else {
    lost.textContent = +lost.textContent + 1;
  }
  if (dead.textContent >= 10) {
    alert("Победа!");
    dead.textContent = null;
    lost.textContent = null;
    return;
  } else if (lost.textContent >= 5) {
    alert("Вы проиграли!");
    dead.textContent = null;
    lost.textContent = null;
    return;
  }
};

for (let i = 1; i < 10; i++) {
  let hole = document.getElementById(`hole${i}`);
  hole.onclick = getMole;
}
