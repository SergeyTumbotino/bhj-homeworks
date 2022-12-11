const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab__content"));

function changeContent(index) {
  const activeTab = tabs.findIndex((tab) =>
    tab.classList.contains("tab_active")
  );
  tabs[activeTab].classList.remove("tab_active");
  tabContents[activeTab].classList.remove("tab__content_active");

  tabs[index].classList.add("tab_active");
  tabContents[index].classList.add("tab__content_active");
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    changeContent(i);
  });
}
