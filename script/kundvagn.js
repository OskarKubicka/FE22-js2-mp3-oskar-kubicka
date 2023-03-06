
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

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value);
  }

console.log(Object.keys(localStorage));
console.log(localStorage.getItem('kiwi'));

console.log(localStorage.getItem('grapefruit'));