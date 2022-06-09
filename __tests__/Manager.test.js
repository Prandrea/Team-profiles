const Manager = require('../lib/Manager');



test('Creates an Manager school name', () => {
    var employee = new Manager('Dave', 5, 'test@email.com', 'testOffice');

    expect(employee.office).toBe('testOffice');
    
});