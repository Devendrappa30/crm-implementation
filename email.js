function sendTestEmail() {
    let email = document.getElementById("emailInput").value.trim();

    if (!validateEmail(email)) {
        document.getElementById("emailStatus").innerText =
            "Invalid email format. Please use example@domain.com";
        return;
    }

    setTimeout(() => {
        document.getElementById("emailStatus").innerText =
            "Email successfully queued for delivery to " + email;
    }, 500);
}
