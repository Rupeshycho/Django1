function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "9779819961413"; // no + here
    const text =
        `Hello Sir,%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Message: ${message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    // ✅ SHOW POPUP (FIXED ID)
    document.getElementById("blurOverlay").classList.add("show");

    // Auto close after 4 seconds
    setTimeout(closePopup, 4000);
}

function closePopup() {
    document.getElementById("blurOverlay").classList.remove("show");
}
