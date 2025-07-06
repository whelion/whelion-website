// Basic fade-in animation on scroll
const faders = document.querySelectorAll('.service-card, .portfolio-item');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add('fade-in');
  appearOnScroll.observe(fader);
});
// FAQ Toggle Functionality
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function startSlideshow() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial
showSlide(currentSlide);
setInterval(startSlideshow, 5000); // change every 5 seconds

  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("open");
  }