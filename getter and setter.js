var Man = /** @class */ (function () {
    function Man(age, name) {
        this.age = age;
        this.name = name;
    }
    //age
    Man.prototype.getAge = function () {
        return this.age;
    };
    Man.prototype.setAge = function (age) {
        this.age = age;
    };
    //name
    Man.prototype.getName = function () {
        return this.name;
    };
    Man.prototype.setName = function (name) {
        this.name = name;
    };
    return Man;
}());
var person = new Man(25, "John Doe");
//name
console.log("Name: ".concat(person.getName()));
person.setName("Jane Doe");
console.log("Updated Name: ".concat(person.getName()));
//age
console.log("Age: ".concat(person.getAge()));
person.setAge(30);
console.log("Updated Age: ".concat(person.getAge()));
