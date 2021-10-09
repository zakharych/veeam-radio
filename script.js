const openBtn = document.querySelector("#open-btn");
const closeElem = document.querySelector(".close-elem");
const tipBlock = document.querySelector(".tip-block");

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target) {
    if (tipBlock.classList.contains("open") && !target.closest(".tip-block")) {
      tipBlock.classList.toggle("open");
    }
    if (event.target === openBtn || event.target === closeElem) {
      tipBlock.classList.toggle("open");
    }
  }
});
