// ======================================
// SAMEER AUTO ELECTRICIAN
// JAVASCRIPT
// ======================================


// ======================================
// 1. WHATSAPP NUMBER
// ======================================

// IMPORTANT:
// Replace this with your father's real
// WhatsApp number.
//
// Example:
// const WHATSAPP_NUMBER = "919876543210";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";


// ======================================
// 2. MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


// Close menu after clicking a link

const navigationLinks =
    document.querySelectorAll("#navLinks a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


// ======================================
// 3. CURRENT YEAR
// ======================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ======================================
// 4. WHATSAPP CONTACT BUTTON
// ======================================

const whatsappLink =
    document.getElementById("whatsappLink");


whatsappLink.addEventListener("click", function (event) {

    event.preventDefault();


    if (WHATSAPP_NUMBER.includes("X")) {

        alert(
            "Please add the garage WhatsApp number in script.js"
        );

        return;
    }


    const message =
        "Hello SAMEER AUTO ELECTRICIAN, " +
        "I want to enquire about car repair/service.";


    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

});


// ======================================
// 5. BOOKING FORM
// ======================================

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get form values

    const name =
        document.getElementById("name").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const car =
        document.getElementById("car").value.trim();


    const problem =
        document.getElementById("problem").value.trim();


    const date =
        document.getElementById("date").value;


    const time =
        document.getElementById("time").value;


    // Check WhatsApp number

    if (WHATSAPP_NUMBER.includes("X")) {

        alert(
            "Please replace WHATSAPP_NUMBER in script.js with your father's real WhatsApp number."
        );

        return;
    }


    // Create WhatsApp message

    const message =

`🚘 *NEW SERVICE REQUEST*

*Name:* ${name}

*Mobile:* ${phone}

*Car Model:* ${car}

*Problem / Service:* ${problem}

*Preferred Date:* ${date}

*Preferred Time:* ${time}`;


    // Create WhatsApp URL

    const whatsappURL =

        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    // Open WhatsApp

    window.open(
        whatsappURL,
        "_blank"
    );

});