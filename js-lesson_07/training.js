let list = [1, 2, 3, 4, 5];
let multiplication = (arr) => {
    const multList = arr.map(item => {
        return item * 2;
    });
    return multList;
}
console.log(multiplication(list));

// let list = [1, 2, 3, 4, 5];
// function multiplication(arr) {
// const multList = arr.map(item => item * 2);
// console.log(multList);   
// }
// console.log(multiplication(list));

// let list = [1, 2, 3, 4, 5];
// let multiplication = (arr) => arr.map(item => item * 2);
// console.log(multiplication(list));

// let list = [1, 2, 3, 4, 5];
// let multiplication = (arr) => {
//     const multList = arr.map(item => item * 2);
//     return multList;
// }
// console.log(multiplication(list));