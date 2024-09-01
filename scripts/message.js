document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-msg");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    let noErrors = true;

    if (emailValue === "") {
      setErrorFor(emailInput, "Le courriel est requis");
      noErrors = false;
    } else if (!isEmail(emailValue)) {
      setErrorFor(emailInput, "Le courriel n'est pas valide");
      noErrors = false;
    } else {
      setSuccessFor(emailInput);
    }

    if (messageValue === "") {
      setErrorFor(messageInput, "Le message est requis");
      noErrors = false;
    } else if (messageValue.length < 15) {
      setErrorFor(
        messageInput,
        "Le message doit contenir au moins 15 caractères"
      );
      noErrors = false;
    } else {
      setSuccessFor(messageInput);
    }

    if (noErrors) {
      // Rediriger vers la page de confirmation
      alert('Merci de nous avoir contacté! Nous vous répondrons dans les plus brefs délais.');
            // Réinitialiser le formulaire
            form.reset();
            // Réinitialiser les états de validation
    }
  });

  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const setErrorFor = (input, message) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".errorMessage");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };

  const setSuccessFor = (input) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".errorMessage");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };
});
