document.addEventListener("click", (event) => {
    var modal = document.getElementById("myModal");
    var submitButton = document.getElementById("contact-submit");
    var span = document.getElementsByClassName("close")[0];
    // submitButton.onclick = () => {
    //     modal.style.display = "block";
    // }
    span.onclick = function() {
        modal.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let submitButton = document.getElementById("contact-submit")
    const firstName = document.getElementById("firstname")
    const lastName = document.getElementById("lastname")
    const telephone = document.getElementById("telephone")
    const email = document.getElementById("email")
    let nameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i
    let telephoneValid = /^[0-9 \+']+$/i
    let emailValid = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/
    var firstNameValidation = () => {
        let result = false
        const firstNameMessage = document.getElementById("firstNameMessage")
        if (nameValid.test(firstName.value) === false) {
            firstNameMessage.innerHTML = "Enter the valid Nom"
            firstName.classList.remove("valid-box")
            firstName.classList.add("error-box")
            result = true
        } else if (nameValid.test(firstName.value) === true) {
            firstNameMessage.innerHTML = "";
            firstName.classList.remove("error-box")
            firstName.classList.add("valid-box")
            result = false
        }
        return result
    }
    var lastNameValidation = () => {
        let result = false
        const lastNameMessage = document.getElementById("lastNameMessage")
        if (nameValid.test(lastName.value) === false) {
            lastNameMessage.innerHTML = "Enter the valid Prénom";
            lastName.classList.remove("valid-box")
            lastName.classList.add("error-box")
            result = true
        } else if (nameValid.test(lastName.value) === true) {
            lastNameMessage.innerHTML = "";
            lastName.classList.remove("error-box")
            lastName.classList.add("valid-box")
            result = false
        }
        return result
    }
    var telephoneValidation = () => {
        const telephoneMessage = document.getElementById("telephoneMessage")
        if (telephoneValid.test(telephone.value) === false) {
            telephoneMessage.innerHTML = "Enter the valid Téléphone";
            telephone.classList.remove("valid-box")
            telephone.classList.add("error-box")
            return true
        } else if (telephoneValid.test(telephone.value) === true) {
            telephoneMessage.innerHTML = "";
            telephone.classList.remove("error-box")
            telephone.classList.add("valid-box")
            return false
        }
    }
    var emailValidation = () => {
        let result = false
        const emailMessage = document.getElementById("emailMessage")
        if (emailValid.test(email.value) === false) {
            emailMessage.innerHTML = "Enter the valid Adresse mail"
            email.classList.remove("valid-box")
            email.classList.add("error-box")
            result = true
        } else if (emailValid.test(email.value) === true) {
            emailMessage.innerHTML = "";
            email.classList.remove("error-box")
            email.classList.add("valid-box")
            result = false
        }
        return result
    }
    firstName.oninput = () => {
        firstNameValidation()
    }
    lastName.oninput = () => {
        lastNameValidation()
    }
    telephone.oninput = () => {
        if (telephone.value != "") {
            telephoneValidation()
        } else {
            telephone.classList.remove("error-box")
            telephone.classList.remove("valid-box")
        }
    }
    email.oninput = () => {
        emailValidation()
    }
    submitButton.onclick = () => {
        if (!firstNameValidation() && !lastNameValidation() ) {
            console.log("Name" + firstName.value + " " + lastName.value)
        } else if (!firstNameValidation || !lastNameValidation ) {
            document.getElementById("contact-submit").disabled = true;
        }
    }
})
