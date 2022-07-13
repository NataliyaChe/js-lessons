let user = {
    name: 'John',
    surname: 'Smith',
}
user.name = 'Pete';
console.log(user.name);
delete user.name;
console.log(user);


function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  console.log(sum);

  