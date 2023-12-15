// let shirt = {
//     color: "blue",
//     size: "XL",
//     style: "cardigan",
//     fabricType: "wool",
//     brand: "Luis Vuiton"   
// }


// function Person(firstName, lastName, age, eyeColor) {   (đây là cách cũ rích rồi )
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//         this.lastName = name;
//     };
// }

// class Person {           //đây là cách mới nè
//     constructor(firstName, lastName, age, eyeColor) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.eyeColor = eyeColor; 
//     }
//     changeName = function (name) {
//         this.lastName = name;
//     };   
    
//     setFirstName(firstName) {
//         this.firstName = firstName;
//     };

//     getFirstName() {
//         return this.firstName;
//     }
// }

// let myFather = new Person ("Dương", "Lê", "50", "Black");
// let myWife = new Person ("Linh", "Đặng", "20", "Brown");

// myFather.setFirstName("Đặng");
// console.log(myFather.getFirstName());

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    };

    Circle = function () {

    };

    getRadius = function() {
        return this.radius;
    };

    getArea = function () {
        let area = Math.PI * this.radius * this.radius;
        return area;
    };
}

let circle = new Circle(5, "Blue");


console.log(`Bán kính hình tròn là ${circle.getRadius()}. Diện tích hình tròn là ${circle.getArea()}`)




