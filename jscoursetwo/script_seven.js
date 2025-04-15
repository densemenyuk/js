//Функции в JavaScript. Область видимости. Параметры и аргументы. Значения по умолчанию. Return.

// function logHello () {
//     console.log('Hello');
    
// };

// logHello();


// const message = 'Глобальная переменная'

// function logMessage (){
//     const message = 'Локальная переменная'

//     console.log(message)

//     for (let i = 0; i < 3; i++) {
//         const message = `Итерация №${i}`
//         console.log(message);
        
//     }
// }

// logMessage()

// console.log(message)

// Область видимости переменных 

// {
//     const number = 1
//     console.log(number);
//     {
//         const number = 2
//         console.log(number);
//         {
//             const number = 2
//             console.log(number);
//         }
//     }
    
    
// }

// console.log(number);


// function logMessage (message, count) {
//     for (let i = 0; i < count; i++){
//         console.log(message);
//     }
// }

// logMessage('Первое сообщение', 2)
// logMessage('Второе сообщение', 5)
// logMessage('Третье сообщение', 1)


// Важнейшая концепция функции 

// function sum(a, b) {
//   return a + b 
//   console.log('йоу');
//   console.log('ой');

// }

// console.log(sum(111, 222));

// function getAgeType(age) {
//     if (typeof age !== 'number') {
//         return 'Возраст указан неверно!'
//     }

//     if (age < 1 || age > 125) {
//         return 'Данные указаны неккоректно, такого возраста быть не может!'
//     }

//     if (age < 18) {
//         return 'Несовершеннолетний пользователь'
//     }

//     return 'Взрослый'
// }

// console.log(getAgeType('Привет'));
// console.log(getAgeType(150));
// console.log(getAgeType(15));
// console.log(getAgeType(25));


// function getSecretMessage(name) {
//     if (!name) return 'Данные указаны неверно'
//     return `О, я тебя знаю, привет, ${name}`
// }

// console.log(getSecretMessage('Boris'));




