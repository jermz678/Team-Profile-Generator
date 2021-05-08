const Manager = require('../lib/Manager');

test ('creates an Manager Object', () => {
    const manager = new Manager()

    expect(typeof(manager)).toBe('object')
})