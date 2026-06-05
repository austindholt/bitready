const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#site-menu");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    const action = contactForm.getAttribute("action") || "";

    if (action.includes("YOUR_FORM_ID")) {
      event.preventDefault();
      formMessage.textContent = "This form is ready for a real Formspree ID before launch.";
      return;
    }

    formMessage.textContent = "Sending inquiry...";
  });
}
