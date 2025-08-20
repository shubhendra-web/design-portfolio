document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("navMenu");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("active"); 
  });
});
