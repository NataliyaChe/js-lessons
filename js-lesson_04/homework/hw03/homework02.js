// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

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

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

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

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

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

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// function nod(numb01, numb02) {
//     let numb03;
//     while (numb01 != numb02) {
//         if (numb01 > numb02) {
//             console.log('test3');
//           numb01 = numb01 - numb02; 
//         } else if (numb01 < numb02) {
//             console.log('test4');
//             numb03 = numb01;
//             numb01 = numb02;
//             numb02 = numb03;
//         }
//     }
//     return numb01;
// }
// console.log(nod(140, 96));

let numb01 = document.querySelector('.numb01');
let numb02 = document.querySelector('.numb02');
const btn06 = document.querySelector('.btn06');
let out06 = document.querySelector('.out06');
function nod() {
    let a = +numb01.value;
    let b = +numb02.value;
    let c;
    while (a != b) {
        if (a > b) {
          a = a - b; 
        } else if (a < b) {
            c = a;
            a = b;
            b = c;
        }
    }
    out06.innerHTML = `Наибольший общий делитель = ${a}`;
}
btn06.onclick = nod;

// Запитай у користувача число і виведи всі дільники цього числа.

// function divider(numb) {
//     for (let i = 1; i <= numb; i++) {
//         if (numb % i === 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(divider(25));
  
const btn05 = document.querySelector('.btn05');
let out05 = document.querySelector('.out05');
function divider() {
    let numb = document.querySelector('.numb');
    let n = '';
    let n2 = '';
    console.log('test');
    for (let i = 1; i <= numb.value; i++) {
        console.log(typeof i);
        if (numb.value % i === 0) {
            n += `${i} `;
            console.log('test2');
        } else {
            n2 += `${i} `;
        }
    }
    out05.innerHTML = `Это делители числа ${numb.value}: ${n}. А это не делители: ${n2}`;
}
btn05.onclick = divider;

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

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

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


// function sale(num) {
//     if (num < 200) {
//         console.log(`Сумма к оплате ${num}`); 
//     } else if (num >= 200 && num <= 300) {
//         console.log(`Сумма к оплате ${num - (num / 100 * 3)}`); 
//     } else if (num >= 300 && num <= 500) {
//         console.log(`Сумма к оплате ${num - (num / 100 * 5)}`); 
//     } else if (num >= 500) {
//         console.log(`Сумма к оплате ${num - (num / 100 * 7)}`); 
//     }
// }
// console.log(sale(590));


let btn04 = document.querySelector('.btn04');
let out04 = document.querySelector('.out04');
function sale() {
    let inp = document.querySelector('.inp');
    if (inp.value < 200) {
        out04.innerHTML = `Сумма к оплате ${inp.value}`;
    } else if (inp.value >= 200 && inp.value <= 300) {
        out04.innerHTML = `Сумма к оплате ${inp.value - (inp.value / 100 * 3)}`;
    } else if (inp.value >= 300 && inp.value <= 500) {
        out04.innerHTML = `Сумма к оплате ${inp.value - (inp.value / 100 * 5)}`;
    } else if (inp.value >= 500) {
        out04.innerHTML = `Сумма к оплате ${inp.value - (inp.value / 100 * 7)}`;
    }
}
btn04.onclick = sale;

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// let out07 = document.querySelector('.out07');
// function statistic() {
//     let anynum = prompt('Введите любое число');
//     let even = '';
//     let odd = '';
//     let plus = '';
//     let minus = '';
//     let zero = '';
//     console.log('test');
//     if (anynum < 0 && anynum % 2 === 0) {
//         even += `${anynum} `;
//         minus += `${anynum} `;
//         console.log(even, minus);
//     } else if (anynum < 0 && anynum % 2 !== 0) {
//         odd += `${anynum} `;
//         minus += `${anynum} `;
//         console.log(odd, minus);
//     } else if (anynum > 0 && anynum % 2 === 0) {
//         even += `${anynum} `;
//         plus += `${anynum} `;
//         console.log(even, plus);
//     } else if (anynum > 0 && anynum % 2 !== 0) {
//         odd += `${anynum} `;
//         plus += `${anynum} `;
//         console.log(odd, plus);
//     } else if (anynum = 0) {
//         zero += `${anynum} `;
//         console.log(zero);
//     }
//     return `Вы ввели такие числа: положительные ${plus}; отрицательные ${minus}; четные ${even}; нечетные ${odd}; ноли ${zero};`;
// }
// console.log(statistic());

let out07 = document.querySelector('.out07');
function statistic() {
    let even = 0;
    let odd = 0;
    let plus = 0;
    let minus = 0;
    let zero = 0;
    for (let i = 1; i <= 10; i++){
        let anynum = +prompt('Введите любое число');
        console.log(typeof anynum);
        if (anynum === 0) {
            zero++;
            continue;
        } 
        if (anynum % 2 === 0) {
            even++;
        } else {
            odd++;
        } 
        if (anynum > 0) {
            plus++;
        } else {
            minus++;
        } 
    }
    out07.innerHTML = `Ваша статистика: положительных ${plus}; отрицательных ${minus}; четных ${even}; нечетных ${odd}; нолей ${zero};`;
}
console.log(statistic());

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.