const validateForm = () => {
    console.log('validateForm');

    let noErrors = true;

    // Get the form elements
    let form = document.getElementById('inscriptionForm');
    let prenomInput = document.getElementById('prenom');
    let nomInput = document.getElementById('nom');
    let courrielInput = document.getElementById('email');
    let telephoneInput = document.getElementById('telephone');
    let dateDeNaissance = document.getElementById('dateDeNaissance');
    let genreInput = document.getElementById('genre');
    let etudiantRadios = document.getElementsByName('etudiant');
    let conditionInput = document.getElementById('condition');
   

    const prenom = prenomInput.value.trim();
    const nom = nomInput.value.trim();
    const courriel = courrielInput.value.trim();
    const telephone = telephoneInput.value.trim();
    const date = dateDeNaissance.value;
    const genre = genreInput.value;
    const sources = document.getElementsByName('source');
    const condition = conditionInput.checked;

    // Validate the form
    if (prenom === '') {
        setErrorFor(prenomInput, 'Le prénom est requis');
        noErrors = false;
    } else if (prenomInput.value.length > 20 || prenomInput.value.length < 2) {
        setErrorFor(prenomInput, 'Le prénom doit être entre 2 et 20 caractères');
        noErrors = false;
    } else if (!/^[a-zA-Z]+$/.test(prenom)) {
        setErrorFor(prenomInput, 'Le prénom doit contenir des lettres seulement');
        noErrors = false;
    } else {
        setSuccessFor(prenomInput);
        console.log('prenom:', prenom);
    }

    if (nom === '') {
        setErrorFor(nomInput, 'Le nom est requis');
        noErrors = false;
    } else if (nomInput.value.length > 20 || nomInput.value.length < 2) {
        setErrorFor(nomInput, 'Le nom doit être entre 2 et 20 caractères');
        noErrors = false;
    } else if (!/^[a-zA-Z]+$/.test(nom)) {
        setErrorFor(nomInput, 'Le nom doit contenir des lettres seulement');
        noErrors = false;
    } else {
        setSuccessFor(nomInput);
        console.log('nom:', nom);
    }

    if (courriel === '') {
        setErrorFor(courrielInput, 'Le courriel est requis');
        noErrors = false;
    } else if (!isEmail(courriel)) {
        setErrorFor(courrielInput, 'Le courriel n\'est pas valide');
        noErrors = false;
    } else {
        setSuccessFor(courrielInput);
        console.log('courriel:', courriel);
    }

    if (telephone === '') {
        setErrorFor(telephoneInput, 'Le numéro de téléphone est requis');
        noErrors = false;
    } else if (!isTelephone(telephone)) {
        setErrorFor(telephoneInput, 'Le numéro de téléphone n\'est pas valide');
        noErrors = false;
    } else {
        setSuccessFor(telephoneInput);
        console.log('telephone:', telephone);
    }

    if (date === '') {
        setErrorFor(dateDeNaissance, 'La date de naissance est requise');
        noErrors = false;
    } else {
        setSuccessFor(dateDeNaissance);
        console.log('date de naissance:', date);
    }

    if (genre === '') {
        setErrorFor(genreInput, 'Le genre est requis');
        noErrors = false;
    } else {
        setSuccessFor(genreInput);
        console.log('genre:', genre);
    }

    let sourceChecked = Array.from(sources).some(source => source.checked);
    const sourceContainer = document.querySelector('.source-control');
    if (!sourceChecked) {
        setErrorFor(sourceContainer, 'Vous devez choisir une source');
        (sourceContainer).classList.remove('success');
        (sourceContainer).classList.add('error');
        noErrors = false;
    } else {
        setSuccessFor(sourceContainer);
        (sourceContainer).classList.remove('error');
        (sourceContainer).classList.add('success');
        console.log('source:', document.querySelector('input[name="source"]:checked').value);
    }

    let etudiantChecked = false;
    etudiantRadios.forEach(radio => {
        if (radio.checked) {
            etudiantChecked = true;
        }
    });

    if (!etudiantChecked) {
        setErrorFor(document.querySelector('.etudiant-control'), 'Vous devez choisir une option');
        (document.querySelector('.etudiant-control')).classList.remove('success');
        (document.querySelector('.etudiant-control')).classList.add('error');

        noErrors = false;
    } else {
        setSuccessFor(document.querySelector('.etudiant-control'));
        (document.querySelector('.etudiant-control')).classList.remove('error');
        (document.querySelector('.etudiant-control')).classList.add('success');

        console.log('étudiant:', document.querySelector('input[name="etudiant"]:checked').value);
    }


    const conditionContainer = document.querySelector('.condition-control');
    if (!condition) {
        setErrorFor(conditionContainer, 'Vous devez accepter la condition');
        (conditionContainer).classList.remove('success');
        (conditionContainer).classList.add('error');

        noErrors = false;
    } else {
        setSuccessFor(conditionContainer);
        (conditionContainer).classList.remove('error');
        (conditionContainer).classList.add('success');
        console.log('condition:', condition);
    }

    return noErrors;
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

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const isTelephone = (telephone) => {
    return /^\d{10}$/.test(telephone);
}

addEventListener('load', () => {
    console.log('loaded');
    const form = document.getElementById('inscriptionForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('submit');
        if (validateForm()) {
            form.submit();
            window.location.href = 'confirmation.html';
        }
    }
    );
});