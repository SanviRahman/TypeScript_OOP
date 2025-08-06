var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("Engine started");
    };
    Engine.prototype.end = function () {
        console.log("Engine stopped");
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.engine = new Engine();
    }
    Car.prototype.start = function () {
        this.engine.start();
        console.log("Car is starting");
    };
    Car.prototype.stop = function () {
        this.engine.end();
        console.log("Car is stopping");
    };
    return Car;
}());
var myCar = new Car();
myCar.start();
myCar.stop();
