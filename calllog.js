console.log("Call logging module initialized - GCI-33");

function logCall() {
    let number = document.getElementById("callInput").value.trim();

    if (!validatePhone(number)) {
        document.getElementById("callStatus").innerText =
            "Invalid phone number. Please enter a 10-digit number.";
        return;
    }

    const timestamp = new Date().toLocaleString();

    document.getElementById("callStatus").innerText =
        "Call logged successfully for " + number + " at " + timestamp;
}

function validatePhone(number) {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
}
