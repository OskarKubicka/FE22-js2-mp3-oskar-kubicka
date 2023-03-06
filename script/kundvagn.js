

// KRAV kvar att göra:

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
        let sumP;

        if (key == 'banana') {
            priceP = document.createElement('p');
            priceP.innerText = priceBanana;
            sum = priceBanana * value;
            sumP = document.createElement('p');
            sumP.innerText = sum;
        }

        if (key == 'pear') {
            priceP = document.createElement('p');
            priceP.innerText = pricePear;
            sum = pricePear * value;
            sumP = document.createElement('p');
            sumP.innerText = sum;
        }

        if (key == 'kiwi') {
            priceP = document.createElement('p');
            priceP.innerText = priceKiwi;
            sum = priceKiwi * value;
            sumP = document.createElement('p');
            sumP.innerText = sum;
        }

        if (key == 'grapefruit') {
            priceP = document.createElement('p');
            priceP.innerText = priceGrape;
            sum = priceGrape * value;
            sumP = document.createElement('p');
            sumP.innerText = sum;
        }

        if (key == 'vattenmelon') {
            priceP = document.createElement('p');
            priceP.innerText = priceMelon;
            sum = priceMelon * value;
            sumP = document.createElement('p');
            sumP.innerText = sum;
        }

        total += sum;
        const productInner = document.createElement('div');
        productInner.classList.add('product-inner');
        productInner.append(productP, amountP, priceP, sumP);
        document.getElementById('cart-parent').append(productInner);
    }

    document.querySelector('h3').innerText = `Totalt: ${total}:-`;
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
        console.log(namn, pris);

    });
    return data;
}

fetchDatabase();

























































































//////////////////OSKAR /////////////////////////////

async function fetchDatabaseFirebase() {

    const response = await fetch(urlFirebase);
    const data = await response.json();
    console.log(data);

    console.log(localStorage)

    data.forEach(product => {

        const { namn, pris } = product;
        console.log(namn, pris);

    });
    return data
}

fetchDatabaseFirebase();

console.log(localStorage.getItem('banana'))
console.log(localStorage.getItem('pear'))

console.log(localStorage.getItem('kiwi'))
console.log(localStorage.getItem('grapefruit'))
console.log(localStorage.getItem('vattenmelon'))

