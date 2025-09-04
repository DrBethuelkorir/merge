document.addEventListener("DOMContentLoaded", function () {
    // Navigation section switching
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = link.getAttribute("data-section");
            sections.forEach(sec => {
                sec.style.display = sec.id === sectionId ? "block" : "none";
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for contacting us, " + contactForm.name.value + "!");
            contactForm.reset();
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Subscribed with " + newsletterForm.newsletterEmail.value + "!");
            newsletterForm.reset();
        });
    }

    // Show home section by default
    sections.forEach(sec => {
        sec.style.display = sec.id === "home" ? "block" : "none";
    });
});
