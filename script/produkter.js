const url = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

let bananaCount = 0
let pearCount = 0
let kiwiCount = 0
let grapefruitCount = 0;
let vattenmelonCount = 0;

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
        // const button = document.createElement('button');
        // div.append(button)
        // button.innerText = 'Lägg i kundvagnen';
        // button.id = namn
       
    })
    console.log(document.querySelectorAll('.div-prod')[0].innerText)
    console.log(document.querySelectorAll('.div-prod')[0].innerText)
    document.querySelectorAll('.div-prod')[0].addEventListener('click', () => {

        bananaCount++
        localStorage.setItem('banana', bananaCount);
        //console.log(localStorage.getItem('banana'))
    })
    document.querySelectorAll('.div-prod')[1].addEventListener('click', () => {

        pearCount++
        localStorage.setItem('pear', pearCount);
        //console.log(localStorage.getItem('pear'))
    })
    document.querySelectorAll('.div-prod')[2].addEventListener('click', () => {

        kiwiCount++
        localStorage.setItem('kiwi', kiwiCount);
        console.log(localStorage.getItem('kiwi'))
    })
    document.querySelectorAll('.div-prod')[3].addEventListener('click', () => {

        grapefruitCount++
        localStorage.setItem('grapefruit', grapefruitCount);
        console.log(localStorage.getItem('grapefruit'))
    })
    document.querySelectorAll('.div-prod')[4].addEventListener('click', () => {

        vattenmelonCount++
        localStorage.setItem('vattenmelon', vattenmelonCount);
        console.log(localStorage.getItem('vattenmelon'))
    })
}

getProducts()

//console.log(document.querySelectorAll('button'))
//console.log(document.querySelectorAll('.div-prod'))
// document.getElementsByClassName('div-prod').addEventListener('click', event => {
//        // console.log(document.getElementsByClassName('div-prod').childNodes.value)
// })






// function createStorage(){

// }


console.log('detta skriver jag i Martins main branch');

console.log('Här skriver jag Kuk')