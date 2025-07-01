
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Animate form on load
  const bookingSection = document.querySelector("section");
  if (bookingSection) {
    bookingSection.style.opacity = 0;
    bookingSection.style.transform = "translateY(50px)";
    setTimeout(() => {
      bookingSection.style.transition = "all 0.6s ease";
      bookingSection.style.opacity = 1;
      bookingSection.style.transform = "translateY(0)";
    }, 100);
  }

  // Highlight input on focus
  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 5px #3B82F6"; // Tailwind Blue-500
      input.style.borderColor = "#3B82F6";
    });
    input.addEventListener("blur", () => {
      input.style.boxShadow = "none";
      input.style.borderColor = "#d1d5db"; // Tailwind Gray-300
    });
  });

  // Form validation
  form.addEventListener("submit", (e) => {
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const phone = form.querySelector("#phone");

    let valid = true;
    let message = "";

    if (name.value.trim() === "") {
      valid = false;
      message += "\n- Please enter your full name.";
      name.style.borderColor = "red";
    }

    if (!email.value.includes("@")) {
      valid = false;
      message += "\n- Please enter a valid email address.";
      email.style.borderColor = "red";
    }

    if (phone && (phone.value.length < 10 || isNaN(phone.value))) {
      valid = false;
      message += "\n- Please enter a valid 10-digit phone number.";
      phone.style.borderColor = "red";
    }

    if (!valid) {
      e.preventDefault();
      alert("Please correct the following errors:" + message);
    } else {
      alert("✅ Form submitted successfully!");
    }
  });
});

