// Modal functionality
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const buyButtons = document.querySelectorAll('.buy-btn');
const selectedItemEl = document.getElementById('selected-item');
const totalPriceEl = document.getElementById('total-price');

buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.getAttribute('data-name');
    const price = btn.getAttribute('data-price');
    
    selectedItemEl.textContent = `You selected: ${name}`;
    totalPriceEl.textContent = `$${price}`;
    
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Fake form submit
document.getElementById('checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks for your demo order! This is just a practice site — no real purchase happened. 🎉");
  modal.style.display = 'none';
});
