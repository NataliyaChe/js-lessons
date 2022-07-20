// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:


let shopList = [
    {name: 'milk', quantity: 2, done: true, price: 35, sum: 70},
    {name: 'bread', quantity: 1, done: true, price: 20, sum: 20},
    {name: 'salad', quantity: 2, done: false, price: 17, sum: 34},
    {name: 'eggs', quantity: 10, done: true, price: 2, sum: 20},
    {name: 'butter', quantity: 1, done: false, price: 62, sum: 62},
]


// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

shopList.sort(function(a, b) {
    return a.done - b.done   
});
console.log(shopList);


// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function searchItem(name) {
    const getItem = shopList.find(obj => obj.name === name);   
    console.log(getItem);
    getItem.done = true;
}
console.log(searchItem('salad'));
console.log(shopList);


// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function deleteItem(done) {
    const getDone = shopList.filter(obj => obj.done === done);
    console.log(getDone);
}
console.log(deleteItem(true));


// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addItem(item) {
    const findItem = shopList.find(obj => obj.name === item.name);
    if (findItem) {
        console.log('find');
        findItem.quantity += 1;
        findItem.sum += findItem.price;
    } else {
        console.log('notfind');
        shopList.push(item)
    }
}
console.log(addItem({name: 'cheese', quantity: 1, done: false, price: 62, sum: 62}));
console.log(shopList);
console.log(addItem({name: 'bread', quantity: 1, done: true, price: 20, sum: 20}));
console.log(shopList);

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

const summary = shopList.reduce((sum, current) => sum + current.sum, 0);
console.log(summary);


// Підрахунок суми всіх (не) придбаних продуктів.

// function getDidntBuy(done) {
    // const didntBuy = shopList.filter(obj => obj.done === done);
    // console.log(didntBuy);
    // const sumDidntBuy = didntBuy.reduce((sum, current) => sum + current.sum, 0);
    // console.log(sumDidntBuy);
// }
// console.log(getDidntBuy(false));
// console.log('summary2');

// const sumDidntBuy = shopList.reduce((acc, current) => {
//     if(!current.done) {
//         return acc + current.sum;
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(sumDidntBuy);
// console.log('teststring');

const sumDidntBuy = shopList.reduce((acc, current) => {
    let res = current.done ? 0 : current.sum;
    return acc + res;
}, 0)
console.log(sumDidntBuy);


// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function getSort(condition) {
    const sorting = shopList.sort((a, b) => {   
        if(condition === 'desc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

console.log(getSort('desc'));
console.log(shopList);