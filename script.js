const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm-password");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", event => {
  if (confirmedPassword.value) {
    if (password.value !== confirmedPassword.value) {
      errorMessage.textContent = "* Password do not match";
      errorMessage.classList.add("error");

      event.preventDefault();
    } else {
      errorMessage.textContent = "";
      errorMessage.classList.remove("error");
    }
  }
});
