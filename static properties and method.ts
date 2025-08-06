class Counter{
    static count=0;

    static increment(){
        this.count++;
    }
    static getCount(){
        return this.count;
    }
}

Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // Output: 4