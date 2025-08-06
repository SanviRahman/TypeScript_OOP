class Engine{
    start(): void {
        console.log("Engine started");
    }

    end(): void {
        console.log("Engine stopped");
    }
}

class Car {
    private engine: Engine;

    constructor() {
        this.engine = new Engine();//tight coupling
    }

    start(): void {
        this.engine.start();
        console.log("Car is starting");
    }

    stop(): void {
        this.engine.end();
        console.log("Car is stopping");
    }
}

let myCar = new Car();
myCar.start();
myCar.stop();
