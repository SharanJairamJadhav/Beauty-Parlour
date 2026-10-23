// Mobile Menu Toggle Logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    // Toggles the menu on and off
    navLinks.classList.toggle("nav-active");

    // Optional: Animate hamburger icon (turn into 'X' if you add extra CSS later)
    hamburger.classList.toggle("toggle");
  });
}

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-active")) {
      navLinks.classList.remove("nav-active");
    }
  });

  // --- Gallery Lightbox Logic ---
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-lightbox");

  if (galleryImages.length > 0 && lightbox) {
    // ಪ್ರತಿಯೊಂದು ಫೋಟೋ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        setTimeout(() => lightbox.classList.add("show"), 10); // ಅನಿಮೇಷನ್ ಟ್ರಿಗರ್
        lightboxImg.src = img.src;
      });
    });

    // 'X' ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ ಕ್ಲೋಸ್ ಮಾಡುವುದು
    closeBtn.addEventListener("click", closeLightbox);

    // ಫೋಟೋದ ಹೊರಗೆ ಕಪ್ಪು ಜಾಗದಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗಲೂ ಕ್ಲೋಸ್ ಮಾಡುವುದು
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.classList.remove("show");
      setTimeout(() => (lightbox.style.display = "none"), 300);
    }
  }
});
