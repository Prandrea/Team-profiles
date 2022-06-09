const Employee = require('../lib/Employee');

test('Creates an employee name', () => {
    var employee = new Employee('Andrea');

    expect(employee.name).toBe('Andrea');
    
});

test('Creates an employee id', () => {
    var employee = new Employee('Andrea', 10);

    expect(employee.id).toBe(10);
    
});

test('Creates an employee email', () => {
    var employee = new Employee('Andrea', 10, 'test@email.com');

    expect(employee.email).toBe('test@email.com');
    
});