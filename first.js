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

// alert('Осторожно!');

// let data = confirm("Идем дальше?");
// if (data) {
// alert('Хорош!')
// } else {
//     alert('Мда...')
// };

// let age = prompt("Сколько вам лет?");
// console.log(age);


// let person = null;

// if(confirm('Уверены?')) {
//     person = prompt('Введите ваше имя: ')
//     alert('Привет, ' + person)
// } else {
//     alert('Нет так нет')
// };


// let number = 10;

// console.error(number);


// Функции_________________________________________________________________

//function x(параметр) {}
// Параметры = переменные

// Глобальная переменная - записана вне функции и она видна всем, локальная переменная записана внутри функции и она может работать только внутри функции 

function info(word) {
    console.log(word + '!')
}


function summ(a, b) {
    let result = a + b
    info(result)    
};

// summ(1, 124);
let array = [21, 235, -124, Math.PI, 235, 64, 12, 0.5, 67]

function summ(arr) {

    let  a = 0;

    for(i = 0; i < arr.length; i++) 
        a += arr[i];

// return записывает в переменную, а ее потом можно вывести с помощью другой переменной
    return a
// console.log(a);
}

// let array = [21, 235, -124, Math.PI, 235, 64, 12, 0.5, 67]


let = res = summ(array);
console.log('Результат ' + res);


let num = 10; 

function bread() {
    let num = 20;
    console.log(num);
}

bread();

console.log(num);


// События и обработчик событий______________________________________________________________

// let counter = 0;

function onClickButton(element) {
    counter++;
    element.innerHTML = counter;
    element.style.background='red';
    element.style.color='white';
}


function onInput(el) {
    if(el.value == 'Hello')
        alert('VualeykumAssalam');
    console.log(el.value);
}




// Таймеры и интервалы_________________________________________________


// let id = setInterval(my_func, 1000);

// let counter = 0;

// function my_func(){
//     counter++
//     console.log('Counter: ' + counter);
//     if(counter == 5) {
//         clearInterval(id);
//         console.log('Расчет окончен!');
//     }
// }


// setInterval(function() {
//     counter++
//     console.log('Прошло секунд: ' + counter);
// }, 1000);



// let time = setInterval(my_func, 10000);

// function my_func () {
//     if(time % 2 == 0){
//         console.log('делится на 2');
//     }
// };


//  Создание объектов. Встроенные функции_____________________________________________




//  #14 – Создание объектов. Встроенные функции_________________________________________


// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// date.setHours(23);
// date.setMinutes(23);
// console.log('Время: ' + date.getHours() + ':' + date.getMinutes());


// let arr = [2,5,6,234,6,456,2345,235,74,5,74];

// console.log(arr.length);
// console.log(arr.join('| '));
// console.log(arr.sort());
// console.log(arr.reverse(). join(' | '));

// let line = (arr.reverse(). join(', '));

// console.log(line.split(','));


class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    };

    info() {
        console.log('Имя: ' + this.name + ', ' + 'Возраст: ' + this.age);
    };
};


let alex = new Person('Alexander', 24, false);
let bob = new Person('Bob', 54, true);

console.log(bob.name + ', ' + bob.age + ', ' + bob.happiness);
console.log(alex.name + ', ' + alex.age + ', ' + alex.happiness);

alex.info();
bob.info();









