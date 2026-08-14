const passwordInput = document.getElementById("password");
const strengthElement = document.getElementById("strength");
const messageElement = document.getElementById("message");

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    let score = 0;

    if (password.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    if (password.length === 0) {

        strengthElement.textContent = "";
        messageElement.textContent = "";

    } else if (score <= 2) {

        strengthElement.textContent = "🔴 Weak";
        messageElement.textContent =
            "Try using a longer password with different character types.";

    } else if (score <= 4) {

        strengthElement.textContent = "🟡 Medium";
        messageElement.textContent =
            "Good start! Consider adding more variety.";

    } else {

        strengthElement.textContent = "🟢 Strong";
        messageElement.textContent =
            "Great! This password meets several basic strength checks.";

    }
});
