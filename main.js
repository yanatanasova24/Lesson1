// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let greeting = 'hello';
console.log(greeting);

let someVar = 'owu';
console.log(someVar);

let someVar2 = 'com';
console.log(someVar2);

let someVar3 = 'ua';
console.log(someVar3);

let num = 1;
console.log(num);

let num2 = 10;
console.log(num2);

let num3 = -999;
console.log(num3)

let num4 = 123;
console.log(num4);

let piNum = 3.14;
console.log(piNum);

let num5 = 2.7;
console.log(num5);

let num6 = 16;
console.log(num6);

let isTrue = true;
console.log(isTrue);

let anotherVariable = false;
console.log(anotherVariable);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person

let firstName = 'Tanasova';
let middleName = 'Yana';
let lastName = 'Valeriivna';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt("What's your name?");
let patronymic = prompt("What's your patronymic?");
let age = prompt("How old are you?");

console.log(`Hello, ${name} ${patronymic}, ${age} years old!`);