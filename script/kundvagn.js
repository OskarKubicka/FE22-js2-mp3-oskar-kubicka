
let priceBanana;
let pricePear;
let priceKiwi;
let priceGrape;
let priceMelon;

fetchDatabase()
    .then(pricePerProduct)
    .then(displayCartProducts)

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

function displayCartProducts() {

    if (localStorage.length == 0) {
        const emptyCart = document.createElement('p');
        emptyCart.setAttribute('id', 'cart-empty-p');
        emptyCart.innerText = 'din kundvagn är tom';
        document.getElementById('cart-parent').append(emptyCart);
    }

    else {
        let key;
        let value;
        let sum = 0;
        let total = 0;

        for (let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            value = localStorage.getItem(key);

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

document.getElementById('buy-btn').addEventListener('click', () => {

    if (localStorage.length !== 0){

        fetchDatabase()
        .then(balancePerProduct);
        updateStock();
    }

})

// Task: Saldo från database - cartAmount = newBalance
// newBalance patchas till rätt index

function balancePerProduct(databaseProducts){

    console.log(localStorage);
    databaseProducts.forEach(product => {

        const {namn, saldo} = product;
        console.log(namn, saldo);

        return namn, saldo;
    })

}


async function updateStock() {

    console.log(localStorage);

    for (let i = 0; i < localStorage.length; i++) {
        let cartProduct = localStorage.key(i);
        let cartAmount = localStorage.getItem(cartProduct);
        console.log(cartProduct, cartAmount);

        // if(cartProduct == 'banana'){
        //     // console.log('banan');
        // }

    }



    // const url = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products${index}.json`;
    // const init = {
    //     method: 'PATCH',
    //     body: JSON.stringify({ saldo: }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     }
    // }

    // const response = await fetch(url, init);
    // const data = await response.json();
    // console.log(data);
}













const urlBanana = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.loe.org%2Fcontent%2F2014-04-18%2F10-bananabunch.gif&f=1&nofb=1&ipt=356eab010f570eeaa9b9bceaabe4f807c104d016ff866f8686e5beb0c3fad27e&ipo=images';
const urlPear = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-I-ifw1Q4JvI%2FXVP8tZi_K1I%2FAAAAAAAAA0I%2Frq0s8CrJQKss1TLnBIcTLVmfhcI-9njggCLcBGAs%2Fs1600%2Fpears.jpg&f=1&nofb=1&ipt=2ef8e3f0f1a741222eed7b2fef04662b7bc1621cdc4cbbd49804b20372f65c3e&ipo=images';
const urlKiwi = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.femalefirst.co.uk%2Fimage-library%2Fsquare%2F1000%2Fk%2Fkiwi-103965998.jpg&f=1&nofb=1&ipt=549d133536180e32fcb217e2ec6404c47058fc0805405acf59c792197099aa60&ipo=images';
const urlGrape = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F22%2F122522-050-6CD1C3E7%2FGrapefruit.jpg&f=1&nofb=1&ipt=f799502084c77f3998f3aec93cfdd181b1bc922c118a09f9539a95fb73011f36&ipo=images';
const urlMelon = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.dailyforest.com%2Fwp-content%2Fuploads%2F2016%2F02%2F25190143%2FWatermelon.jpg&f=1&nofb=1&ipt=1c00f8c34e8392ebca57d3c6820a4216ed34b71b55522085b5dd6971d3e1cf94&ipo=images';














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

