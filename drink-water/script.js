const smallCups = document.querySelectorAll(".cup-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remainder = document.getElementById("remainder");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
