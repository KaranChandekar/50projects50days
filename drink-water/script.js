const smallCups = document.querySelectorAll(".cup-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remainder = document.getElementById("remainder");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});
