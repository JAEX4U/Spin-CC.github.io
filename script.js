// Gift card press animation

const cards = document.querySelectorAll(".gift-card");

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


// Buy button click animation

const buttons = document.querySelectorAll(".gift-card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

const originalText = button.innerText;

button.innerText = "Added!";
button.style.background = "#22c55e";

setTimeout(() => {

button.innerText = originalText;
button.style.background = "#3b82f6";

},2000);

});

});
