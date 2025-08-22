document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("menu"); // Mobile nav
  const links = nav.querySelectorAll("a");

  // Mobile menu toggle
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("show"); // CSS me .show class
    });
  }

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener("click", () => {
      if(nav.classList.contains("show")) {
        nav.classList.remove("show");
      }
    });
  });

  // Highlight current page
  links.forEach(link => {
    if(link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
