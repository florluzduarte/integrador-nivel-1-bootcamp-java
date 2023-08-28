window.addEventListener("load", () => {
  const inscriptionForm = document.getElementById("inscription-form");
  const parentName = document.getElementById("parent-name");
  const studentName = document.getElementById("student-name");
  const contactEmail = document.getElementById("contact-email");
  const contactPhone = document.getElementById("phone");
  const hourClasses = document.getElementById("classes");
  const inscriptionMessage = document.getElementById("inscription-message");

  inscriptionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
  });

  const validateInputs = () => {
    const userParentName = parentName.value.trim().toLowerCase();
    const userStudentName = studentName.value.trim().toLowerCase();
    const userEmail = contactEmail.value.trim().toLowerCase();
    const userPhone = contactPhone.value.trim().toString();
    const userSelectedClasses = hourClasses.value.trim().toLowerCase();
    console.log(userSelectedClasses);
    const userMessage = inscriptionMessage.value;
    const minPhoneDigits = 8;

    userParentName.length < 2
      ? inputError(parentName, "Debe tener al menos dos caracteres")
      : inputChecked(parentName);

    userStudentName.length < 2
      ? inputError(studentName, "Debe tener al menos dos caracteres")
      : inputChecked(studentName);

    if (!userEmail) {
      inputError(contactEmail, "Campo vacío");
    } else if (!validateEmail(userEmail)) {
      inputError(contactEmail, "El email no es válido");
    } else {
      inputChecked(contactEmail);
    }

    if (!userPhone) {
      inputError(contactPhone, "Campo vacío");
    } else if (userPhone.length < minPhoneDigits) {
      inputError(contactPhone, "Número de teléfono incompleto");
    } else {
      inputChecked(contactPhone);
    }

    if (!userSelectedClasses) {
      inputError(hourClasses, "Campo vacío");
    } else if (!["mañana", "tarde"].includes(userSelectedClasses)) {
      inputError(hourClasses, "Los turnos disponibles son Mañana o Tarde");
    } else {
      inputChecked(hourClasses);
    }

    if (!userMessage) {
      inputError(inscriptionMessage, "Campo vacío");
    } else if (userMessage.length < 2) {
      inputError(inscriptionMessage, "Mensaje incompleto");
    } else {
      inputChecked(inscriptionMessage);
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
