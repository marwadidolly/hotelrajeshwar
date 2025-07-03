function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}

// Optional: Scroll to top on nav link click (for smooth transition)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
