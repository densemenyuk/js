//var - старое значение

// const - неизменяемая переменная

// let a = 5;
// a = 7;

// const b = 10;

// console.log('Перменная: ' + b + '.');

// let number;

// number = 123.4;

// console.log(number + ' число')

// let word = false;

// console.log(word);

// let num1 = 5;
// let num2 ='5';

// console.log(num1 + num2);

// let num_1 = 15;
// let num_2 = 5;

// console.log('Вычитание:' + (num_1 + num_2));

// let num_3 = 5;
// num_3++;

// console.log('Итог:' + num_3);

// let str_1 = Number('12');
// let str_2 = Number('2');

// console.log('Результат:' + (str_1 + str_2));

// console.log('Math: ' + (Math.PI));
// console.log('Math: ' + (Math.E));
// console.log('Math: ' + (Math.sin(2)));
// console.log('Math: ' + (Math.min(2, 3, 5, 12, 3465, 1298, -1, 1234,-5)));
// console.log('Math: ' + (Math.max(2, 3, 5, 12, 3465, 1298, -1, 1234,-5)));

// УСЛОВИЯ__________________________________________________________________

// && = И
// // = ИЛИ

// let number = 15;

// let house = true;

// if (number < 15  && !house) {
//     console.log('ok');

// } else if (number == 15) {
//     console.log('Now its all ok');

// } else {
//     console.log('Not ok');
// };

/* Данный оператор создан для проверки одного элемента много раз */
let str = "word";

// switch(str){
//     case '4':
//         console.log('Переменная со значением 4!');
//         break;
//     case '45':
//         console.log('Переменная со значением 45!');
//         break;
//     case 'word1':
//         console.log('Переменная со значением word!');
//         break;
//     default:
//     console.log('Default');
// };

//Массивы____________________________________________________________

// let arr = [4, 6, 12, 7, 0, -4, 25, '124dfg', 2, true, 21, false, Math.PI];
// arr[3] = 'bread'
// console.log(arr.length);

// let matrix = [[1, 2, 3, 4, 5], 2345, ['word', 'brain', 'loh'], 12, -4, ['124dfg', 2, true, 21]]

// matrix[2][2] = 'ne loh'

// console.log(matrix);

// Циклы_________________________________________________________________

// For

// Для перебора массивов очень удобен

// for (let i = 100; i >= 1; i /= 2) {
//     console.log('Перменная равна:' + i);
// };

// While
//Удобен для проверки условий

// let j = 1000;

// while(j >= 100) {
//     console.log('J равна: ' + j);
//     j -= 100;
// };

// do while

// let x = 1;

// do {
//     console.log(x);
//     x++
// } while (x <= 10);

// for (let i = 10; i <= 20; i += 1) {
//     if(i % 2 == 0)
//         continue;
//   console.log(i);
// };


// let arr = [4, 6, 12, 7, 0, -4, 25, '124dfg', 2, true, 21, false, Math.PI];

// for(let i = 0; i < arr.length; i++){
//     arr[i] *= 2;
//     console.log('Элемент: ' + (i + 1) + ': ' + arr[i]);
// };