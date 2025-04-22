// Ключевое слово this в JavaScript для начинающих • this в объектах и функциях

/*
const user = {
  name: "Boris",
  age: 23,
  logThis: function () {
    console.log("this в теле метода объекта user", this);
    // console.log("this.name", this.name);
  },
};

user.logThis();
*/

/*
const user1 = { name: "Alex" };
const user2 = { name: "Boris" };

function logInfo() {
  console.log("this: ", this);
  console.log("this.name: ", this.name);
}

logInfo();

user1.logName = logInfo
user2.logName = logInfo

user1.logName()
user2.logName()
*/

// Задачка на калькулятор

/*
const calculator = {
  read() {
    this.a = Number(prompt("Введите первое значение:", 0));
    this.b = Number(prompt("Введите второе значение:", 0));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read()
console.log('Калькулятор:', calculator)
console.log('Сумма: ', calculator.sum())
console.log('Произведение: ', calculator.mul())
*/

// Задачка

/**
    let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },

  down() {
    this.step--;
    return this
  },

  showStep() {
    console.log("Текущее значение:", this.step);
    return this
  },
};


ladder.up().up().down().showStep().down().showStep()
 */
