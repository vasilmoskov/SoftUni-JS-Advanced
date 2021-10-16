class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(name, salary, position, department) {
        if (department == undefined || department == null || department == '') {

            throw new Error('Invalid Input!');
        }

        const employee = new Company.Employee(name, salary, position);

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }

        this.departments.get(department).push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let sortedDepartments = [...this.departments]
            .sort(([aName, aWorkers], [bName, bWorkers]) => {
                let aAverarageSalary = this._getAverageSalary(aName);
                let bAverarageSalary = this._getAverageSalary(bName);
                return bAverarageSalary - aAverarageSalary;
            });

        let [bestDepartmenName, bestDepartmentWorkers] = sortedDepartments[0];
        bestDepartmentWorkers.sort((a, b) => a.compareTo(b));

        let result = [];

        result.push(`Best Department is: ${bestDepartmenName}`);
        result.push(`Average salary: ${this._getAverageSalary(bestDepartmenName).toFixed(2)}`);
        let workersString = bestDepartmentWorkers.map(w => w.toString()).join('\n');
        result.push(workersString);

        return result.join('\n');
    }

    _getAverageSalary(departmentName) {
        let workers = this.departments.get(departmentName);

        return workers.reduce((acc, w) => acc += w.salary, 0) / workers.length;
    }

    static Employee = class Employee {
        constructor(name, salary, position) {
            this._name = name;
            this._salary = salary;
            this._position = position;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._validateInput(value);
            this._name = value;
        }

        set salary(value) {
            this._validateInput(value);
            if (value < 0) {
                throw new Error('Invalid Input!');
            }
            this._salary = value;
        }

        get salary() {
            return this._salary;
        }


        set position(value) {
            this._validateInput(value);
            this._position = value;
        }

        get position() {
            return this._position;
        }

        _validateInput(value) {
            if (value == undefined || value == null || value == '') {
                throw new Error('Invalid Input!');
            }
        }

        compareTo(other) {
            let result = other.salary - this.salary;
            return result === 0 ? this.name.localeCompare(other.name) : result;
        }

        toString() {
            return `${this.name} ${this.salary} ${this.position}`;
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());






