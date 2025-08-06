class Engine1{
    start(): void {
        console.log("Engine started");
    }
    end(): void {
        console.log("Engine stopped");
    }
}

class Car1 {
    private engine1: Engine1;

    constructor(engine1: Engine1) {
        this.engine1 = engine1;
    }

    start(): void {
        this.engine1.start();
        console.log("Car is starting");
    }

    stop(): void {
        this.engine1.end();
        console.log("Car is stopping");
    }
}

let myEngine1 = new Engine1();
let myCar1 = new Car1(myEngine1);
myCar1.start();
myCar1.stop();
