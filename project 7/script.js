function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var valid = true;

    // Reset error messages
    nameError.style.display = "none";
    emailError.style.display = "none";

    // Validate name
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "inline";
        valid = false;
    }

    // Validate email
    if (email.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "inline";
        valid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Invalid email format.";
        emailError.style.display = "inline";
        valid = false;
    }

    // If valid, show alert
    if (valid) {
        alert("Subscription successful!");
    }

    return valid;
}

function validateEmail(email) {
    // Basic email format validation
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
