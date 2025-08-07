class Engine2{
    start(){
        console.log("Engine starting...");
    }
    end(){
        console.log("Engine stopping...");
    }
}

class Car2{
    private engine: Engine2;

    constructor(engine: Engine2) {
        this.engine = engine;
    }

    start() {
        this.engine.start();
        console.log("Car starting...");
    }

    stop() {
        this.engine.end();
        console.log("Car stopping...");
    }
}

let myEngine = new Engine2();
let myCar2 = new Car2(myEngine);
myCar2.start();
myCar2.stop();