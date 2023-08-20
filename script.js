const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "knueee" && password === "knueee") {
        alert("You have successfully logged in.");
        var link = 'select.html';
        location.href=link;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});