document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('input', function() {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
            }
        });
        submitButton.disabled = !isValid;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        // Process form submission, e.g., send data to server
        // Display success message
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = "Thank you for your message!";
        // Redirect to home page after 3 seconds
        setTimeout(function() {
            window.location.href = 'https://rentcaar.netlify.app/home.html'; // Replace '#' with your home page URL
        }, 2000);
    });
});
