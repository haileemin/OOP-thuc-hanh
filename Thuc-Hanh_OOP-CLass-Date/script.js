// [Thực hành] Xây dựng lớp Date

class MyDate {
    constructor(day, month, year) {
        this.day = day;

        this.month = month;

        this.year = year;
    }
    getDay = function() {
       return this.day;
            }
    getMonth = function() {
        return this.month;
    }
    getYear = function() {
        return this.year;
    }
    setDay = function(day) {
        this.day  = day;
            }
    setMonth = function(month) {
        this.month  = month;
    }
    setYear = function(year) {
        this.year  = year;
    }

    
}
let date = new MyDate(13, 12, 2023);

// let day = date.getDay(); // 2

// let month = date.getMonth(); // 2

// let year = date.getYear(); // 2007

// alert(`${day}/${month}/${year}`);

date.setDay(10);
date.setMonth(10);
date.setYear(2019);
 
// let day = date.getDay();

// let month = date.getMonth(); 

// let year = date.getYear(); 

alert(`${date.getDay()}/${date.getMonth()}/${date.getYear()}`);
// alert(day + "/" + month + "/" + year);