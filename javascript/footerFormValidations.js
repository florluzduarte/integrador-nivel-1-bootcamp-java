window.addEventListener("load", () => {
  const footerForm = document.getElementById("footer-form");
  const footerName = document.getElementById("name");
  const footerEmail = document.getElementById("email");
  const footerMessage = document.getElementById("message");

  footerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
  });

  const validateInputs = () => {
    const userName = footerName.value.trim().toLowerCase();
    const userEmail = footerEmail.value.trim().toLowerCase();
    const userMessage = footerMessage.value;

    userName.length < 2
      ? inputError(footerName, "Debe tener al menos dos caracteres")
      : inputChecked(footerName);

    if (!userEmail) {
      inputError(footerEmail, "Campo vacío");
    } else if (!validateEmail(userEmail)) {
      inputError(footerEmail, "El email no es válido");
    } else {
      inputChecked(footerEmail);
    }

    if (!userMessage) {
      inputError(footerMessage, "Campo vacío");
    } else if (userMessage.length < 2) {
      inputError(footerMessage, "Mensaje incompleto");
    } else {
      inputChecked(footerMessage);
    }
  };

  const inputError = (input, message) => {
    const formElement = input.parentElement;
    const warning = formElement.querySelector("p");
    warning.innerText = message;
    formElement.classList.add("form-error");
  };

  const inputChecked = (input) => {
    const formElement = input.parentElement;
    const warning = formElement.querySelector("p");
    if (formElement.className.includes("form-error")) {
      formElement.classList.remove("form-error");
      warning.innerText = "";
    }
    formElement.classList.add("form-checked");
  };

  const validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
});
