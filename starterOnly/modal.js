function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtnClose = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnSumit = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
function closeModal() {
    modalbg.style.display = "none";
}

modalBtnSumit.addEventListener("click", function (e) {

    e.preventDefault();

    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    // let email = document.getElementById("email").value;
    // let birthdate = document.getElementById("birthdate").value;
    // let quantity = document.getElementById("quantity").value;
    // let location = document.querySelector('input[name="location"]:checked').value;
    // let checkbox1 = document.getElementById("checkbox1").checked;

    console.log(firstName, lastName);
    // let error = document.getElementById("error");
    // let errorFirstName = document.getElementById("errorFirstName");
    // let errorLastName = document.getElementById("errorLastName");
    // let errorEmail = document.getElementById("errorEmail");
    // let errorBirthdate = document.getElementById("errorBirthdate");
    // let errorQuantity = document.getElementById("errorQuantity");
    // let errorLocation = document.getElementById("errorLocation");
    // let errorCheckbox1 = document.getElementById("errorCheckbox1");

    let regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (firstName.length < 2 || !regexName.test(firstName)) {
        errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        errorFirstName.style.display = "block";
        errorFirstName.style.color = "red";
        errorFirstName.style.fontSize = "0.8rem";
        errorFirstName.style.marginBottom = "0.5rem";
    } else {
        errorFirstName.style.display = "none";
    }

    // if (lastName.length < 2 || !regexName.test(lastName)) {
    //     errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    //     errorLastName.style.display = "block";
    //     errorLastName.style.color = "red";
    //     errorLastName.style.fontSize = "0.8rem";
    //     errorLastName.style.marginBottom = "0.5rem";
    // } else {
    //     errorLastName.style.display = "none";
    // }

    // if (!regexEmail.test(email)) {
    //     errorEmail.innerHTML = "Veuillez entrer une adresse email valide.";
    //     errorEmail.style.display = "block";
    //     errorEmail.style.color = "red";
    //     errorEmail.style.fontSize = "0.8rem";
    //     errorEmail.style.marginBottom = "0. 5rem";
    // }
    // else {
    //     errorEmail.style.display = "none";
    // }

    // if (birthdate == "") {
    //     errorBirthdate.innerHTML = "Vous devez entrer votre date de naissance.";
    //     errorBirthdate.style.display = "block";
    //     errorBirthdate.style.color = "red";
    //     errorBirthdate.style.fontSize = "0.8rem";
    //     errorBirthdate.style.marginBottom = "0.5rem";
    // }
    // else {
    //     errorBirthdate.style.display = "none";
    // }

    // if (quantity == "") {
    //     errorQuantity.innerHTML = "Vous devez entrer un nombre.";
    //     errorQuantity.style.display = "block";
    //     errorQuantity.style.color = "red";
    //     errorQuantity.style.fontSize = "0.8rem";
    //     errorQuantity.style.marginBottom = "0.5rem";
    // }
    // else {
    //     errorQuantity.style.display = "none";
    // }

    // if (location == "") {
    //     errorLocation.innerHTML = "Vous devez choisir une ville.";
    //     errorLocation.style.display = "block";
    //     errorLocation.style.color = "red";
    //     errorLocation.style.fontSize = "0.8rem";
    //     errorLocation.style.marginBottom = "0.5rem";
    // }
    // else {
    //     errorLocation.style.display = "none";
    // }

    // if (!checkbox1) {
    //     errorCheckbox1.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    //     errorCheckbox1.style.display = "block";
    //     errorCheckbox1.style.color = "red";
    //     errorCheckbox1.style.fontSize = "0.8rem";
    //     errorCheckbox1.style.marginBottom = "0.5rem";
    // }
    // else {
    //     errorCheckbox1.style.display = "none";
    // }

    // if (firstName.length >= 2 && regexName.test(firstName) && lastName.length >= 2 && regexName.test(lastName) && regexEmail.test(email) && birthdate != "" && quantity != "" && location != "" && checkbox1) {
    //     error.style.display = "none";
    //     document.getElementById("form").innerHTML = "<p class='success'>Merci ! Votre réservation a été reçue.</p>";
    // }
    // else {
    //     error.innerHTML = "Veuillez remplir tous les champs.";
    //     error.style.display = "block";
    //     error.style.color = "red";
    //     error.style.fontSize = "0.8rem";
    //     error.style.marginBottom = "0.5rem";
    // }

}
);



