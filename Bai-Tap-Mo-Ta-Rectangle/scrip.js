class Retangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    };

    Retangle = function() {

    };

    setLength = function(length) {
        this.length = length;        
    };

    setWidth = function(width) {
        this.width = width;
    };

    getPerimerter = function() {
        return ((this.length + this.width) * 2)
    };
    
    getArea = function() {
        return (this.length * this.width)
    };
}


// let retangle = new Retangle(3, 4);

// alert(retangle.getPerimerter())
// alert(retangle.getArea())

let retangle = new Retangle();
retangle.setLength(4);
retangle.setWidth(3);
alert(`Chu vi là: ${retangle.getPerimerter()}, Diện tích là: ${retangle.getArea()}`)



