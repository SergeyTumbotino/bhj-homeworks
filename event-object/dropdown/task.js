const dropdownValue = document.querySelector(".dropdown__value");
dropdownValue.addEventListener("click", menuSwitcher);

function menuSwitcher() {
  document
    .querySelector(".dropdown__list")
    .classList.toggle("dropdown__list_active");
}

const dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));

for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener("click", (event) => {
    changeItem(i, event);
  });
}

function changeItem(item, event) {
  dropdownValue.textContent = dropdownLinks[item].textContent;
  menuSwitcher();
  event.preventDefault();
}
