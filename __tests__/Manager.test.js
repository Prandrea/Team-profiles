const Manager = require('../lib/Manager');



test('Creates a Manager office number', () => {
    var employee = new Manager('Andrea', 10, 'test@email.com', 'testOffice');

    expect(employee.office).toBe('testOffice');
    
});