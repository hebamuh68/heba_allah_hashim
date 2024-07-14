document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      // Prevent default link behavior
      event.preventDefault();

      // Remove 'font-weight-bold' from all links
      navLinks.forEach(function (link) {
        link.classList.remove("font-weight-bold");
      });

      // Add 'font-weight-bold' to the clicked link
      this.classList.add("font-weight-bold");

      // Optional: Smooth scroll to the target section
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      document.getElementById("mainNavbar").classList.add("scrolled");
    } else {
      document.getElementById("mainNavbar").classList.remove("scrolled");
    }
  });
});