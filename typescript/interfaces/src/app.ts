class Department {
//    private id: string;
//    private name: string;
    private employees: string[] = [];
    
    constructor(
        private readonly id: string, 
        public name: string
    ) {
//        this.name = n;
//
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('adfgsfhg', 'Accounting');
// console.log(accounting);

accounting.addEmployee('Robby');
accounting.addEmployee('Jeyson');

//accounting.employees[2] = 'Anna'; //<- Avoid something like this

accounting.describe();
accounting.printEmployeeInformation();

//const accountingCopy = {name: 'accounting copy', describe: accounting.describe};
//accountingCopy.describe();