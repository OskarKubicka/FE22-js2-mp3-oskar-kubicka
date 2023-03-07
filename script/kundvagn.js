

// KRAV kvar att göra:

// *    En knapp för att genomföra köpet (inte på riktigt)

// ---------------------------------------------------------

let priceBanana;
let pricePear;
let priceKiwi;
let priceGrape;
let priceMelon;

fetchDatabase()
    .then(pricePerProduct)
    .then(cartProducts)

async function fetchDatabase() {
    const url = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function pricePerProduct(products) {
    products.forEach(product => {
        const { namn, pris } = product;

        if (namn == 'banana')
            priceBanana = pris;

        if (namn == 'pear')
            pricePear = pris;

        if (namn == 'kiwi')
            priceKiwi = pris;

        if (namn == 'grapefruit')
            priceGrape = pris;

        if (namn == 'vattenmelon')
            priceMelon = pris;
    })
}

function cartProducts() {

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

            else if (key == 'pear') {
                priceP = document.createElement('p');
                priceP.innerText = pricePear;
                sum = pricePear * value;
                sumP = document.createElement('p');
                sumP.innerText = sum;
            }

            else if (key == 'kiwi') {
                priceP = document.createElement('p');
                priceP.innerText = priceKiwi;
                sum = priceKiwi * value;
                sumP = document.createElement('p');
                sumP.innerText = sum;
            }

            else if (key == 'grapefruit') {
                priceP = document.createElement('p');
                priceP.innerText = priceGrape;
                sum = priceGrape * value;
                sumP = document.createElement('p');
                sumP.innerText = sum;
            }

            else if (key == 'vattenmelon') {
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

        document.querySelector('h3').innerText = `Totalt: ${total} kr`;
    }
}

document.getElementById('empty-cart-btn').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})















































//////////////////OSKAR /////////////////////////////

async function fetchDatabaseFirebase() {

    const response = await fetch(urlFirebase);
    const data = await response.json();
    console.log(data);

    // console.log(localStorage)

    data.forEach(product => {

        const { namn, pris } = product;
        // console.log(namn, pris);

    });
    return data
}

// fetchDatabaseFirebase();

// console.log(localStorage.getItem('banana'))
// console.log(localStorage.getItem('pear'))

// console.log(localStorage.getItem('kiwi'))
// console.log(localStorage.getItem('grapefruit'))
// console.log(localStorage.getItem('vattenmelon'))

