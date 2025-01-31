document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");

    togglePassword.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.innerHTML = "🙈";
        } else {
            passwordField.type = "password";
            togglePassword.innerHTML = "👁️";
        }
    });
});
