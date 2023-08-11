class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos`);
    }
}

const user1 = new User('João', 17);
user1.introduce();

const user2 = new User('Nicoly', 16);
user2.introduce();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Pizza {
    constructor(base, sauce, toppings, cheese,) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }
    getDesc() {
        return `Uma deliciosa pizza ${this.base}, 
        com molho ${this.sauce}, com cobertura ${this.toppings}
        e com o queijo ${this.cheese}`
    }
    getPriceBase() {
        if (this.base == 'traditional') {
            return 5;
        } else if (this.base == 'integral') {
            return 7;
        } else {
            return `Não trabalhamos com essa base: ${this.base}`;
        }
    }
    getPriceSauce() {
        if (this.sauce == 'tomato') {
            return 3;
        } else if (this.sauce == 'pesto') {
            return 6;
        } else {
            return `Não trabalhamos com esse molho: ${this.sauce}`;
        }
    }
    getPriceToppings() {
        if (this.toppings == 'pepperoni') {
            return 10;
        } else if (this.toppings == 'chicken') {
            return 9;
        } else {
            return `Não trabalhamos com essa cobertura: ${this.toppings}`;
        }
    }
    getPriceCheese() {
        if (this.cheese == 'cheedar') {
            return 20;
        } else if (this.cheese == 'mozzarella') {
            return 7;
        } else {
            return `Não trabalhamos com esse queijo: ${this.cheese}`;
        }
    }
    getTotalPricePizza() {
        return (this.getPriceBase() + this.getPriceSauce() + this.getPriceToppings() + this.getPriceCheese());
    }
}

const pizza1 = new Pizza('traditional', 'tomato', 'pepperoni', 'cheedar');
const pizza2 = new Pizza('integral', 'pesto', 'chicken', 'cheedar');
const pizza3 = new Pizza('')
console.log(pizza1);
console.log(pizza1.getDesc());
console.log(pizza1.getTotalPricePizza());
console.log(pizza2.getDesc());
console.log(pizza2.getTotalPricePizza());
console.log(pizza3.getDesc());
console.log(pizza3.getTotalPricePizza());
//////////////////////////////////////////////////////////////////////////////////////////////////////////
class Calculator {
    add(a,b){
        return a + b;
    }
    multiply(a,b){
        return a * b;
    }
    divide(a,b){
        return a/b;
    }
}
const calculator = new Calculator();
console.log(calculator.add(2,3));
const multiply = calculator.multiply(2,3);
console.log(multiply);