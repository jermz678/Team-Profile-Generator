const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

class Manager extends Employee{
    constructor (data){
        const {role, officeNumber} = data;
        this.officeNumber = officeNumber;
        this.role = role;

    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        if(this.role === "yes"){
        return this.role;
        console.log("woot")
        }
        else{
        console.log("whahathatha")
        }
    };
}

inquirer.prompt([
    {
        type: 'checkbox',
        name: 'role',
        message: 'Is this employee a Manager?',
        choices: ['yes', 'no']
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Manager Phone number?'
    }
    
])
.then(data => {
    const manager = new Manager(data)
    console.log(manager)

})

module.exports = Manager;