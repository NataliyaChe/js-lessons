// let inp = document.querySelector('.inp');
// let word = inp.value;
// let res = word.length;
// let btn = document.querySelector('.btn');
// let out = document.querySelector('.out');
// console.log('test');
// console.log(typeof inp);
// console.log(typeof word);
// console.log(typeof res);
// btn.onclick = () => {
//     console.log(res);
// }

// function getWordLength(word) { 
//     console.log(word);
//     return word.length;
// }

// // getWordLength('Hello')

// console.log(getWordLength('Hello'));

// function getWordLength(a, b) {
//     return a.length === b.length;    
// }
// // console.log(getWordLength(a, b));
// console.log(getWordLength('Hello', 'World'));
let word = 'Hello';
function charAt(word) {
    // console.log(word = 'Hello');
    // let word = 'Hello';
    let result = String(' ');
    console.log(typeof result);
    console.log('result', result);
    for (let i = word[0]; i <= word.length; i++) {
        console.log(typeof i);
        console.log(result);
    }
    // console.log(result);
}
charAt('Hello');
console.log('test');

// for (let char of "Hello") {
//     console.log(char);
// }