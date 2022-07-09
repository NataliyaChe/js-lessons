// function getWordLength(word) { 
//     console.log(word);
//     return word.length;
// }
// // getWordLength('Hello')

// console.log(getWordLength('Hello'));


// function getWordLength(a, b) {
//     return a.length === b.length;    
// }
// console.log(getWordLength('Hello', 'World'));


// function charAt(word) {
//     console.log('=====', word);
//     for (let i = 0; i < word.length; i++) {
//         console.log(word[i]);
//     }
// }
// console.log(charAt('Hello'));

// console.log(charAt('Natasha'));


// function charAt(word) {
//     for (let i = word.length - 1; i >= 0; i--) {
//         console.log(word[i]);
//     }
// }
// console.log(charAt('Hello'));

// console.log(charAt('Natasha'));


// function charAt(word) {
//     for (let i = 0; i < word.length; i++) {
//         console.log(`${word[i]} - ${i + 1}`);
//     }
// }
// console.log(charAt('Help'));


// function getWinner(firstname, lastname) {
//     const number = Math.floor(Math.random() * 1000) + 100;
//     return `Наш победитель, ${firstname} ${lastname}, выиграл ${number} гривен`;
// }
// console.log(getWinner('Наталия', 'Черкашина'));


// function getRandomNumber() {
//     return Math.floor(Math.random() * 1000) + 100;
// }
// console.log(getRandomNumber());

// function getWinner(firstname, lastname) {
//      return `Наш победитель, ${firstname} ${lastname}, выиграл ${getRandomNumber()} гривен`;    
// }
// console.log(getWinner('Наталия', 'Черкашина'));


// function rev(word) {
//     let symb = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         symb += word[i];
//     }
//     return symb;
// }

// console.log(rev('Hello'));


// function rev(word) {
//     let symb = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         symb += word[i];
//     }
//     if  (symb === word) {
//         return true;
//     } else {
//         return `Ваше слово ${word} не является палиндромом`;
//     }
// }
// console.log(rev('lol'));


// function rev(word) {
//     let symb = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         symb += word[i];
//     }
//     return symb === word
// }
// console.log(rev('lol'));


function rev(numb) {
    let n = String(numb);
    let symb = '';
    for (let i = n.length - 1; i >= 0; i--) {
        symb += n[i];
    }
    return symb === n;
}
console.log(rev(12321));