class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `Employee name: ${this.name}`;
    };
    getId() {
        return `Employee ID number: ${this.id}`;
    };
    getEmail() {
        return `Email: ${this.email}`;
    };
    getRole() {
        return 'Employee'
    }
}


module.exports = Employee;