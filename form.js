const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const form = document.querySelector("form");
const inputs = document.getElementsByTagName("input");
const span = document.getElementsByTagName("span");
/*Below is there a necessary function to confirm emails and*/

function validateEmail(input) {
  let validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input.match(validate)) {
    return true;
  } else {
    return false;
  }
}
function deleteSpaces() {
  let value = user.value.trim();
  user.value = value;
}

function loopInputs() {
  //////////*To confirm the user first*/////////////////
  user.addEventListener("mouseout", () => {
    deleteSpaces();
  });
  if (user.value.length == "") {
    user.className = "red-box";
    span[0].textContent = `username is required`;
  } else if (user.value.length < 3) {
    user.className = "red-box";
    span[0].textContent = `username must be at least 3 characters`;
  } else if (user.value.includes(" ")) {
    user.className = "red-box";
    span[0].textContent = `username musn't contain spaces`;
  } else {
    user.className = "green-box";
    span[0].textContent = "";
  }

  ///////////////* Now confirm the email*//////////////////
  if (email.value.length == "") {
    email.className = "red-box";
    span[1].textContent = `email is required`;
  } else if (email.value.includes(" ")) {
    user.className = "red-box";
    span[1].textContent = `email musn't contain spaces`;
  } else if (validateEmail(email.value) !== true) {
    email.className = "red-box";
    span[1].textContent = `please put a valid email`;
  } else {
    email.className = "green-box";
    span[1].textContent = "";
  }
  ///////////////* Now confirm the Passwords*//////////////////
  if (password.value.length == "") {
    password.className = "red-box";
    span[2].textContent = `password is required`;
  } else if (password.value.length < 6) {
    password.className = "red-box";
    span[2].textContent = `password must be at least 6 characters`;
  } else {
    password.className = "green-box";
    span[2].textContent = "";
  }
  ///////////////* Checking if the two Passwords match*//////////////////
  if (confirmPassword.value.length == "") {
    confirmPassword.className = "red-box";
    span[3].textContent = `password again is required`;
  } else if (confirmPassword.value !== password.value) {
    confirmPassword.className = "red-box";
    span[3].textContent = `passwords doesn't match`;
  } else if (
    confirmPassword.value == password.value &&
    password.value.length < 6
  ) {
    confirmPassword.className = "red-box";
    span[3].textContent = `passwords doesn't match`;
  } else {
    confirmPassword.className = "green-box";
    span[3].textContent = "";
  }
}

form.addEventListener("submit", (data) => {
  data.preventDefault();
  loopInputs();
  /* Here below I just passed through all the inputs wich has the green box class. 
  If it's green and the counter has 4 in result of all the inputs it finally means that It works wonder */
  let counter = 0;
  for (let i of inputs) {
    if (i.className == "green-box") {
      counter++;
    }
  }
  if (counter == 4) {
    alert("Form send sucessfully");
  }
});
