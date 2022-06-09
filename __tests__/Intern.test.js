const Intern = require('../lib/Intern');



test('Creates an Intern school name', () => {
    var employee = new Intern('Dave', 5, 'test@email.com', 'testSchool');

    expect(employee.school).toBe('testSchool');
    
});