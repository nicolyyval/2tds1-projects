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
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}
const calculator = new Calculator();
console.log(calculator.add(2, 3));
const multiply = calculator.multiply(2, 3);
console.log(multiply);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

class Witch {
    constructor(name, patron, house, wand) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.wand = wand;
        this.spellLearned = [];
    }
    getName() {
        return `O nome do(a) bruxo(a) é: ${this.name}`;
    }
    getPatron() {
        return `O patrono do(a) bruxo(a) é: ${this.patron}`;
    }
    getHouse() {
        return `A casa do(a) bruxo(a) é: ${this.house}`;
    }
    getWand() {
        return `A varinha do(a) bruxo(a) é: ${this.wand}`;
    }
    learnedASpell(spell) {
        this.spellLearned.push(spell);
        console.log(`O(a) bruxo(a) ${this.name} aprendeu o feitiço ${spell}`);
    }
}

 const witch1 = new Witch('Hermione Granger', 'Otter', 'Gryffindor', 'Vine wood and dragon heartstring', 'm');
 console.log(witch1);
 witch1.learnedASpell("Accio");
 witch1.learnedASpell("Wingardium Leviosa");
 witch1.learnedASpell("Expectro Patronum");
 witch1.learnedASpell("Expelliarmus");

class TypeWitch extends Witch {
    constructor(name, patron, house, wand, typeWitch) {
        super(name, patron, house, wand);
        this.TypeWitch = typeWitch.toUpperCase();
    }
    getTypeWitch() {
        if (this.typeWitch == 'M') {
            return `O tipo de bruxo(a) é:
            ${this.typeWitch} - Muggle`;
        } else if (this.typeWitch == 'P') {
            return `O tipo de bruxo(a) é: ${type.witch1} - Puro`;
        } else {
            return `Não é um bruxo(a)`;
        }
    }
}
console.log(witch1.getTypeWitch());
console.log(witch1);


class ChamberOfSecret {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd; // atributo privado (//);

        this.checkPwd = (pwdInput) => {
            if (_pwd == pwdInput) {
                return `Bem vindo(a) ${this.name} a Câmara Secreta`;
            } else {
                return `Você é um trouxa e não tem acesso a Câmara Secreta`;
            }
        }
    }
    // método público 
    acessChamber(pwdInput) {
        if (this.checkPwd(pwdInput)) {
            return `Bem Vindo(a) ${this.name} a câmara secreta!🐍`;
        } else {
            return `Senha incorreta 😒`;
        }
    }
    showName() {
        return this.name;
    }
}
const harry = new ChamberOfSecret('Harry Potter', '1234');
let inputPdw = '1234'
console.log(harry.acessChamber('inputPwd'));