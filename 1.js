document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.getElementById("explore-btn");
    const introContainer = document.getElementById("intro-container");

    exploreButton.addEventListener("click", () => {
       
        introContainer.classList.add("fade-out");
        document.body.classList.add("background-outro");

      
        setTimeout(() => {
            window.location.href = "Profile.html"; 
        }, 1000); 
    });
});







// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed header height
            behavior: 'smooth'
        });
    });
});

// 2. Image Gallery Modal Effect
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.createElement('div');
const modalContent = document.createElement('div');
const modalImg = document.createElement('img');
modal.classList.add('modal');
modalContent.classList.add('modal-content');

// Append modal elements to the body
modalContent.appendChild(modalImg);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Function to open the modal with the clicked image
galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        modalImg.src = this.src; // Set modal image to clicked image
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close modal when clicked outside the image
modal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// 3. Add fade-in effect for section elements when they come into view
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function () {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('fadeInVisible');
        }
    });
});


