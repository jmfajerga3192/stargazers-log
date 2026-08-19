
// ========================================
// Mobile Navigation
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });

});


// ========================================
// Dynamic Footer Year
// ========================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
