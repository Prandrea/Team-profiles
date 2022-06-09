const Employee = require('../lib/Employee');



test('Creates an employee name', () => {
    var employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    
});

test('Creates an employee id', () => {
    var employee = new Employee('Dave', 5);

    expect(employee.id).toBe(5);
    
});

test('Creates an employee email', () => {
    var employee = new Employee('Dave', 5, 'test@email.com');

    expect(employee.email).toBe('test@email.com');
    
});