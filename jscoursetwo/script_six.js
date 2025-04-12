// Циклы в JavaScript — while, do while и for. Прерывание цикла break. Продолжение цикла continue.

// let count = 0;

// while (count < 10) {
//   console.log(count);
//   count++;
// }

// Если нужно, чтоб цикл выполнился хотя бы 1 раз
// do {
//   console.log(count);
//   count++;
// } while (count < 10);


// for (let  i = 0; i < 4; i++) {
//     alert(i)
// }

// let count = 1 

// while (count < 10) {
//     console.log(count);

//     if (count === 5) {
//         console.log('Цикл прерван');
//         break
//     }

//     count++
// };

// continue

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0)
        continue
    console.log(i)
}