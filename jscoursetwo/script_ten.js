// JavaScript объекты — сравнение, копирование, объединение, деструктуризация, остаточные параметры.


// Объект - это ссылочный тип данных

/*
const obj1 = {age: 10}
const obj2 = {age: 10}
*/

// Сравнение 2 объектов

/*
const obj1 = {
    name: 'Alex',
    age: 25,
}

const obj2 = {
    name: 'Alex',
    age: 25,
}


const areObjectEqual = (object1, object2) => {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    console.log('keys1:', keys1.length)    
    console.log('keys2:', keys2.length)    

    if(keys1.length !== keys2.length) {
        return false
    }

    for (const key in object1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }

    return true
}

*/

// areObjectEqual(obj1, obj2);
/*
console.log (
    'Равны ли obj1 и obj2:',
    areObjectEqual(obj1, obj2)
)
*/

// Клонирование объектов 

const obj1 = {name: 'Alex'}
// const obj2 = Object.assign({}, obj1)

//spret оператор

const obj2 = {...obj1}

obj2.name = 'Max'

console.log('obj1', obj1)
console.log('obj2', obj2)


// Объединение объектов

const object = {name: 'Alex'}
const object2 = {
    age: 25,
    adress: {
        city: 'Almaty',
    }
}
const object3 = {
    isDeveloper: true,
    adress: {
        zipcode: 123321,
    }
}

//spret оператор
const user = {...object, ...object2, ...object3}

// const user = Object.assign({}, object, object2, object3)

console.log(user)

