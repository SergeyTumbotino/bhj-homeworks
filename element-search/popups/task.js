const modalActive = document.getElementById("modal_main");
modalActive.className = "modal modal_active";

const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.querySelectorAll(".modal__close_times");
showSuccess.onclick = function () {
  modalActive.className = "modal";
  modalSuccess.className = "modal modal_active";
};

modalClose[0].onclick = function () {
  modalActive.className = "modal";
};
modalClose[1].onclick = function () {
  modalSuccess.className = "modal";
};
