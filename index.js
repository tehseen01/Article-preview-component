const share = document.querySelector(".show-icon");
const aboutContainer = document.querySelector(".about-container");

share.addEventListener("click", () => {
  aboutContainer.classList.toggle("show");
});
