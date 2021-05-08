const fs = require('fs')
const inquirer = require('inquirer');
const register = require('./register')


class Employee {
    constructor (name, id, email){
       

        // .then(data => {
        //     console.log('text here', data)
        // })
        // console.log('text here', employeeData)
        // console.log(employeeData)
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
        getName() {
            return this.name;  
        }

        getId(){
            return this.id;
        }

        getEmail(){
            return this.email;
        }
        getRole(){
            return 'Employee';
        }
    
};

// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: "Enter the Employee's Name"

//     },

//     {
//         type: 'input',
//         name: 'id',
//         message: "Enter the Employee's ID number"

//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: "Enter the Employee's Email Address"

//     } 
    
// ])
// .then(data => {
//     const employee = new Employee(data.name, data.id, data.email)
//     console.log(employee)

// })


module.exports = Employee;









































