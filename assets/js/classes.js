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