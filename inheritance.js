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
var Teacher = /** @class */ (function () {
    function Teacher(name, age, id) {
        this.teacherName = name;
        this.teacherAge = age;
        this.teacherID = id;
    }
    Teacher.prototype.displayTeacherInfo = function () {
        return "Teacher Name: ".concat(this.teacherName, ", Age: ").concat(this.teacherAge, ", ID: ").concat(this.teacherID);
    };
    return Teacher;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id, grade) {
        var _this = _super.call(this, name, age, id) || this;
        _this.studentGrade = grade;
        return _this;
    }
    Student.prototype.displayStudentInfo = function () {
        console.log("Student Name: ".concat(this.teacherName, ", Age: ").concat(this.teacherAge, ", ID: ").concat(this.teacherID, ", Grade: ").concat(this.studentGrade));
    };
    return Student;
}(Teacher));
var teacher = new Teacher("John Doe", 40, 101);
console.log(teacher.displayTeacherInfo());
var student = new Student("Jane Smith", 20, 102, "A");
console.log(student.displayStudentInfo());
