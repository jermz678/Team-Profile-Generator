const Intern = require('../lib/Intern');

test ('creates an Intern Object', () => {
    const intern = new Intern()

    expect(typeof(intern)).toBe('object')
})