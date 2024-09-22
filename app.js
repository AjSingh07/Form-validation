let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("no-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let fixError = document.getElementById("fix-error");


function validateName() {
    let name = document.getElementById('contact-name').value;
    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    if (phone === "") {
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = "Phone should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits allowed";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    let email = document.getElementById('contact-email').value;
    if (email === "") {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMsg() {
    let msg = document.getElementById('contact-msg').value;
    let required = 30;
    let left = required - msg.length;
    if (left > 0) {
        msgError.innerHTML = left + " more characters required";
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        fixError.style.display = 'block';
        fixError.style.color = 'red';
        fixError.innerHTML = "Please fix the error"
        setTimeout(() => {
            fixError.style.display = 'none';
        }, 3000)
        return false;
    }
    showPopup();
}
let details = document.getElementById('myForm');
details.addEventListener('submit', function (event) {
    event.preventDefault();
})

let showPopup = () => {
    popUp.classList.add("open-popup");
    details.classList.add('disable-form');
}
let hidePopup = () => {
    popUp.classList.remove("open-popup");
    details.classList.remove('disable-form');
}