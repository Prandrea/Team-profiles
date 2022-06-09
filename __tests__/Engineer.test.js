const Engineer = require('../lib/Engineer');



test('Creates an Engineer github name', () => {
    var employee = new Engineer('Dave', 5, 'test@email.com', 'testgithub');

    expect(employee.github).toBe('testgithub');
    
});