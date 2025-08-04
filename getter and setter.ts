class Man{
    private age: number;
    private name: string;


    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }


    //age
    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }

    //name
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}



let person = new Man(25, "John Doe");


//name
console.log(`Name: ${person.getName()}`);
person.setName("Jane Doe");
console.log(`Updated Name: ${person.getName()}`);

//age
console.log(`Age: ${person.getAge()}`);
person.setAge(30);
console.log(`Updated Age: ${person.getAge()}`);
