/*const names = ["Whinds", "Freeway", "Teste", "Maria"];
names.forEach((name) => {
    console.log(`Hi, ${name}!`);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log(number);
        console.log(`O número ${number} está na posição ${index} do array`);
    }
});
*/

/*const cars = [
    {
        marca: "Ford",
        modelo: "Ranger Hover"
    },

    {
        marca: "Chevrolet",
        modelo: "Camaro"
    },

    {
        marca: "Fiat",
        modelo: "Toro"
    },

    {
        marca: "Ferrari",
        modelo: "Ferrari Pink"
    },
];
cars.forEach((car) => {
    console.log(`A marca do carro é: ${car.marca} e o modelo é: ${car.modelo}`);
});
*/
class Car {
    constructor(param1, param2) {
        this.brand = param1;
        this.model = param2;
    }
}
class CarsList {
    constructor() {
        this.cars = [];
    }
    addCar(param) {
        this.cars.push(param);
    }
}
const list = new CarsList();
function createCar() {
    const brand = document.getElementById("brandInput").value;
    const model = document.getElementById("modelInput").value;
    //console.log(brand, model);
    const hotwheel = new Car(brand, model);
    list.addCar(hotwheel);

    list.cars.forEach(car => {
        console.log(`A marca de seu carro é ${car.brand} e o modelo é ${car.model}`);
    });
}



