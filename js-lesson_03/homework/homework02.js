// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// Запитай у користувача число і виведи всі дільники цього числа.

const age = document.querySelector('.age');
const btn = document.querySelector('.btn');
const out01 = document.querySelector('.out01');
btn.onclick = () => {
    if (age.value >= 0 && age.value <= 11) {
        out01.innerHTML = "Вы - ребенок";
    } else if (age.value >= 12 && age.value <= 17) {
        out01.innerHTML = "Вы - подросток";
    } else if (age.value >= 18 && age.value <= 59) {
        out01.innerHTML = "Вы - взрослый";
    } else if (age.value >= 60 && age.value <= 120) {
        out01.innerHTML = "Вы - пенсионер";
    } else {
        out01.innerHTML = "Укажите Ваш возраст";
    }
}

const number = document.querySelector('.number');
const btn02 = document.querySelector('.btn02');
const out02 = document.querySelector('.out02');
btn02.onclick = () => {
    switch (number.value) {
        case "1":
            out02.innerHTML = "На этой клавише такой символ: !";
            break;
        case "2":
            out02.innerHTML = "На этой клавише такой символ: @";
            break;
        case "3":
            out02.innerHTML = "На этой клавише такой символ: #";
            break;
        case "4":
            out02.innerHTML = "На этой клавише такой символ: $";
            break;
        case "5":
            out02.innerHTML = "На этой клавише такой символ: %";
            break;
        case "6":
            out02.innerHTML = "На этой клавише такой символ: ^";
            break;
        case "7":
            out02.innerHTML = "На этой клавише такой символ: &";
            break;
        case "8":
            out02.innerHTML = "На этой клавише такой символ: *";
            break;
        case "9":
            out02.innerHTML = "На этой клавише такой символ: (";
            break;
        case "0":
            out02.innerHTML = "На этой клавише такой символ: )";
            break;
        default:
            out.innerHTML = "Укажите цифру от 0 до 9";
            break;
    }
}

let num01 = document.querySelector('.num01');
let num02 = document.querySelector('.num02');
let btn03 = document.querySelector('.btn03');
let out03 = document.querySelector('.out03');
let res = 0;

btn02.onclick = () => {
    while (num01 <= num02) {
        res += num01;
        num01++;
    }
    out03.innerHTML = res;
}
// console.log('test');