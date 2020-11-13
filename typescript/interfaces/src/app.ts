class Department {
    static fiscalYear = 2020;
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

    static createEmployee(name: string) {
        return {name: name};
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
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) throw new Error('Please add a report!');
        this.addReport(value);
    }

    constructor(
        id: string,
        private reports: string[]
    ) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Robby') return;
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Robby B.');
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment('adfgsfhg', ['Robby']);
// console.log(accounting);

const accounting = new AccountingDepartment('adfgsfhg', []);

//accounting.mostRecentReport = '';
accounting.addReport('Something went wrong...')
accounting.printReports();


it.addEmployee('Robby');
it.addEmployee('Jeyson');

//accounting.employees[2] = 'Anna'; //<- Avoid something like this

it.describe();
it.printEmployeeInformation();

//const accountingCopy = {name: 'accounting copy', describe: accounting.describe};
//accountingCopy.describe();