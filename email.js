console.log("Email module initialized - GCI-32");

function sendTestEmail() {
    const email = document.getElementById("emailInput").value;

    if (!validateEmail(email)) {
        document.getElementById("emailStatus").innerText =
            "Invalid email format. Please use example@domain.com";
        return;
    }

    // Simulate backend processing
    setTimeout(() => {
        document.getElementById("emailStatus").innerText =
            "Email successfully queued for delivery to " + email;
    }, 500);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
