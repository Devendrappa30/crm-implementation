function logCall() {
    const number = document.getElementById("callInput").value;

    if (!validatePhone(number)) {
        document.getElementById("callStatus").innerText = "Invalid phone number.";
        return;
    }

    document.getElementById("callStatus").innerText =
        "Call logged successfully for " + number;
}

function validatePhone(number) {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
}