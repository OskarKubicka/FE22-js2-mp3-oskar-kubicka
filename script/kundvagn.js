

// KRAV kvar att göra:

// *    Visar produkternas totala pris
// *    En knapp för att genomföra köpet (inte på riktigt)

// ---------------------------------------------------------

// Kollar något finns i localStorage, om nej - visa 'kundvagn tom', om ja - loopa igenom ls och dunka ut 'p'
if (localStorage.length == 0) {

    const emptyCart = document.createElement('p');
    emptyCart.setAttribute('id', 'cart-empty-p');
    emptyCart.innerText = 'din kundvagn är tom';
    document.getElementById('cart-parent').append(emptyCart);
}

else {

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const productP = document.createElement('p');
        productP.innerText = key;
        const amountP = document.createElement('p');
        amountP.innerText = value;

        const productInner = document.createElement('div');
        productInner.classList.add('product-inner');
        productInner.append(productP, amountP);
        document.getElementById('cart-parent').append(productInner);
    }
}

document.getElementById('empty-cart-btn').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

// console.log(Object.keys(localStorage));
// console.log(Object.values(localStorage));
// console.log(localStorage);
// console.log(localStorage.length);


const urlFirebase = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

async function fetchDatabase(){

    const response = await fetch(urlFirebase);
    const data = await response.json();
    console.log(data);

    data.forEach(product => {

        const {namn, pris} = product;
        console.log(namn, pris);
        
    });
    return data
}

fetchDatabase();


























































































//////////////////OSKAR /////////////////////////////

const dataFirebasePatch = fetchDatabase();

