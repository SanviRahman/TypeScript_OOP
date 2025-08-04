class Teacher {
    teacherName: string;
    teacherAge: number;
    teacherID: number;


    constructor(name: string, age: number, id: number) {
        this.teacherName = name;
        this.teacherAge = age;
        this.teacherID = id;
    }

    displayTeacherInfo(): string {
        return `Teacher Name: ${this.teacherName}, Age: ${this.teacherAge}, ID: ${this.teacherID}`;
    }
}

class Student extends Teacher {
    studentID: number;
    studentGrade: string;

    constructor(name: string, age: number, id: number, grade: string) {
        super(name, age, id);
        this.studentGrade = grade;
    }

    displayStudentInfo(): void {
        console.log(`Student Name: ${this.teacherName}, Age: ${this.teacherAge}, ID: ${this.teacherID}, Grade: ${this.studentGrade}`);
    }
}


let teacher = new Teacher("John Doe", 40, 101);
console.log(teacher.displayTeacherInfo());

let student = new Student("Jane Smith", 20, 102, "A");
console.log(student.displayStudentInfo());

