
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".contact-section");
  if (section) {
    setTimeout(() => {
      section.classList.add("show");
    }, 200);
  }
});