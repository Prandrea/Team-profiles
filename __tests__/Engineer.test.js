const Engineer = require('../lib/Engineer');

test('Creates an Engineer github name', () => {
    var employee = new Engineer('Andrea', 10, 'test@email.com', 'testgit');

    expect(employee.github).toBe('testgit');
    
});