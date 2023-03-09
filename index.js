const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    // highlight empty required fields
    const invalidFields = form.querySelectorAll(':invalid');
    invalidFields.forEach(function(field) {
      field.style.border = '2px solid red';
    });
  } else if (!isValidEmail(emailInput.value)) {
    // show error message for invalid email
    emailError.style.display = 'inline';
  } else {
    // submit form and show success message
    successMessage.style.display = 'block';
    form.reset();
  }
});

function isValidEmail(email) {
  // basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}