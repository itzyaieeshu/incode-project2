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
    let nameValidation = () => {
        const firstNameMessage = document.getElementById("firstNameMessage")
        let nameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i
        if (nameValid.test(firstName.value) === false) {
            firstNameMessage.innerHTML = "Enter the valid name";
            return true
        } else if (nameValid.test(firstName.value) === true) {
            firstNameMessage.innerHTML = "";
            return false
        }
    }
    firstName.oninput = () => {
        nameValidation()
    }
})