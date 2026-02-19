document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").textContent =
        "Thank you. I will get back to you soon.";
});
