// Строки в JavaScript. Методы at, replace, slice, includes, repeat, trim, split. Длина строки length.
// length помогает получить длину строки в формате числа

/**
 * const name = 'Bodris'
const epmty = ''
const strWithOneSpace = ' '

console.log(`Длина строки ${name} равна:`, name.length)
console.log(`Длина строки ${epmty} равна:`, epmty.length)
console.log(`Длина строки ${strWithOneSpace} равна:`,   strWithOneSpace.length)
 */

// Индекс строки

/*
*const name = 'Alexandr'
console.log(name[0])
console.log(name[name.length -1]) */
// Метод at
/**
 * console.log(name.at(0))
console.log(name.at(1))
console.log(name.at(-1))
console.log(name.at(-2))
 */

// Изменение регистров символов строки

/**
 * const text = 'КаКоЙтОТеКсТ'
console.log(text.toLowerCase())
console.log(text.toUpperCase())
 */

// Метод избавление от пробелов вначале и в конце строки trim()

/**
 * const message = '     Privet       '
console.log(`Строка ${message} имеет длину ${message.length} символов`)

const messageFormatted = message.trim()
console.log(`Строка ${messageFormatted} имеет длину ${messageFormatted.length} символов`)
 */

// Методы для избавление точечно вначале или в конце строки
//.trimStart()
//.trimEnd()

// Метод нахождения первого символа подстроки в строке

// const message = 'Пробуем найти это выражение в этом предложении'

/**
 * console.log(
    message.indexOf('это выражение')
)
 */

// Более удобный метод includes

/**
 * console.log(
    message.includes('это выражение')
)
 */

//Проверка начинается ли или оканчивается строка на указаные значения

/**
 * const message = 'Начало строки и конец строки'

console.log(message.startsWith('Нач'))
console.log(message.endsWith('оки'))
 */

// Способ получение подстроки из строки

/**
 * const str = "JavaScript";

console.log(str.substring(4, 9));
// в slice можно передать отрицательное значение
console.log(str.slice(0, 5));
console.log(str.slice(-6));
 */

// Метод repeat

/**
// const str = "JavaScript";

console.log(str.repeat(2)) 
*/

// Замена слов в строке
// Этот способ меняет только первое найденое слово
// replaceAll меняет все значения

/**
 * const message = "Я изучаю бэкенд";

console.log(message.replace("бэкенд", "фронтенд"));
 */

// Метод split позволяет разбить строку на массив

/**
 * const str = 'Hello, world!'

console.log(str.split(','))
 */

// Задачка на методы строк

/**
 * const value = prompt('Введите ваше имя: ')

const clearValue = value.trim().toLocaleLowerCase()

if(clearValue.length === 0) {
    alert('Ошибка! Введите корректные данные!')
}

if(clearValue.includes('админ')) {
    alert('Ошибка! Такое имя использовать нельзя!')
}
 */


