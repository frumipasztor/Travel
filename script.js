function pageLoad() {
  //add active class to menu when pressed
  function menuToggle() {
    const toggleMenu = document.querySelector(".toggle");
    const section = document.querySelector("section");
    toggleMenu.classList.toggle("active");
    section.classList.toggle("active");
  }

  document.querySelector(".toggle").addEventListener("click", menuToggle);

}
window.addEventListener("load", pageLoad);
