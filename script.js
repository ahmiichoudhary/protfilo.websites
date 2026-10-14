// Monohaus interactions: mobile navigation and footer year.
const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const opened = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(opened));
    navToggle.setAttribute("aria-label", opened ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}
