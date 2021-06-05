const input = document.querySelector("input");
const button = document.querySelector("button");
const emailDiv = document.querySelector(".email");
const p = document.createElement("p");

const emailFormat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateForm(e) {
  if (!input.value) {
    e.preventDefault();
    e.stopPropagation();
    input.classList.add("error");
    p.classList.add("error-p");
    p.innerText = "Whoops! It looks like you forgot to add your email";
    emailDiv.append(p);
  } else if (!input.value.match(emailFormat)) {
    e.preventDefault();
    e.stopPropagation();
    input.classList.add("error");
    p.classList.add("error-p");
    p.innerText = "Please provide a valid email address";
    emailDiv.append(p);
  }
  return;
}

button.addEventListener("click", validateForm);
