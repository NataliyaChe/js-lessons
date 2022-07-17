// let car = {
//     manufacture: 'nissan',
//     model: 'skyline',
//     releaseYear: 1984,
//     speed: 180,
//     fuelTank: 2.6,
// }

// console.log(car);

// car.driverName = 'Andrew';

// console.log(car);

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let time = {
    hours: 00,
    minutes: 00,
    seconds: 00,
    getTime() {
        return `${this.hours}:${this.minutes}:${this.seconds}`
    },
    
    setHours(number) {
        if (this.hours + number < 24) {
        this.hours += number;
        } else {
            this.hours = (this.hours + number) % 24;
        } 
    },
    setMinutes(number) {
        if (this.minutes + number < 60) {
            this.minutes += number;
        } else {
            this.minutes = (this.minutes + number) % 60;
            time.setHours(Math.floor(number / 60)); 
        } 
    },
    setSeconds(number) {
        if (this.seconds + number < 60) {
            this.seconds += number;
        } else {
            this.seconds = (this.seconds + number) % 60;
            time.setMinutes(Math.floor(number / 60));
        } 
    },
}

console.log('test');
console.log(time.setHours(5));
console.log(time.getTime());
console.log(time.setMinutes(152));
console.log(time.getTime());
console.log(time.setSeconds(3600));
console.log(time.getTime());


