

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, push, ref, onValue, set, update, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsyIRjFOQzlMQi4xlBdP92MK9HoxY9HZU",
    authDomain: "produktsida-oskar-martin.firebaseapp.com",
    databaseURL: "https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "produktsida-oskar-martin",
    storageBucket: "produktsida-oskar-martin.appspot.com",
    messagingSenderId: "854646685101",
    appId: "1:854646685101:web:d53a06ee5ea68548eb7524"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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
    console.log(data);
    return data;
}

function pricePerProduct(products) {
    console.log('denna funktionen fungerar?');
    products.forEach(product => {
        const { namn, pris, saldo } = product;
        console.log(namn, saldo);

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

        document.querySelector('h3').innerText = `Totalt: ${total}:-`;
    }
}

document.getElementById('buy-btn').addEventListener('click', () => {

    if (localStorage.length !== 0) {
        fetchDatabase()
            .then(updatedStock)
            .then(changeInStock);
    }
})

function updatedStock(products) {

    let newBalance = 0;

    products.forEach((product, index) => {

        let { namn, saldo } = product;

        for (let i = 0; i < localStorage.length; i++) {
            let cartProduct = localStorage.key(i);
            let cartAmount = localStorage.getItem(cartProduct);

            if (namn == cartProduct) {
                newBalance = (saldo - cartAmount)
                console.log(`Du har handlat ${cartAmount} st ${cartProduct}/${namn}. I vårt lager finns nu ${saldo} - ${cartAmount} = ${newBalance}`);
                changeInStock(index, newBalance);
            }

        }
    })
}

async function changeInStock(index, newBalance) {

    const url = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products/${index}.json`;
    const init = {
        method: 'PATCH',
        body: JSON.stringify({ saldo: newBalance }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
}

document.getElementById('empty-cart-btn').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

