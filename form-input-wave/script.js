const labels = document.querySelectorAll(".fom-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span>${letter}</span>`)
    .join("");
});
