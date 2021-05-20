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