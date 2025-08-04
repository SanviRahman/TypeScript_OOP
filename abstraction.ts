abstract class UserProfile{
    userName: string;
    age: number;
    userId: number;

    constructor(userName:string, age:number, userId:number) {
        this.userName = userName;
        this.age = age;
        this.userId = userId;
    }
    abstract displayInfo(): void;
}

class Student1 extends UserProfile {
    studentGrade: string;

    constructor(userName: string, age: number, userId: number, studentGrade: string) {
        super(userName, age, userId);
        this.studentGrade = studentGrade;
    }

    displayInfo(): void {
        console.log(`Student Name: ${this.userName}, Age: ${this.age}, ID: ${this.userId}, Grade: ${this.studentGrade}`);
    }
}

let student1 = new Student1("Alice", 22, 201, "A+");
student1.displayInfo();

