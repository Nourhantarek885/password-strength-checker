const passwordInput = document.getElementById("password");
const strengthElement = document.getElementById("strength");
const messageElement = document.getElementById("message");

const strengthFill = document.getElementById("strength-fill");
const togglePassword = document.getElementById("togglePassword");

const lengthRequirement = document.getElementById("length");
const uppercaseRequirement = document.getElementById("uppercase");
const lowercaseRequirement = document.getElementById("lowercase");
const numberRequirement = document.getElementById("number");
const specialRequirement = document.getElementById("special");

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    updateRequirement(lengthRequirement, hasLength, "At least 8 characters");
    updateRequirement(uppercaseRequirement, hasUppercase, "Contains an uppercase letter");
    updateRequirement(lowercaseRequirement, hasLowercase, "Contains a lowercase letter");
    updateRequirement(numberRequirement, hasNumber, "Contains a number");
    updateRequirement(specialRequirement, hasSpecial, "Contains a special character");

    let score = 0;

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (password.length === 0) {

    strengthElement.textContent = "";
    messageElement.textContent = "";
    strengthFill.style.width = "0%";

} else if (score <= 2) {

    strengthElement.textContent = "🔴 Weak";
    messageElement.textContent =
        "Try to meet more of the requirements.";

    strengthFill.style.width = "40%";

} else if (score <= 4) {

    strengthElement.textContent = "🟡 Medium";
    messageElement.textContent =
        "Good start! Try to meet all requirements.";

    strengthFill.style.width = "70%";

} else {

    strengthElement.textContent = "🟢 Strong";
    messageElement.textContent =
        "Great! All basic requirements are met.";

    strengthFill.style.width = "100%";
}

        strengthElement.textContent = "";
        messageElement.textContent = "";

    } else if (score <= 2) {

        strengthElement.textContent = "🔴 Weak";
        messageElement.textContent =
            "Try to meet more of the requirements.";

    } else if (score <= 4) {

        strengthElement.textContent = "🟡 Medium";
        messageElement.textContent =
            "Good start! Try to meet all requirements.";

    } else {

        strengthElement.textContent = "🟢 Strong";
        messageElement.textContent =
            "Great! All basic requirements are met.";
    }
});

function updateRequirement(element, condition, text) {

    if (condition) {
        element.textContent = "✅ " + text;
    } else {
        element.textContent = "❌ " + text;
    }
}
togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "👁️";

    }

});
