document.addEventListener("DOMContentLoaded", function () {

const cards = document.querySelectorAll(".gift-card");
const buttons = document.querySelectorAll(".gift-card button");

cards.forEach(card => {

card.addEventListener("mousedown", () => {
card.style.transform = "scale(0.95)";
});

card.addEventListener("mouseup", () => {
card.style.transform = "scale(1)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "scale(1)";
});

});

buttons.forEach(button => {

button.addEventListener("click", () => {

let originalText = button.innerText;

button.innerText = "Added!";
button.style.background = "#22c55e";

setTimeout(() => {
button.innerText = originalText;
button.style.background = "#3b82f6";
}, 2000);

});

});

});
