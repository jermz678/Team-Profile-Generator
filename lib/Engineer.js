const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github;
        
    }
        getGithub() {
            return this.github;
        }
        getRole(){
            return "Engineer";
        }
        
};

// inquirer.prompt([
    
//     {
//         type: 'input',
//         name: 'github',
//         message: 'What is the Employee GitHub user name?'
//     }
    
    
// ])
// .then(data => {
//     const engineer = new Engineer(data.name, data.id, data.email, data.github)
//     console.log(engineer)

// })

module.exports = Engineer;