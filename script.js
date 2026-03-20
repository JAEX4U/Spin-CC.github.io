const products = [
  {name:'Amazon $10', subtitle:'Instant Delivery • USA', price:'$10', detail:'ZIP', category:'D'},
  {name:'Steam $20', subtitle:'Global Key • Fast', price:'$20', detail:'ZIP', category:'C'},
  {name:'Google Play $25', subtitle:'Secure Delivery', price:'$25', detail:'ZIP', category:'D'},
  {name:'IDAHO CENTRAL CREDIT UNION', subtitle:'APP,Instant minics, Alerts, Travel center, SSN+DOB', price:'$50', detail:'Available - 3458.53, STATE - ID, ZIP-83204', category:'C'},
  {name:'VISA Primium', subtitle:'AU | BALANCE= $100', price:'$30', detail:'ZIP', category:'D'},
  
  {name:'NFC Basic', subtitle:'Tap Enabled', price:'$30', detail:'ZIP', category:'NFC'},
  {name:'NFC Pro', subtitle:'High Security', price:'$45', detail:'ZIP', category:'NFC'},
  {name:'Google Play $25', subtitle:'Secure Delivery', price:'$25', detail:'ZIP', category:'D'},
  
  {name:'OTP Basic', subtitle:'SMS Verified', price:'$15', detail:'ZIP', category:'OTP'},
  {name:'OTP Pro', subtitle:'High Success', price:'$25', detail:'ZIP', category:'OTP'}
];

function render(f='D'){
  const c=document.getElementById('products');
  if(!c) return;
  c.innerHTML='';
  products.filter(p=>p.category===f)
  .forEach(p=>{
    c.innerHTML+=`
    <div class="card">
      <h3>${p.name}</h3>
      <p class="subtitle">${p.subtitle}</p>
      <p class="details">${p.detail}</p>
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
