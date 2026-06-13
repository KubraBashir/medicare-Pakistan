const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.getElementById("contactForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});