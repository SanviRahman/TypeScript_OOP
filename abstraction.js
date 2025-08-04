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
var UserProfile = /** @class */ (function () {
    function UserProfile(userName, age, userId) {
        this.userName = userName;
        this.age = age;
        this.userId = userId;
    }
    return UserProfile;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(userName, age, userId, studentGrade) {
        var _this = _super.call(this, userName, age, userId) || this;
        _this.studentGrade = studentGrade;
        return _this;
    }
    Student1.prototype.displayInfo = function () {
        console.log("Student Name: ".concat(this.userName, ", Age: ").concat(this.age, ", ID: ").concat(this.userId, ", Grade: ").concat(this.studentGrade));
    };
    return Student1;
}(UserProfile));
var student1 = new Student1("Alice", 22, 201, "A+");
student1.displayInfo();
