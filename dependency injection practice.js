var Engine2 = /** @class */ (function () {
    function Engine2() {
    }
    Engine2.prototype.start = function () {
        console.log("Engine starting...");
    };
    Engine2.prototype.end = function () {
        console.log("Engine stopping...");
    };
    return Engine2;
}());
var Car2 = /** @class */ (function () {
    function Car2(engine) {
        this.engine = engine;
    }
    Car2.prototype.start = function () {
        this.engine.start();
        console.log("Car starting...");
    };
    Car2.prototype.stop = function () {
        this.engine.end();
        console.log("Car stopping...");
    };
    return Car2;
}());
var myEngine = new Engine2();
var myCar2 = new Car2(myEngine);
myCar2.start();
myCar2.stop();
