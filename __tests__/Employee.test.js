const Employee = require('../lib/Employee');

test ('creates an Employee Object', () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe('object')


})