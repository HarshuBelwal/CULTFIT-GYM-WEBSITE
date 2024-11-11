// JavaScript for Navigation Active Link

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Contact form submission alert (just for demo)
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting (for demo)
        alert('Your message has been sent!');
    });
}
