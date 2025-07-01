document.addEventListener("DOMContentLoaded", () => {
  const roomCards = document.querySelectorAll(".room-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  roomCards.forEach(card => observer.observe(card));
});
