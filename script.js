// Form validation function
function validateForm() {

    var contactForm = document.querySelector('.needs-validation');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var subjectInput = document.getElementById('subject');
    var messageInput = document.getElementById('message');
    
    var name = nameInput ? nameInput.value.trim() : '';
    var email = emailInput ? emailInput.value.trim() : '';
    var subject = subjectInput ? subjectInput.value.trim() : '';
    var message = messageInput ? messageInput.value.trim() : '';

    var isValid = true;
    var errorMessage = '';
    

    if (name === '' || name.length < 2) {
        isValid = false;
        errorMessage += '• Please enter a valid name (at least 2 characters)\n';
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        isValid = false;
        errorMessage += '• Please enter a valid email address\n';
    }
    
    // Validate Subject
    if (subject === '' || subject.length < 3) {
        isValid = false;
        errorMessage += '• Please enter a subject (at least 3 characters)\n';
    }

    if (message === '' || message.length < 10) {
        isValid = false;
        errorMessage += '• Please enter a message (at least 10 characters)\n';
    }
    
    if (isValid) {
        alert('✓ Success! Your message has been sent successfully.');
        contactForm.reset();
        return false;
    } else {
        alert('❌ Please fix the following errors:\n\n' + errorMessage);
        return false;
    }
}