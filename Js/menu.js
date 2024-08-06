document.addEventListener("DOMContentLoaded", function () {
  const hamburguesa = document.querySelector(".hamburguesa");
  const menu = document.querySelector(".Menu");

  hamburguesa.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
