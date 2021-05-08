const Engineer = require('../lib/Engineer');

test ('creates an Engineer Object', () => {
    const engineer = new Engineer()

    expect(typeof(engineer)).toBe('object')
})