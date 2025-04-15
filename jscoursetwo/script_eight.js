// Виды функций в JavaScript. Стрелочные функции. Как правильно называть функции? Назначение функций.

// console.log(sum(5, 6));

// function sum(a, b) {
//   return a + b;
// }

// Возможность перезаписать функцию

// function logMessage() {
//   console.log("Первое значение");
// }

// function logMessage() {
//   console.log("Второе значение");
// }

// logMessage();

// функция arguments

// function logAll() {
//   console.log(arguments);
// }

// logAll("Привет", 555, true);

// Function expression (Присваевам в переменную)

// const logHello = function () {
//   console.log("Привет");
// };

// logHello();

// Стрелочная функция, в стрелочной функции нет своего контекста и ключивое словое this покажет на родительскую область видимости

// const logHi = (a, d) => {
//   console.log(a + d);
// };

// logHi(21, 12);


// можно записать в одну строку 

// const sum = (a, b) => a + b

// console.log(sum(1,4))

// CallBack функции 


// const logMessage = (actoinBefore, actionAfter) => {
//     actoinBefore()
//     console.log('Privet')
//     actionAfter()
// };
// const fn1 = () => console.log('before');
// const fn2 = () => console.log('after');

// logMessage(fn1, fn2)


// const validate = (hasAcces) => {
//     if(hasAcces) {
//         return () => console.log('Доступ разрешен')
//     } else {
//         return () => console.log('Доступ запрещен')
//     }
// }

// const logMessage = validate(false)

// logMessage()


// Правильное название функций, как правило первое слово - глагол, а второе - уточняющее существительное

/** 
* Глаголы префиксы для функций: 
* get - получить какое-то значение
* set - установить какое-то значение
* creat - создать какое-то значение, сущность
* update - обновить какое-то значение, сущность
* delete - удалить какое-то значение, сущность
* show - показать что-то
* hide - скрыть что-то
* search - найти что-то
* calc - вычислить что-то
* check - проверить что-то
*/

// В первую очередь функция позволяет переиспользовать один и тот же код множество раз
// Но еще они используются для упрощения чтения кода

