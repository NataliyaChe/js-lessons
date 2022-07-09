// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// Запитай у користувача число і виведи всі дільники цього числа.

const age = document.querySelector('.age');
const btn = document.querySelector('.btn');
const out01 = document.querySelector('.out01');
btn.onclick = () => {
    console.log(age.value >= 0 && age.value <= 11);
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

btn03.onclick = () => {
    console.log(typeof num01.value);
    console.log(typeof num02.value);

    let a = +num01.value;
    while (a <= +num02.value) {
        console.log('result', res);
        res += a;
        a++;
    }
    out03.innerHTML = res;
}

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

function rev(numb) {
    let n = String(numb);
    let symb = '';
    for (let i = n.length - 1; i >= 0; i--) {
        symb += n[i];
    }
    if  (symb === n) {
        return `Ваше число ${n} является палиндромом`;
    } else {
        return `Ваше число ${n} не является палиндромом`;
    }
}
console.log(rev(12321));