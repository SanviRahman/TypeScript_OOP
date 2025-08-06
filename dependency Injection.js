var Engine1 = /** @class */ (function () {
    function Engine1() {
    }
    Engine1.prototype.start = function () {
        console.log("Engine started");
    };
    Engine1.prototype.end = function () {
        console.log("Engine stopped");
    };
    return Engine1;
}());
var Car1 = /** @class */ (function () {
    function Car1(engine1) {
        this.engine1 = engine1;
    }
    Car1.prototype.start = function () {
        this.engine1.start();
        console.log("Car is starting");
    };
    Car1.prototype.stop = function () {
        this.engine1.end();
        console.log("Car is stopping");
    };
    return Car1;
}());
var myEngine1 = new Engine1();
var myCar1 = new Car1(myEngine1);
myCar1.start();
myCar1.stop();
