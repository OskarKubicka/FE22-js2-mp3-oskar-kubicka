
// ------------------------------------- OSKARS FÖRSTA

// console.log(localStorage.getItem('banana'));

// let bananaValue = 0;

// bananaValue + Number(localStorage.getItem('banana'))
// console.log(bananaValue + Number(localStorage.getItem('banana')))

// const arr = []
// arr.push(Number(localStorage.getItem('banana')))
// console.log(arr)


// ------------------------------------- MARTIN START

// Visar hur många produkter av varje produkt som användaren vill köpa

// Visar produkternas totala pris

// En knapp för att genomföra köpet (inte på riktigt)

// En knapp för att tömma kundvagnen

console.log(localStorage);
console.log(typeof localStorage);

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value);

    const productP = document.createElement('p');
    productP.innerText = key;
    const amountP = document.createElement('p');
    amountP.innerText = value;

    const productInner = document.createElement('div');
    productInner.classList.add('product-inner');
    productInner.append(productP, amountP);
    document.getElementById('cart-parent').append(productInner);
  }

console.log(Object.keys(localStorage));
console.log(Object.values(localStorage));
console.log(localStorage.getItem('kiwi'));
console.log(localStorage.getItem('grapefruit'));

// localStorage.clear();
// console.log(localStorage);