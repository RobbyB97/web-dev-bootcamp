class Department {
    name: string;
    private employees: string[] = [];
    
    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');
// console.log(accounting);

accounting.addEmployee('Robby');
accounting.addEmployee('Jeyson');

//accounting.employees[2] = 'Anna'; //<- Avoid something like this

accounting.describe();
accounting.printEmployeeInformation();

//const accountingCopy = {name: 'accounting copy', describe: accounting.describe};
//accountingCopy.describe();