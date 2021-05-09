const Employee = require('../lib/Employee');

test ('creates an Employee Object', () => {
    const employee = new Employee('name', 'id', 'email', 'Employee')

    expect(typeof(employee)).toBe('object')
    
    expect(employee.name).toBe('name')
    expect(employee.id).toBe('id')
    expect(employee.email).toBe('email')
    expect(employee.role).toBe('Employee')
    
})