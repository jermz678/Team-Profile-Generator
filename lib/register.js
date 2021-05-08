const inquirer = require('inquirer');
const Employee = require('./Employee')

const register = function(role){
    let global = {}; 
    
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
        console.log(data)
        global = data;
        
    })
    return global;
}
register()
module.exports = register;
