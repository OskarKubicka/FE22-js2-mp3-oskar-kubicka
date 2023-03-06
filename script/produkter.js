const url = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

const kundvagnAntalP = document.querySelector('#kundvagn-antal');

const getBanana = localStorage.getItem('banana');
const getPear = localStorage.getItem('pear');
const getKiwi = localStorage.getItem('kiwi')
const getGrapefruit = localStorage.getItem('grapefruit');
const getVattenmelon = localStorage.getItem('vattenmelon')
//banana
let bananaCount = Number(getBanana)
if (getBanana == null) {
    bananaCount = 0

}

//pear
let pearCount = Number(getPear)
if (getPear == null) {
    pearCount = 0
}
console.log(pearCount)

//kiwi
let kiwiCount = Number(getKiwi)
if (getKiwi == null) {
    kiwiCount = 0
}
console.log(kiwiCount)

//grapefruit
let grapefruitCount = Number(getGrapefruit)
if (getGrapefruit == null) {
    grapefruitCount = 0
}
console.log(grapefruitCount)
//Watermelon
let vattenmelonCount = Number(getVattenmelon)
if (getVattenmelon == null) {
    vattenmelonCount = 0
}
console.log(vattenmelonCount)



let totalKund = bananaCount + pearCount + kiwiCount + grapefruitCount + vattenmelonCount
console.log(totalKund)
kundvagnAntalP.innerText = totalKund;




async function getProducts() {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(products => {

        const { namn, pris, saldo, url } = products
        console.log(namn, pris, saldo, url)
        const div = document.createElement('div');
        document.body.append(div);
        div.className = 'div-prod'
        const h1 = document.createElement('h1');
        div.append(h1);
        h1.innerText = namn;
        const prisP = document.createElement('p');
        div.append(prisP);
        prisP.innerText = pris;
        // const saldoP = document.createElement('p');
        // div.append(saldoP);
        // saldoP.innerText = saldo + ' st';
        const img = document.createElement('img');
        div.append(img);
        img.src = '';


    })

    document.querySelectorAll('.div-prod')[0].addEventListener('click', () => {

        bananaCount++

        localStorage.setItem('banana', bananaCount);
        console.log(localStorage.getItem('banana'))
        location.reload();
    })
    document.querySelectorAll('.div-prod')[1].addEventListener('click', () => {

        pearCount++
        localStorage.setItem('pear', pearCount);
        console.log(localStorage.getItem('pear'))
        location.reload();
    })
    document.querySelectorAll('.div-prod')[2].addEventListener('click', () => {

        kiwiCount++
        localStorage.setItem('kiwi', kiwiCount);
        console.log(localStorage.getItem('kiwi'))
        location.reload();
    })
    document.querySelectorAll('.div-prod')[3].addEventListener('click', () => {

        grapefruitCount++
        localStorage.setItem('grapefruit', grapefruitCount);
        console.log(localStorage.getItem('grapefruit'))
        location.reload();
    })
    document.querySelectorAll('.div-prod')[4].addEventListener('click', () => {

        vattenmelonCount++
        localStorage.setItem('vattenmelon', vattenmelonCount);
        console.log(localStorage.getItem('vattenmelon'))
        location.reload();
    })
}

getProducts()

document.querySelector('#kundvagn-div').addEventListener('click', () => {
    window.location.assign("./html/kundvagn.html")
})

