window.onload = (event) => {
    document.getElementById("contact-submit").disabled = false;
}
document.addEventListener("click", (event) => {
    var modal = document.getElementById("myModal");
    var submitButton = document.getElementById("contact-submit");
    var span = document.getElementsByClassName("close")[0];
    submitButton.onclick = () => {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const firstName = document.getElementById("firstname")
    const lastName = document.getElementById("lastname")
    let nameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i
    let firstNameValidation = () => {
        const firstNameMessage = document.getElementById("firstNameMessage")
        if (nameValid.test(firstName.value) === false) {
            firstNameMessage.innerHTML = "Enter the valid Nom"
            firstName.classList.remove("valid-box")
            firstName.classList.add("error-box")
            return true
        } else if (nameValid.test(firstName.value) === true) {
            firstNameMessage.innerHTML = "";
            firstName.classList.remove("error-box")
            firstName.classList.add("valid-box")
            return false
        }
    }
    let lastNameValidation = () => {
        const lastNameMessage = document.getElementById("lastNameMessage")
        if (nameValid.test(lastName.value) === false) {
            lastNameMessage.innerHTML = "Enter the valid Prénom";
            lastName.classList.remove("valid-box")
            lastName.classList.add("error-box")
            return true
        } else if (nameValid.test(lastName.value) === true) {
            lastNameMessage.innerHTML = "";
            lastName.classList.remove("error-box")
            lastName.classList.add("valid-box")
            return false
        }
    }
    firstName.oninput = () => {
        firstNameValidation()
    }
    lastName.oninput = () => {
        lastNameValidation()
    }
})