const cards = document.querySelectorAll(".gift-card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

cards.forEach(card => {
observer.observe(card);
});


const buttons = document.querySelectorAll(".gift-card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

button.innerText = "Added!";
button.style.background = "#22c55e";

setTimeout(() => {

button.innerText = "Buy";
button.style.background = "#3b82f6";

},2000);

});

});
