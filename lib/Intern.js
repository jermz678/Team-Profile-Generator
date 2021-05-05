const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

class Intern extends Employee{
    constructor (data){
        const {role, school} = data;
        this.role = role;
        this.school = school;
        
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }

 }

 inquirer.prompt([
    {
        type: 'checkbox',
        name: 'role',
        message: 'Is this employee an Intern?',
        choices: ['yes', 'no']
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where does the Intern attend school?'
    }
  
])
.then(data => {
    const intern = new Intern(data)
    console.log(intern)

})

module.exports = Intern;