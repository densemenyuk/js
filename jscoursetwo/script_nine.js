//Объекты в JavaScript. Свойства объекта — чтение, добавление, удаление, проверка наличия и перебор.

/** const firstEmptyObject = {
    login: 'dinozavr',
    password: 'qwerty',
    'registration date': '01.02.2021',
    'last-auth': '05.04.2025',
    adress: {
        city: 'Almaty',
        street: 'Abay'
    },

    sayHi: () => console.log('Привет'), // Это функция называется метод
}

console.log(firstEmptyObject.password)
// Если название содержит пробел, дефис, других способов нет
console.log(firstEmptyObject['registration date'])
// Вызов функции (метода)
firstEmptyObject.sayHi()
*/

/** 
const user = {}


//Добавление свойств в объект
user.name = 'Boris'
user['is developer'] = true
//Удаление свойства
delete user.name 

console.log(user)
*/


/** 
const name = 'Axe'
const age = 25

const user = {
    name,
    age,
}

console.log(user)
*/

/**
const propName = prompt('Какое имя свойсту дадим?')
const propValue = prompt(`Какое значение мы туда запишем ${propName}`)

const obj = {
    [propName]: propValue,
}

console.log(obj)
 */

// Проверка наличия данных

/**
const user = {
    name: 'Boris',
    age: 25,
}

console.log('name' in user)
 */

// Перебор свойств объекта через цикл
// Вывод значений ключей
/**
const user = {
    name: 'Boris',
    age: 25,
    isDeveloper: true,
}

for (const key in user) {
    console.log(user[key]);
}
 */

/**

const nums = {
    2: 'Второй',
    1: 'Первый',
    3: 'Третий'
}

for (const num in nums) {
    console.log(nums[num])
}
*/


