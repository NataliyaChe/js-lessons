// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let shopList = [
    {name: 'milk', quantity: 2, done: true, price: 35, sum: 70},
    {name: 'bread', quantity: 1, done: true, price: 20, sum: 20},
    {name: 'salad', quantity: 2, done: false, price: 17, sum: 34},
    {name: 'eggs', quantity: 10, done: true, price: 2, sum: 20},
    {name: 'butter', quantity: 1, done: false, price: 62, sum: 62},
]

shopList.sort(function(a, b) {
    return a.done - b.done   
});
console.log(shopList);

function searchItem(name) {
    const getItem = shopList.find(obj => obj.name === name);   
    console.log(getItem);
    getItem.done = true;
}
console.log(searchItem('salad'));
console.log(shopList);

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function deleteItem(done) {
    const getDone = shopList.filter(obj => obj.done === done);
    console.log(getDone);
}
console.log(deleteItem(true));

