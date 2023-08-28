function getBitcoinPrice() {

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(res => res.json())
        .then(data => livePrice(data));
}

function livePrice(data) {

    const divContainer = document.getElementById('bitcoin');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<h1> Bitcoin Price: $${data.bitcoin.usd}</h1>`;
    divContainer.appendChild(newDiv);

}
getBitcoinPrice();

