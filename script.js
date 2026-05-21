const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

});

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message sent successfully!");

  form.reset();

});
const toggleBtn = document.querySelector(".theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const icon = toggleBtn.querySelector("i");

  if (document.body.classList.contains("light-mode")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  } else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

});