const url = `https://produktsida-oskar-martin-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

let bananaCount = 0


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
    document.querySelectorAll('.div-prod')[0].addEventListener('click', () => {

        let priceStr = document.querySelectorAll('.div-prod')[0].childNodes[1].innerText

        let nameStr = document.querySelectorAll('.div-prod')[0].childNodes[0].innerText
        console.log(priceStr, nameStr)

        bananaCount++
        console.log(bananaCount)
        //localStorage.setItem('banana', 1);  


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

