// Smooth scroll for anchor links (if added later)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});

// Add fade-in class styles dynamically
const style = document.createElement("style");
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Add print functionality (optional enhancement)
function printResume() {
  window.print();
}

// Add copy email functionality
document.addEventListener("DOMContentLoaded", () => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const email = link.getAttribute("href").replace("mailto:", "");
      // Optional: Add a tooltip or notification that email was copied
      console.log("Email clicked:", email);
    });
  });
});

// External links open in new tab
document.addEventListener("DOMContentLoaded", () => {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });
});

// Simple loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.3s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
