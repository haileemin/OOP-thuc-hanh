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
