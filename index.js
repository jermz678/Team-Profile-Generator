const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//engineer questions
const engineerQuestions = [
{
    type: 'input',
    name: 'name',
    message: "Enter the Engineer's Name"

},
{
    type: 'input',
    name: 'id',
    message: "Enter the Engineers's ID number"

},
{
    type: 'input',
    name: 'email',
    message: "Enter the Engineer's Email Address"

},
{
    
        type: 'input',
        name: 'github',
        message: 'What is the Employee GitHub user name?'
},
{
    type: 'list',
    name: 'position',
    message: 'Would you like to add an Engineer or Intern',
    choices: ['Engineer', 'Intern', 'Finish building my team'],

}
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Intern's Name"

    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Intern's ID number"

    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Intern's Email Address"

    },
    {
        type: 'input',
        name: 'school',
        message: 'Where does the Intern attend school?'
    },
    {
        type: 'list',
        name: 'position',
        message: 'Would you like to add an Engineer or Intern',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
    
    }

]
//intern questions function
iQuestions = function() {
    inquirer.prompt(internQuestions)
.then((data => {
    const intern = new Intern(data.name, data.id, data.email, data.school)
    console.log(intern)
    
    if(data.position === 'Intern'){
        iQuestions();
    }if(data.position === 'Engineer'){
        eQuestions();
    }if(data.position ===  'Finish building my team'){
        console.log("Thank you!")
    }
    return data;
}))}


//Engineer questions function
eQuestions = function() {
    inquirer.prompt(engineerQuestions)
.then((data => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    console.log(engineer)
    
    if(data.position === 'Engineer'){
        eQuestions();
    }if(data.position === 'Intern'){
        iQuestions();
    }if(data.position ===  'Finish building my team'){
        console.log("Thank you!")
    } 
    return data;
}))}



const register = function(){
    
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "Enter the Manager's Name"
    
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
    
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Office Phone Number"
        },
        
        
    ])
        .then(data => {
            
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            console.log(manager)

           
                inquirer.prompt([
                {
                    type: 'list',
                    name: 'position',
                    message: 'Would you like to add an Engineer or Intern',
                    choices: ['Engineer', 'Intern', 'Finish building my team'],
        
                }
            
            ])
        
            .then(data => {
            if(data.position !== 'Finish building my team'){
                console.log(data.position)
                if(data.position === 'Engineer'){
                    console.log(data.position, "whahtahthta")

                    
                    eQuestions()
                }
                else{
                    iQuestions()
                }

            }else{
                console.log("Thanks!!")
            }
            
        
            // const employee = new Employee(data.name, data.id, data.email )
            // const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            // console.log(manager)
            // console.log(employee)
            // console.log(data.position)
                return data;
        
        
    })
         

})}
register()