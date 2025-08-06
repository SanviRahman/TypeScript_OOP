class Animal1{
    makeSound(): string {
        return "Some generic animal sound";
    }
}
class Dog1 extends Animal1{
    makeSound(): string {
        return "Bark";
    }
}


const dog1= new Dog1();
console.log(dog1.makeSound()); // Bark