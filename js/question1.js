const lastName = document.querySelector("#lastName");
const error = document.querySelector("#lastNameError");
const form = document.querySelector("#contactForm");

function validate() {
  event.preventDefault();

  if (lastName.value.length >= 5) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  };
};

form.addEventListener("submit", validate);
