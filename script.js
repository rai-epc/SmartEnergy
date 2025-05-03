// Basic script for potential future enhancements or form handling

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded.");

    // Example: Smooth scrolling for internal links (though CSS scroll-behavior often handles this)
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            // Basic check if it's an internal link
            if (targetId.startsWith('#')) {
                // e.preventDefault(); // Keep default behavior if CSS handles scrolling
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Optional: Use JS scroll if CSS isn't sufficient or for more control
                    // targetElement.scrollIntoView({ behavior: 'smooth' });
                    console.log(`Scrolling to ${targetId}`);
                }
            }
        });
    });

    // Simple form submission handling (prevents default, logs data)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual submission for this example
            console.log('Form submitted (simulation).');
            const formData = new FormData(contactForm);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            // Here you would typically send data to a server
            alert('Thank you for your message! (This is a demo - form not connected)');
            contactForm.reset(); // Clear the form
        });
    }
});

