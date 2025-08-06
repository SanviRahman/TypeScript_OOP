var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        this.count++;
    };
    Counter.getCount = function () {
        return this.count;
    };
    Counter.count = 0;
    return Counter;
}());
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // Output: 4
