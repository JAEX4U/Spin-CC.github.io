const products = [

  {name: 'Amazon D Card $10', price: '$10', category: 'D'},
  {name: 'Amazon D Card $25', price: '$25', category: 'D'},
  {name: 'Visa D Card $20', price: '$20', category: 'D'},

  {name: 'MasterCard C $15', price: '$15', category: 'C'},
  {name: 'Google Play C $5', price: '$5', category: 'C'},
  {name: 'Steam C $20', price: '$20', category: 'C'},

  {name: 'NFC Tap Card Basic', price: '$25', category: 'NFC'},
  {name: 'NFC Tap Card Pro', price: '$40', category: 'NFC'},

  {name: 'OTP Card Basic', price: '$8', category: 'OTP'},
  {name: 'OTP Card Premium', price: '$18', category: 'OTP'}

];

function render(filter = 'all') {
  const container = document.getElementById('products');
  if (!container) return;

  container.innerHTML = '';

  products
    .filter(p => filter === 'all' || p.category === filter)
    .forEach(p => {

      const div = document.createElement('div');
      div.className = 'card';

      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="buy('${p.name}')">Buy Now</button>
      `;

      container.appendChild(div);
    });
}

function filterCategory(cat) {
  render(cat);
}

function buy(item) {
  const url = "https://t.me/Spin011_cc?text=" + encodeURIComponent("I want to buy " + item);
  window.open(url, '_blank');
}

render();
