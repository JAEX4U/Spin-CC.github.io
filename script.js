function buy(item) {
  const username = "Spin011_cc";
  const message = "001 - I want to buy " + item;

  const url = "https://t.me/" + username + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
