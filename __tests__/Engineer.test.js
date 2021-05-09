const Engineer = require('../lib/Engineer');

test ('creates an Engineer Object', () => {
    const engineer = new Engineer('name', 'id', 'email','github', 'Engineer')

    expect(typeof(engineer)).toBe('object')
    
    expect(engineer.github).toBe('github')
    expect(engineer.role).toBe('Engineer')
})