const Manager = require('../lib/Manager');



test('Creates a Manager office number', () => {
    var employee = new Manager('Andrea', 10, 'test@email.com', 1);

    expect(employee.officeNum).toBe(1);
    
});