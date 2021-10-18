function solution() {
    class Employee {
        constructor(name, age, salary, tasks) {
            if (this.constructor === Employee) {
                throw new Error;
            }

            this.name = name;
            this.age = age;
            this.salary = salary;
            this.tasks = tasks;
            this._i = 0;
        }

        _calculateSalary() {
            return this.salary;
        }


        work() {
            if (this._i == this.tasks.length) {
                this._i = 0;
            }
            console.log(this.tasks[this._i++]);
            return this;
        }

        collectSalary() {
            console.log(`${this.name} received ${this._calculateSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age, salary) {
            super(name, age, salary, [`${name} is working on a simple task.`]);
        }
    }

    class Senior extends Employee {
        constructor(name, age, salary) {
            super(name, age, salary, [`${name} is working on a complicated task.`,
            `${name} is taking time off work.`,
            `${name} is supervising junior workers.`]);
        }
    }

    class Manager extends Employee {
        constructor(name, age, salary) {
            super(name, age, salary, [
                `${name} scheduled a meeting.`,
                `${name} is taking time off work.`,
                `${name} is preparing a quarterly report.`]);
            this.dividend = 0;
        }

        _calculateSalary() {
            return this.salary + this.dividend;
        }

    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  


