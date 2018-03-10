function personAndTeacherAndStudent() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }

        toString(){
            let properties=Object.keys(this);

            return `${this.constructor.name} (${properties.map(x=>`${x}: ${this[x]}`).join(', ')})`;
        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
    }

    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course=course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let mymodules=personAndTeacherAndStudent();

let Person=mymodules.Person;

let firstPerson=new Person('mitko','neshto@abv');
console.log(firstPerson.toString());


