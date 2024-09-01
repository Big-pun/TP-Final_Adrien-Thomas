document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[aria-label="Formulaire d\'inscription à la newsletter"]');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailValue = emailInput.value.trim();
        let noErrors = true;

        if (emailValue === '') {
            setErrorFor(emailInput, 'Le courriel est requis');
            noErrors = false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(emailInput, 'Le courriel n\'est pas valide');
            noErrors = false;
        } else {
            setSuccessFor(emailInput);
            console.log('courriel:', emailValue);
        }

        if (noErrors) {
            // Afficher un message de confirmation
            alert('Merci de vous être inscrit à notre infolettre!');
            // Réinitialiser le formulaire
            form.reset();
            // Réinitialiser les états de validation
            resetValidationStates(emailInput);
        }

    });

    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    const setErrorFor = (input, message) => {
        const inputControl = input.parentElement;
        const errorDisplay = inputControl.querySelector('.errorMessage');
        console.log('message:', message);
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    
    const setSuccessFor = (input) => {
        const inputControl = input.parentElement;
        const errorDisplay = inputControl.querySelector('.errorMessage');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }
});