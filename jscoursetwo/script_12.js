// JavaScript методы примитивов. Числа. Объект Math. Округление чисел. Парсинг чисел из строк.

//Примитивные типы данных:
/**
 * const name = 'Александр'
const age = 28
const universeStars = 999999999999999999999999999999999999n
const isDeveloper = true
const id = Symbol()
const dog = null
const future = undefined
 */
//Не примитивный тип данных
// const user = {}

//Округление

/**
const price = 99.99

const roundedPrice = price.toFixed(0)

console.log(`Округленная цена: ${roundedPrice}`)
 */

/**
const price = 99.555

console.log(
  'Округление до 0 знаков после запятой:',
  price.toFixed()
)

console.log(
  'Округление до 1 знака после запятой:',
  price.toFixed(1)
)

console.log(
  'Округление до 2 знаков после запятой:',
  price.toFixed(2)
)

console.log((5.23).toFixed(1))
 */

// Метод toPrecision

// num = 100.055
// Округляет все число начиная с первого числа
// console.log(num.toPrecision(5))

// Приведение числа в строку

/**
const num = 100;
const toString = num.toString();

console.log("Число:", num);
console.log("Число в виде строки:", toString);

console.log(typeof num)
console.log(typeof toString)

 */

/**
const num = 100
console.log(`
    Число ${num} в двоичной системе исчесления:`, num.toString(2))
 */
// Объект Math
console.log('Случайное число:', Math.random())
//Абсолютное число или модуль числа
console.log('Абсолютное число:', Math.abs(-1))
console.log('Абсолютное число:', Math.abs(2))
console.log('Абсолютное число:', Math.abs(100))
console.log('Абсолютное число:', Math.abs(1000))
console.log('Абсолютное число:', Math.abs(-1245))

//Возведение в степень

console.log('Степень чисел:', Math.pow(2, 10))

// Квадратный корень числа
console.log('Квадратный корень:', Math.sqrt(16))
//Кубический корень 
console.log('Кубичемский корень:', Math.cbrt(125))

// Максимальное и минимальное число
console.log('Максимальное число равно: ', Math.max(1, 2, 3, 5, 235, -235, 3452, -2435, 32*34,12))
console.log('Минимальное число равно: ', Math.min(1, 2, 3, 5, 235, -235, 3452, -2435, 32*34,12))

// Округление чисел, 4 метода для округления

// Math.round
// Math.floor
// Math.ceil
// Math.trunc

// Распарсить строку и получить число

const numberAsStirng = '100.235px'
console.log(parseInt(numberAsStirng)) // Для целых числе
console.log(parseFloat(numberAsStirng)) //Для дробных чисел
