const fs = require('fs')
const inquirer = require('inquirer');


class Employee {
    constructor (data){
        const {name, id, email} = data;
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
    
};

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Enter the Employee's Name"

    },

    {
        type: 'input',
        name: 'id',
        message: "Enter the Employee's ID number"

    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Employee's Email Address"

    } 
    
])
.then(data => {
    const employee = new Employee(data)
    console.log(employee)

})


module.exports = Employee;









































