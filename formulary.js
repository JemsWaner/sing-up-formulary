const inputs = document.getElementsByTagName("input");
const formulary = document.getElementsByTagName("form")[0];

function validateInputs() {
  for (let i of inputs) {
    let names = i.name;
    if (i.value == "") {
      i.nextSibling.textContent = `${names} is required`;
      i.className = "red_text";
    } else if (inputs[0].value.length <= 3) {
      inputs[0].nextSibling.textContent = `username must be at least 3 characters`;
      i.className = "red_text";
    } else if (inputs[2].value.length <= 6) {
      inputs[2].nextSibling.textContent = `password must be at least 6 characters`;
      i.className = "red_text";
    } else if (inputs[3].value.length !== inputs[2].value.length) {
      inputs[3].nextSibling.textContent = `Passwords don't match`;
    } else {
      return true;
    }
  }
}

formulary.addEventListener("submit", (data) => {
  data.preventDefault();
  validateInputs();
  if (validateInputs()) {
    for (let i of inputs) {
      i.style.borderColor = "green";
      i.nextSibling.textContent = "";
    }
    alert("the form is valid");
  }
});
