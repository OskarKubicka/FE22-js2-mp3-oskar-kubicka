import anime from "../node_modules/animejs/lib/anime.es.js";
import _ from "../node_modules/underscore/underscore-esm.js";


const url = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

const kundvagnAntalP = document.querySelector('#kundvagn-antal');

const localBanana = localStorage.getItem('banana');
const localPear = localStorage.getItem('pear');
const localKiwi = localStorage.getItem('kiwi')
const localGrapefruit = localStorage.getItem('grapefruit');
const localVattenmelon = localStorage.getItem('vattenmelon')

const arrSaldo = []

let bananaCount = Number(localBanana)
if (_.isNull(localBanana)) {
    bananaCount = 0

}

let pearCount = Number(localPear)
if (_.isNull(localPear)) {
    pearCount = 0
}

let kiwiCount = Number(localKiwi)
if (_.isNull(localKiwi)) {
    kiwiCount = 0
}

let grapefruitCount = Number(localGrapefruit)
if (_.isNull(localGrapefruit)) {
    grapefruitCount = 0
}


let vattenmelonCount = Number(localVattenmelon)
if (_.isNull(localVattenmelon)) {
    vattenmelonCount = 0
}

let totalKund = bananaCount + pearCount + kiwiCount + grapefruitCount + vattenmelonCount;

kundvagnAntalP.innerText = totalKund;

async function getProducts() {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(products => {

        const { namn, pris, saldo, url } = products
        const div = document.createElement('div');
        document.querySelector('#show-products').append(div);
        div.className = 'div-prod'
        const h1 = document.createElement('h1');
        div.append(h1);
        let string = namn;
        h1.innerHTML = string.charAt(0).toUpperCase() +
        string.slice(1);
        
        const prisP = document.createElement('p');
        div.append(prisP);
        prisP.innerText = pris + ' kr';
        const pAnime = document.createElement('h1');
        div.append(pAnime);
        pAnime.innerText = "Välj";
        pAnime.className = "choice";

        const img = document.createElement('img');
        div.append(img);
        img.src = url;
        img.style.width = "100px";
        img.style.borderRadius = "4px";
        img.style.border = "solid red 1px"
        arrSaldo.push({ namn, saldo })

    })

    //kundvagn
    document.querySelector('#kundvagn-div').addEventListener("mouseover", (event) => {
        anime({
            targets: '#bild',
            width: '100px',
        })


    })
    document.querySelector('#kundvagn-div').addEventListener("mouseleave", (event) => {
        anime({
            targets: '#bild',
            width: '70px',
        })


    })

    //div för produkter
    document.querySelectorAll('.div-prod')[0].addEventListener('click', () => {
        console.log(arrSaldo[0].saldo)

        if (bananaCount < arrSaldo[0].saldo) {
            bananaCount++

            localStorage.setItem('banana', bananaCount);

            location.reload();
        }
        else {
            alert('Slut på lagret')
        }
    })

    document.querySelectorAll('.div-prod')[1].addEventListener('click', () => {
        if (pearCount < arrSaldo[1].saldo) {
            pearCount++
            localStorage.setItem('pear', pearCount);
            location.reload();
        }
        else {
            alert('Slut på lagret')
        }
    })

    document.querySelectorAll('.div-prod')[2].addEventListener('click', () => {
        console.log(arrSaldo[2].namn, kiwiCount)

        if (kiwiCount < arrSaldo[2].saldo) {
            kiwiCount++
            localStorage.setItem('kiwi', kiwiCount);

            location.reload();
        }
        else {
            alert('Slut på lagret')
        }
    })
    document.querySelectorAll('.div-prod')[3].addEventListener('click', () => {
        if (grapefruitCount < arrSaldo[3].saldo) {
            grapefruitCount++
            localStorage.setItem('grapefruit', grapefruitCount);

            location.reload();
        }
        else {
            alert('Slut på lagret')
        }
    })
    document.querySelectorAll('.div-prod')[4].addEventListener('click', () => {
        if (vattenmelonCount < arrSaldo[4].saldo) {
            vattenmelonCount++
            localStorage.setItem('vattenmelon', vattenmelonCount);
            location.reload();
        }
        else {
            alert('Slut på lagret')
        }
    })

}

getProducts()

document.querySelector('#kundvagn-div').addEventListener('click', () => {
    window.location.assign("./html/kundvagn.html")
})




