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

// const obj1 = {name: 'Alex'}
// const obj2 = Object.assign({}, obj1)

//spret оператор

/*

const obj2 = {...obj1}

obj2.name = 'Max'

console.log('obj1', obj1)
console.log('obj2', obj2)
*/

// Объединение объектов

/*
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

*/

//spret оператор
// const user = {...object, ...object2, ...object3}

// const user = Object.assign({}, object, object2, object3)

// console.log(user)

// Работа со вложенными объектами
/*
const user = {
  name: "Alex",
  age: 25,
  address: {
    city: 'Almaty',
    zipcode: 123456,
  },
};


console.log(user.address?.city)

*/

/**
 *  Пример ожидаемого результата: {
 *  name: 'Vasya',
 *  age: 20,
 *  hasPremium: true,
 * }
 */

/*
const guest1 = {
  name: "Alex",
  age: 30,
  orderInfo: {
    roomType: 2,
    stayDates: {
      from: "14.04.2024",
      to: "24.04.2024",
    },
  },
};

const guest2 = {
  name: "Vasya",
  age: 27,
};

const logGuestInfo = (guest) => {
  console.log(
    `Имя: ${guest.name}
    Возраст: ${guest.age}
    Дата выезда: ${guest.orderInfo?.stayDates?.to ?? 'Не указана'}`
  );
};

logGuestInfo(guest1)
logGuestInfo(guest2)
*/

//Деструктуризация объекта
/*

const user = {
  name: "Bob",
  age: 75,
  isDeveloper: true,
};

const {name, age, isDeveloper} = user

console.log(`Имя: ${name}`)
console.log(`Возраст: ${age}`)
console.log(`Разработчик: ${isDeveloper}`)

*/

/*
const logAddress = (city, street, houseNumber, apartamentNumber) => {
  console.log(
    `Город: ${city}, Улица: ${street}, Дом: ${houseNumber}, Квартира: ${apartamentNumber}`
  );
};

logAddress('Almaty', 'Ulugbeka', 17, 51)
*/

// Второй вариант вывода информации

/*
const logAddressTwo = ({city, street, houseNumber, apartamentNumber,}) => {
  console.log(
    `Г. ${city}`,
    `Ул. ${street}`,
    `Д. ${houseNumber}`,
    `Кв. ${apartamentNumber}`
  );
};


logAddressTwo(
    {
        city: 'Astana',
        street: 'Lenina',
        houseNumber: 14,
        apartamentNumber: 138,
    }
)
*/

/*
const user = {
    name: 'Гоша',
}

const admin = {
    name: 'Борис'
}

const {name: userName} = user
const {name: adminName} = admin

console.log(`userName: ${userName}`)
console.log(`adminName: ${adminName}`)
*/

/*
const user1 = {
    name: 'Bob',
    age: 24,
    city: 'Shymkent',
}

const user2 = {
    name: 'John',
    age: 45,
}

const {city = 'не указан'} = user1

console.log(`Город: ${city}`)
*/

//Комбинация из ранее рассмотреных фишек

/*

const user = {
    city: 'Almaty',
}

const {city: userCity = 'не указан'}  = user

console.log('Город пользователя:' ,userCity);
*/

// Остаточные или REST парамметры

const logUser = (user) => {
  const { name, age, city, ...otherInfo } = user;

  console.log(`
    Имя: ${name}
    Возраст: ${age}
    Город: ${city}`);

  console.log('Дополнительная информация:', otherInfo);
};

logUser({
  name: "Denis",
  age: 28,
  city: "Almaty",
  job: "manager",
  sportsmen: true,
  hasDog: true,
  height: 180
});
