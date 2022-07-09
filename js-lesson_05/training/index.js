// 1. Функция, которая принимает строку и возвращает длину этой строки

// function getWordLength(word) { 
//     console.log(word);
//     return word.length;
// }
// // getWordLength('Hello')

// console.log(getWordLength('Hello'));

// 2. Функция, которая принимает две строки, сравнивает их и возвращает равны строки или нет, ответ через true/false

// function getWordLength(a, b) {
//     return a.length === b.length;    
// }
// console.log(getWordLength('Hello', 'World'));

// 4. Функция, которая принимает строку и в цикле for выводит в консоль по одной букве этой строки

// function charAt(word) {
//     console.log('=====', word);
//     for (let i = 0; i < word.length; i++) {
//         console.log(word[i]);
//     }
// }
// console.log(charAt('Hello'));

// console.log(charAt('Natasha'));

// 5. Функция, которая принимает строку и в цикле for выводит в консоль слово  с конца

// function charAt(word) {
//     for (let i = word.length - 1; i >= 0; i--) {
//         console.log(word[i]);
//     }
// }
// console.log(charAt('Hello'));

// console.log(charAt('Natasha'));

// 6. функция, которая принимает строку и в цикле for выводит в консоль по одной букве этой строки + "-" и номер буквы в слове

// function charAt(word) {
//     for (let i = 0; i < word.length; i++) {
//         console.log(`${word[i]} - ${i + 1}`);
//     }
// }
// console.log(charAt('Help'));

// 7. Функция, которая принимает два аргумента -  имя и фамилию человека, и возвращает строку "Наш победитель *имя и фамилия* выиграл *число* гривен"
// В функции рандомно создаем число в промежутке от 100 до 1000 

// function getWinner(firstname, lastname) {
//     const number = Math.floor(Math.random() * 1000) + 100;
//     return `Наш победитель, ${firstname} ${lastname}, выиграл ${number} гривен`;
// }
// console.log(getWinner('Наталия', 'Черкашина'));

// То же, но в две функции

// function getRandomNumber() {
//     return Math.floor(Math.random() * 1000) + 100;
// }
// console.log(getRandomNumber());

// function getWinner(firstname, lastname) {
//      return `Наш победитель, ${firstname} ${lastname}, выиграл ${getRandomNumber()} гривен`;    
// }
// console.log(getWinner('Наталия', 'Черкашина'));

// 8. Вернуть из функции развернутую строку

// function rev(word) {
//     let symb = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         symb += word[i];
//     }
//     return symb;
// }

// console.log(rev('Hello'));

//  9. Функция, которая определяет, является ли слово палиндромом

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

//  10. Функция, которая определяет, является ли число палиндромом

function rev(numb) {
    let n = String(numb);
    let symb = '';
    for (let i = n.length - 1; i >= 0; i--) {
        symb += n[i];
    }
    return symb === n;
}
console.log(rev(12321));