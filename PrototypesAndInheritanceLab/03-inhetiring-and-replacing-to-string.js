function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `${super.toString().slice(0, -1)}, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `${super.toString().slice(0, -1)}, course: ${this.course})`
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}
    let p = new Person('ivan', 'asd@asd');
    let t = new Teacher('georgi', 'aasdssq12d@asd', 'maths');

    console.log(t.toString());





// let s = toStringExtension();

// let t = s.Teacher('As', 'tz', 'matchs');

// console.log(s);
// console.log(t);