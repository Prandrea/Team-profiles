const Intern = require('../lib/Intern');



test('Creates an Intern school name', () => {
    var employee = new Intern('Andrea', 10, 'test@email.com', 'testEdu');

    expect(employee.school).toBe('testEdu');
    
});