// Scroll Reveal Animations using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  // Configuration for the observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15, // Element reveals when 15% of it is visible in viewport
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add 'active' class to trigger CSS animation
        entry.target.classList.add("active");

        // Unobserve after revealing to prevent repeating animation unnecessarily
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements that have our reveal classes
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-up, .reveal-left, .reveal-right, .fade-in-up",
  );

  // Start observing each element
  revealElements.forEach((el) => {
    observer.observe(el);
  });

  // --- True Parallax Scrolling Effect (3D Depth) ---
  window.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll(".parallax-bg");

    // Check if user prefers reduced motion (Accessibility)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      parallaxElements.forEach((el) => {
        // ಎಲಿಮೆಂಟ್ ಸ್ಕ್ರೀನ್‌ನಲ್ಲಿ ಎಲ್ಲಿದೆ ಎಂದು ಕ್ಯಾಲ್ಕುಲೇಟ್ ಮಾಡುವುದು
        let offset = el.getBoundingClientRect().top;

        // ಬ್ಯಾಕ್‌ಗ್ರೌಂಡ್ ಅನ್ನು ಮುಂಭಾಗದ ಕಂಟೆಂಟ್‌ಗಿಂತ ನಿಧಾನವಾಗಿ ಚಲಿಸುವಂತೆ ಮಾಡುವುದು (0.4 ಸ್ಪೀಡ್)
        let yPos = offset * 0.4;

        // ಹೊಸ ಬ್ಯಾಕ್‌ಗ್ರೌಂಡ್ ಪೊಸಿಷನ್ ಅನ್ನು ಅಪ್ಲೈ ಮಾಡುವುದು
        el.style.backgroundPosition = `center ${yPos}px`;
      });
    }
  });

  // --- Scrollytelling Image Swap ---
const steps = document.querySelectorAll('.step');
const scrollyImage = document.getElementById('scrolly-image');

if (steps.length > 0 && scrollyImage) {
    const scrollyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ಟೆಕ್ಸ್ಟ್ ಹೈಲೈಟ್ ಮಾಡುವುದು
                steps.forEach(s => s.classList.remove('active-step'));
                entry.target.classList.add('active-step');

                // ಫೋಟೋ ಬದಲಾಯಿಸುವುದು (ಮೃದುವಾದ Fade ಎಫೆಕ್ಟ್ ಜೊತೆಗೆ)
                const newSrc = entry.target.getAttribute('data-image');
                scrollyImage.style.opacity = 0; // ಫೇಡ್ ಔಟ್
                
                setTimeout(() => {
                    scrollyImage.src = newSrc;
                    scrollyImage.style.opacity = 1; // ಫೇಡ್ ಇನ್
                }, 300);
            }
        });
    }, {
        root: null,
        rootMargin: '-40% 0px -40% 0px' // ಟೆಕ್ಸ್ಟ್ ಸ್ಕ್ರೀನ್ ಮಧ್ಯಕ್ಕೆ ಬಂದಾಗ ಆಕ್ಟಿವ್ ಆಗುತ್ತದೆ
    });

    steps.forEach(step => scrollyObserver.observe(step));
}
});
