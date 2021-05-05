const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

class Engineer extends employee {
    constructor (data){
        const {role, github} = data;
        this.github = github;
        this.role = role;
    }
        getGithub() {
            return this.github;
        }
        getRole(){
            return this.role;
        }
        
};

inquirer.prompt([
    {
        type: 'checkbox',
        name: 'role',
        message: 'Is this employee an Engineer?',
        choices: ['yes', 'no']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the Employee GitHub user name?'
    }
    
    
])
.then(data => {
    const engineer = new Engineer(data)
    console.log(engineer)

})

module.exports = Engineer;