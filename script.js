// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".gift-card");

    // If no cards found, stop script (prevents errors)
    if (!cards.length) {
        console.log("No gift cards found on this page.");
        return;
    }

    // Card animation
    cards.forEach(function(card) {

        // Hover effect
        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.2s ease";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
        });

        // Press effect
        card.addEventListener("mousedown", function () {
            card.style.transform = "scale(0.95)";
        });

        card.addEventListener("mouseup", function () {
            card.style.transform = "scale(1.05)";
        });

    });

    // Button animation
    const buttons = document.querySelectorAll(".gift-card button");

    buttons.forEach(function(button) {

        button.addEventListener("click", function () {

            const originalText = button.innerText;

            button.innerText = "Added!";
            button.style.backgroundColor = "#22c55e";

            setTimeout(function () {
                button.innerText = originalText;
                button.style.backgroundColor = "#3b82f6";
            }, 2000);

        });

    });

});
