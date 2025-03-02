// Get the password input field and the eye icons
const passwordField = document.getElementById("password");
const eyeIcon = document.querySelector(".fa-eye");
const eyeSlashIcon = document.querySelector(".fa-eye-slash");

// Add event listener to the eye icon to toggle password visibility
eyeIcon.addEventListener("click", function() {
  // Toggle the password visibility and icons
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Show password
    eyeIcon.style.display = "none"; // Hide eye icon
    eyeSlashIcon.style.display = "block"; // Show eye-slash icon
  } else {
    passwordField.type = "password"; // Hide password
    eyeIcon.style.display = "block"; // Show eye icon
    eyeSlashIcon.style.display = "none"; // Hide eye-slash icon
  }
});

// Add event listener to the eye-slash icon to toggle password visibility
eyeSlashIcon.addEventListener("click", function() {
  // Toggle the password visibility and icons
  if (passwordField.type === "password") {
    passwordField.type = "text"; // Show password
    eyeIcon.style.display = "none"; // Hide eye icon
    eyeSlashIcon.style.display = "block"; // Show eye-slash icon
  } else {
    passwordField.type = "password"; // Hide password
    eyeIcon.style.display = "block"; // Show eye icon
    eyeSlashIcon.style.display = "none"; // Hide eye-slash icon
  }
});
