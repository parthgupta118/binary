// Navbar Scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



// Initialize AOS
AOS.init({
    duration: 600,
    easing: "ease-in-out"
});