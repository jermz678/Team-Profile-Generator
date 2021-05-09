const Manager = require('../lib/Manager');

test ('creates an Manager Object', () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber', 'Manager')

    expect(typeof(manager)).toBe('object')

    expect(manager.officeNumber).toBe('officeNumber')
    expect(manager.role).toBe('Manager')
})