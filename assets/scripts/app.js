let enteredEmail = '';
let loginForm = document.getElementById("signup-form");

var signUpWrapperElement = document.getElementById("sign-up-wrapper");
var successMessageWrapperElement = document.getElementById("success-message-wrapper");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    enteredEmail = document.getElementById("email").value;

    if(emailValidation(enteredEmail)) {
        document.getElementById("success-email").innerHTML = enteredEmail;
        signUpWrapperElement.style.display = 'none';
        successMessageWrapperElement.style.display = "block";
        loginForm.reset();
    }    
});

function emailValidation(email) {
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let result = '';

    if(email.match(validEmailRegex)) {
        result = true;
        document.getElementById("form-error").style.display = "none";
        document.getElementById("email").setAttribute("class", "form-input");
    } else {
        result = false;
        document.getElementById("form-error").style.display = "flex";
        document.getElementById("email").setAttribute("class", "form-input-error");
    }
    return result;
}

document.getElementById("dismiss-button").addEventListener("click", (event) => {
    event.preventDefault();

    signUpWrapperElement.style.display = 'flex';
    successMessageWrapperElement.style.display = 'none';
});

function widthCheck() {
    let illustration = document.getElementById("illustration-image");

    if(window.screen.width <= 375) {
        illustration.src = './assets/images/illustration-sign-up-mobile.svg';
    } else {
        illustration.src = './assets/images/illustration-sign-up-desktop.svg';
    }
}

window.addEventListener("resize", () => {
    widthCheck();
});