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
const modalBtnSumit = document.querySelector(".btn-submit");
// const reserve = document.querySelector(".reserve");

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

modalBtnSumit.addEventListener("click", function (e) {
    e.preventDefault();
    let isFormValid = true;

    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let quantity = document.getElementById("quantity").value;
    let location1 = document.getElementById("location1").checked;
    let location2 = document.getElementById("location2").checked;
    let location3 = document.getElementById("location3").checked;
    let location4 = document.getElementById("location4").checked;
    let location5 = document.getElementById("location5").checked;
    let location6 = document.getElementById("location6").checked;
    let checkbox1 = document.getElementById("checkbox1").checked;

    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (firstName.length < 2) {
        isFormValid = false;
        errorFirstName.innerHTML =
            "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        errorFirstName.style.display = "block";
    } else {
        errorFirstName.style.display = "none";
    }

    if (lastName.length < 2) {
        isFormValid = false;
        errorLastName.innerHTML =
            "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        errorLastName.style.display = "block";
    } else {
        errorLastName.style.display = "none";
    }

    if (!regexEmail.test(email)) {
        isFormValid = false;
        errorEmail.innerHTML = "Veuillez entrer une adresse email valide.";
        errorEmail.style.display = "block";
    } else {
        errorEmail.style.display = "none";
    }

    if (birthdate == "") {
        isFormValid = false;
        errorBirthdate.innerHTML = "Vous devez entrer votre date de naissance.";
        errorBirthdate.style.display = "block";
    } else {
        errorBirthdate.style.display = "none";
    }

    if (quantity == "") {
        isFormValid = false;
        errorQuantity.innerHTML = "Vous devez entrer un nombre.";
        errorQuantity.style.display = "block";
    } else {
        errorQuantity.style.display = "none";
    }

    if (
        location1 === false &&
        location2 === false &&
        location3 === false &&
        location4 === false &&
        location5 === false &&
        location6 === false
    ) {
        isFormValid = false;
        errorLocation1.innerHTML = "Vous devez choisir une ville.";
        errorLocation1.style.display = "block";
    } else {
        errorLocation1.style.display = "none";
    }

    if (checkbox1 === false) {
        isFormValid = false;
        errorCheckbox1.innerHTML =
            "Vous devez vérifier que vous acceptez les termes et conditions.";
        errorCheckbox1.style.display = "block";
    } else {
        errorCheckbox1.style.display = "none";
    }

    if (isFormValid) {
        reserve.style.display = "none";
        validate.style.display = "flex";
        moddalBtnClose2.style.display = "flex";
    } else {
        console.log("form invalid");
    }
});
