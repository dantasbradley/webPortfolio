// script.js
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

window.onload = showSlides;



// Get all navigation links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Find the navigation menu element and collapse it
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
});