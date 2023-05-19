const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const form = document.querySelector("form");
const inputs = document.getElementsByTagName("input");
const span = document.getElementsByTagName("span");
const numbers = /[0-9]/g;
/*Below are there two necessary functions to confirm emails and usernames*/

function validateEmail(input) {
  var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
let whiteSpaces = () => {
  let newString = user.value.replace(/\s/g, "");
  user.value = newString;
  //another way that I learned was: let newString = user.value.trim() but I doesn't search in betweens
};
function loopInputs() {
  //////////*To confirm the user first*/////////////////
  if (user.value.length == "") {
    user.className = "red-box";
    span[0].textContent = `username is required`;
  } else if (user.value.length < 3) {
    user.className = "red-box";
    span[0].textContent = `username must be at least 3 characters`;
  }
  // else if (user.value.includes(" ")) {
  // //   user.className = "red-box";
  // //   span[0].textContent = `username musn't contain spaces`;
  // //
  // // }  I don't need to use this code anymore because I automatically fixed the white spaces with the function whiteSpaces()
  else {
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
  } else if (!password.value.match(numbers)) {
    password.className = "red-box";
    span[2].textContent = `passwords must contain numbers`;
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
    (confirmPassword.value == password.value && password.value.length < 6) ||
    !password.value.match(numbers)
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
  whiteSpaces();
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

