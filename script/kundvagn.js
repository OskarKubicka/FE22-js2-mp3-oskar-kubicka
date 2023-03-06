

// KRAV kvar att göra:

// *    Visar produkternas totala pris
// *    En knapp för att genomföra köpet (inte på riktigt)

// ---------------------------------------------------------

let priceBanana = 10;
let pricePear = 20;
let priceKiwi = 20;
let priceGrape = 20;
let priceMelon = 40;

// Kollar något finns i localStorage, om nej - visa 'kundvagn tom', om ja - loopa igenom ls och dunka ut 'p'
if (localStorage.length == 0) {

    const emptyCart = document.createElement('p');
    emptyCart.setAttribute('id', 'cart-empty-p');
    emptyCart.innerText = 'din kundvagn är tom';
    document.getElementById('cart-parent').append(emptyCart);
}

else {

    let sum = 0;
    let total = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const productP = document.createElement('p');
        productP.innerText = key;
        const amountP = document.createElement('p');
        amountP.innerText = value;

        let priceP;

        if (key == 'banana') {
            priceP = document.createElement('p');
            priceP.innerText = priceBanana;
            sum = priceBanana * value;
        }

        if (key == 'pear') {
            priceP = document.createElement('p');
            priceP.innerText = pricePear;
            sum = pricePear * value;
        }

        if (key == 'kiwi') {
            priceP = document.createElement('p');
            priceP.innerText = priceKiwi;
            sum = priceKiwi * value;
        }

        if (key == 'grapefruit') {
            priceP = document.createElement('p');
            priceP.innerText = priceGrape;
            sum = priceGrape * value;
        }

        if (key == 'vattenmelon') {
            priceP = document.createElement('p');
            priceP.innerText = priceMelon;
            sum = priceMelon * value;
        }

        total += sum;
        const productInner = document.createElement('div');
        productInner.classList.add('product-inner');
        productInner.append(productP, amountP, priceP, sum);
        document.getElementById('cart-parent').append(productInner);
    }

    document.querySelector('h3').innerText = `Totalt: ${total}`;
}

document.getElementById('empty-cart-btn').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

const urlFirebase = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

async function fetchDatabase() {

    const response = await fetch(urlFirebase);
    const data = await response.json();
    // console.log(data);

    data.forEach(product => {

        const { namn, pris } = product;
        // console.log(namn, pris);

    });
    return data
}

fetchDatabase();


























































































//////////////////OSKAR /////////////////////////////

const dataFirebasePatch = fetchDatabase();

