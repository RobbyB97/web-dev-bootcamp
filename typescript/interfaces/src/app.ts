class Department {
//    private id: string;
//    private name: string;
    protected employees: string[] = [];
    
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

class ITDepartment extends Department {
    constructor(
        id: string, 
        public admins: string[],
    ) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(
        id: string,
        private reports: string[]
    ) {
        super(id, 'Accounting');
    }

    addEmployee(name: string) {
        if (name === 'Robby') return;
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('adfgsfhg', ['Robby']);
// console.log(accounting);

const accounting = new AccountingDepartment('adfgsfhg', []);
accounting.addReport('Something went wrong...')
accounting.printReports();


it.addEmployee('Robby');
it.addEmployee('Jeyson');

//accounting.employees[2] = 'Anna'; //<- Avoid something like this

it.describe();
it.printEmployeeInformation();

//const accountingCopy = {name: 'accounting copy', describe: accounting.describe};
//accountingCopy.describe();