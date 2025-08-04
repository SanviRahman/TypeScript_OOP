var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnyUsser = /** @class */ (function () {
    function AnyUsser(name, age) {
        this.name = name;
        this.age = age;
    }
    return AnyUsser;
}());
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Staff.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Salary: ").concat(this.salary));
    };
    return Staff;
}(AnyUsser));
var staffMember = new Staff("John Doe", 30, 50000);
staffMember.display();
