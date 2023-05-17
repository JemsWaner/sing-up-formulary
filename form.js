const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");
const form = document.querySelector("form");
const inputs = document.getElementsByTagName("input");

function loopInputs() {
  for (let j of inputs) {
    if (j.value.length == 0) {
      j.className = "red-box";
      j.nextSibling.textContent = `${j.name} is required`;
    } else {
      j.className = "green-box";
      j.nextSibling.textContent = "";
    }
  }
  //after loop here it comes the conditionals
  if (user.value.length == 0) {
    user.className = "red-box";
    user.nextSibling.textContent = "username is required";
  } else if (user.value.length < 3) {
    user.className = "red-box";
    user.nextSibling.textContent = "username must be at least 3 characters";
  } else {
    user.className = "green-box";
    user.nextSibling.textContent = "";
  }
}

form.addEventListener("submit", (data) => {
  data.preventDefault();
  loopInputs();
});

// function validateInputs() {
//   for (let i of inputs) {
//     let names = i.name;

//     if (i.value == "") {
//       i.nextSibling.textContent = `${names} is required`;
//       i.classList.add("red_text");
//     } else if (inputs[0].value.length <= 2) {
//       inputs[0].nextSibling.textContent = `username must be at least 3 characters`;
//     } else if (!inputs[1].value.includes(".com")) {
//       inputs[1].nextSibling.textContent = `email doesn't contains ".com"`;
//     } else if (inputs[2].value.length <= 5) {
//       inputs[2].nextSibling.textContent = `password must be at least 6 characters`;
//     } else if (inputs[3].value.length !== inputs[2].value.length) {
//       inputs[3].nextSibling.textContent = `Passwords don't match`;
//     } else {
//       return true;
//     }
//   }
// }

// //////Here I'm just calling the function, adding green border to the sucessfull fields and removing the advertising messages
// form.addEventListener("submit", (data) => {
//   data.preventDefault();
//   validateInputs();
//   if (validateInputs()) {
//     for (let i of inputs) {
//       i.style.borderColor = "green";
//       i.nextSibling.textContent = "";
//     }
//     alert("the form is valid");
//   }
// });
