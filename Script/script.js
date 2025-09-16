const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Smooth scroll + opakovaná animace sekcí
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // plynulý scroll
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // animace sekce
      target.classList.remove("highlight"); // smaž starou animaci
      void target.offsetWidth; // trik, aby se animace znovu spustila
      target.classList.add("highlight");
    }
  });
});

const toggleBtn = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navList.classList.toggle("active");
});
