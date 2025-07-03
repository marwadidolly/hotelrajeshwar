
// Initialize lightbox for room images
const lightbox = GLightbox({
  selector: '.glightbox',
});

// For mobile navbar toggle
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}
