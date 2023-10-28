function editNav() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtnClose = document.querySelector(".close");
const moddalBtnClose2 = document.querySelector(".btn-submit.closeBtn");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnSubmit = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.addEventListener("click", closeModal);
moddalBtnClose2.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
function closeModal() {
    modalbg.style.display = "none";
}

modalBtnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    let isFormValid = true;

    let firstName = document.getElementById("first");
    let lastName = document.getElementById("last");
    let email = document.getElementById("email");
    let birthdate = document.getElementById("birthdate");
    let quantity = document.getElementById("quantity");
    let checkbox1 = document.getElementById("checkbox1");
    let locations = document.querySelectorAll("[name='location']");

    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    function validateField(
        input,
        condition,
        errorMessageElement,
        fieldValue,
        errorMessage
    ) {
        if (!condition(fieldValue)) {
            isFormValid = false;
            // if newspan doesnt exist
            if (!document.getElementById(errorMessageElement)) {
                // create new span
                let newSpan = document.createElement("span");
                newSpan.id = errorMessageElement;
                // ajouter une classe
                newSpan.classList.add("error");
                newSpan.innerHTML = errorMessage;
                input.parentNode.appendChild(newSpan);
            }
        } else {
            //    display none span
            if (document.getElementById(errorMessageElement)) {
                document.getElementById(errorMessageElement).style.display =
                    "none";
            }
        }
    }

    validateField(
        firstName,
        (value) => value.length >= 2,
        "errorFirstName",
        firstName.value,
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );

    validateField(
        lastName,
        (value) => value.length >= 2,
        "errorLastName",
        lastName.value,
        "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );

    validateField(
        email,
        (value) => regexEmail.test(value),
        "errorEmail",
        email.value,
        "Veuillez entrer une adresse email valide."
    );

    validateField(
        birthdate,
        (value) => value !== "",
        "errorBirthdate",
        birthdate.value,
        "Vous devez entrer votre date de naissance."
    );

    validateField(
        quantity,
        (value) => value !== "",
        "errorQuantity",
        quantity.value,
        "Vous devez entrer un nombre."
    );

    validateField(
        checkbox1,
        (value) => value !== false,
        "errorCheckbox1",
        checkbox1.checked,
        "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    let isLocationChecked = false;

    locations.forEach((location) => {
        if (location.checked) {
            isLocationChecked = true;
        }
    });
    // Si aucun élément n'est coché, affichez un message d'erreur
    if (!isLocationChecked) {
        validateField(
            locations[0], // Vous pouvez utiliser le premier élément juste pour avoir un point de référence pour l'insertion du span.
            () => false, // Force la condition à être fausse pour afficher le message d'erreur
            "errorLocation",
            false,
            "Vous devez choisir une ville."
        );
    } else {
        // Si un message d'erreur existe déjà, cachez-le
        let existingError = document.getElementById("errorLocation");
        if (existingError) {
            existingError.style.display = "none";
        }
    }

    if (isFormValid) {
        reserve.style.display = "none";
        validate.style.display = "flex";
        moddalBtnClose2.style.display = "flex";
    } else {
        console.log("form invalid");
    }
});
