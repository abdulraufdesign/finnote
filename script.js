let themeCta = document.querySelector(".theme-cta");

themeCta.addEventListener("click", () => {
  document.documentElement.classList.toggle("second");
  themeCta.classList.toggle("dark");
  setTimeout(() => {
    changeDepart();
  }, 50);
});