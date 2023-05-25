const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const form = document.querySelector("form");
let invalidInputs = [];

function validateEmail(input) {
  return input.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}
function removeSpaces(input) {
  input.value = input.value.trim();
}

let setError = (input, message) => {
  input.classList.add("error-border");
  input.classList.remove("success");
  document.querySelector(`#${input.id}-error`).textContent = message;
  if (!invalidInputs.includes(input.id)) {
    invalidInputs.push(input.id);
  }
};

let setSuccess = (input) => {
  input.classList.add("success");
  input.classList.remove("error");
  document.querySelector(`#${input.id}-error`).textContent = "";
  invalidInputs = invalidInputs.filter((arr) => arr !== input.id);
};

function validateForm() {
  let userSpacesRemover = username.value.trim();
  if (!userSpacesRemover.length) {
    setError(username, "username is required");
  } else if (userSpacesRemover.length < 3) {
    setError(username, "username must be at least 3 characters");
  } else if (userSpacesRemover.includes(" ")) {
    setError(username, "username musn't contain spaces");
  } else {
    setSuccess(username);
  }
  ///////////////* Now confirm the email*//////////////////
  let emailSpacesRemover = email.value.trim();
  if (!emailSpacesRemover.length) {
    setError(email, "email is required");
  } else if (emailSpacesRemover.includes(" ")) {
    setError(email, "email musn't contain spaces");
  } else if (!validateEmail(emailSpacesRemover)) {
    setError(email, "please put a valid email");
  } else {
    setSuccess(email);
  }
  ///////////////* Now confirm the Passwords*//////////////////
  if (!password.value.length) {
    setError(password, "password is required");
  } else if (password.value.length < 6) {
    setError(password, "password must be at least 6 characters");
  } else {
    setSuccess(password);
  }
  ///////////////* Checking if the two Passwords match*//////////////////
  if (!confirmPassword.value.length) {
    setError(confirmPassword, "password again is required");
  } else if (confirmPassword.value !== password.value) {
    setError(confirmPassword, "passwords doesn't match");
  } else if (
    confirmPassword.value === password.value &&
    password.value.length < 6
  ) {
    setError(confirmPassword, "passwords doesn't match");
  } else {
    setSuccess(confirmPassword);
  }
}

username.addEventListener("blur", () => {
  removeSpaces(username);
});
email.addEventListener("blur", () => {
  removeSpaces(email);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
  if (!invalidInputs.length) {
    alert("Form was sent successfully");
  }
});
