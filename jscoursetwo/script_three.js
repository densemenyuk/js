// 3. Типы данных в JavaScript. Проверка типов (typeof), преобразование типов. Интерполяция строк.

// Есть 8 типов данных

// Интерполяция строк
/* const name = "Борис";
const message = "Привет";

const result = `${message}, ${name}!`;

console.log(result);

const a = 5;
const b = 10;

let sum = `Сумма а и б равна ${a + b}`;

console.log(sum);

example = `
перенос
на
несколько
строк
`;*/
// Работа с очень большими числами, в конце числа добавляем символ n

// console.log(9900000000000091n + 1n);
// console.log(9900000000000091n + 2n);

// Можно выделять в числа нижнее подчеркивание _ , чтоб число лучше читалось

// const q = 1_000_000_000;

// bollean true или false

// null - ничто, неизвестное значие, нет никаких данных

// user = {} Объект

// const user = {
//   firstName: "Boris",
//   age: 24,
//   isDeveloper: true,
// };

// const number = [12, 245, 234, 1234, 678, 45];
// const map = new Map();
// constset = new Set();
// const date = new Date();

// Проверка типа данных
// console.log(typeof "данные");

//явное и неявное преобразование данных

// let num = 100;
// let str = "222";

// let res = num + str;
// console.log(res);

// const age = 11;

// console.log(typeof age);
// console.log(typeof String(age));

// const str1 = '1000'

// const number = Number(str)

// console.log(typeof str)


// Преобразуются в false

// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

//Все остальное преобразутся в true