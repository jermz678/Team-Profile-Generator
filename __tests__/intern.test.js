const Intern = require('../lib/Intern');

test ('creates an Intern Object', () => {
    const intern = new Intern('name', 'id', 'email', 'school', 'Intern')

    expect(typeof(intern)).toBe('object')

    expect(intern.school).toBe('school')
    expect(intern.role).toBe('Intern')
})