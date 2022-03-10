const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();

  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "email is required");
  } else {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValidEmail = emailRegex.test(email.value);
    isValidEmail ? showSuccess(email) : showError(email, "invalid email");
  }
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "please confirm your password!");
  } else {
    password2.value !== password.value
      ? showError(password2, "passwords must match!")
      : showSuccess(password2);
  }
});
