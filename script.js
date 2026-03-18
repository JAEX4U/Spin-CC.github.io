const products = [
  {name:'Amazon $10', subtitle:'Instant Delivery • USA', price:'$10', category:'D'},
  {name:'Steam $20', subtitle:'Global Key • Fast', price:'$20', category:'C'},
  {name:'Google Play $25', subtitle:'Secure Email Delivery', price:'$25', category:'D'},
  {name:'iTunes $50', subtitle:'USA Only • Verified', price:'$50', category:'C'},

  {name:'NFC Basic', subtitle:'Tap Enabled Card', price:'$30', category:'NFC'},
  {name:'NFC Pro', subtitle:'High Security NFC', price:'$45', category:'NFC'},

  {name:'OTP Basic', subtitle:'SMS Verified', price:'$15', category:'OTP'},
  {name:'OTP Pro', subtitle:'High Success Rate', price:'$25', category:'OTP'}
];

function render(f='all'){
  const c=document.getElementById('products');
  if(!c) return;
  c.innerHTML='';
  products.filter(p=>f==='all'||p.category===f)
  .forEach(p=>{
    c.innerHTML+=`
    <div class="card">
      <h3>${p.name}</h3>
      <p class="subtitle">${p.subtitle}</p>
      <p class="price">${p.price}</p>
      <button onclick="buy('${p.name}')">Buy</button>
    </div>`;
  });
}

function filterCategory(c){render(c);}

function buy(i){
  window.open("https://t.me/Spin011_cc?text="+i);
}

function goPage(p){
  window.location.href=p;
}

render();
