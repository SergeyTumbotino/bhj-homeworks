const interestsMain = document.querySelector(".interests_main");

interestsMain.addEventListener("change", (e) => {
  const interest = e.target.closest(".interest");
  const interestsActive = interest.querySelector(".interests_active");

  if (!e.target.closest(".interests_active")) {
    const interestChecks = interestsActive.querySelectorAll(".interest__check");

    for (const checkbox of interestChecks) {
      checkbox.checked = e.target.checked;
    }
  }
});

// const interestsMain = document.querySelector(".interests_main");

// interestsMain.addEventListener("change", (e) => {
//   const interest = e.target.closest(".interest");
//   const interestsActive = interest.querySelector(".interests_active");

//   if (!e.target.closest(".interests_active")) {
//     const interestChecks = interestsActive.querySelectorAll(".interest__check");

//     for (const checkbox of interestChecks) {
//       checkbox.checked = e.target.checked;
//     }
//   }
// });
