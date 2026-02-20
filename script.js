// Initialize Icons
lucide.createIcons();

// Navbar Toggle
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

if(themeToggle){
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeToggle.textContent = document.body.classList.contains("dark")
      ? "🌞 Light"
      : "🌙 Dark";
  });
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let valid = true;

    if(name.value.trim().length < 3){
      nameError.textContent = "Name must be at least 3 characters.";
      valid = false;
    }

    if(!email.value.includes("@") || !email.value.includes(".")){
      emailError.textContent = "Enter valid email address.";
      valid = false;
    }

    if(message.value.trim().length < 10){
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if(valid){
      successMsg.textContent = "✅ Message sent successfully! (Demo only)";
      contactForm.reset();
    }
  });
}