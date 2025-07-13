// Animate elements on scroll
const faders = document.querySelectorAll('.fade-in, .slide-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
