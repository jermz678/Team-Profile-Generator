const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee{
    constructor (name, id, email, school){
        super(name, id, email)
        this.school = school;
        
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }

 }

//  inquirer.prompt([
    
//     {
//         type: 'input',
//         name: 'school',
//         message: 'Where does the Intern attend school?'
//     }
  
// ])
// .then(data => {
//     const intern = new Intern(data.name, data.id, data.email, data.school)
//     console.log(intern)

// })

module.exports = Intern;