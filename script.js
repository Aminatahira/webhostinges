// ARZ Host Website JavaScript

// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

// FAQ Toggle Functionality
function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // If the clicked item wasn't active, open it
  if (!isActive) {
    faqItem.classList.add("active");
  }
}

// Smooth scrolling for anchor links
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

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backgroundColor = "var(--background-color)";
    navbar.style.backdropFilter = "none";
  }
});

// Button click handlers
document.addEventListener("DOMContentLoaded", function () {
  // Get Started button
  const getStartedBtns = document.querySelectorAll(".btn-primary");
  getStartedBtns.forEach((btn) => {
    if (
      btn.textContent.includes("Get Started") ||
      btn.textContent.includes("Start Your Free Trial")
    ) {
      btn.addEventListener("click", () => {
        window.open("https://arzhost.com", "_blank");
      });
    }
  });

  // View Plans button
  const viewPlansBtns = document.querySelectorAll(".btn-secondary");
  viewPlansBtns.forEach((btn) => {
    if (btn.textContent.includes("View Plans")) {
      btn.addEventListener("click", () => {
        document.querySelector(".pricing").scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  });

  // Choose Plan buttons
  const choosePlanBtns = document.querySelectorAll(".btn");
  choosePlanBtns.forEach((btn) => {
    if (btn.textContent.includes("Choose Plan")) {
      btn.addEventListener("click", () => {
        window.open("https://arzhost.com/vps/", "_blank");
      });
    }
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.3s ease-in-out";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Contact phone number click handler
document.addEventListener("click", function (e) {
  if (
    e.target.textContent === "+1 (631) 594-8060" ||
    e.target.textContent === "📞 +1 (631) 594-8060"
  ) {
    window.location.href = "tel:+16315948060";
  }
});
