const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const generateHTML = require('./dist/generateHTML')

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// THEN I exit the application, and the HTML is generated

//array to hold all team members
teamMembers = []


//manager questions
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Manager's Name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Manager's ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Manager's Email Address"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the Office Phone Number"
    },
    {
        type: 'list',
        name: 'position',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['Engineer', 'Intern',],
    }
]

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
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
    }
]

//intern questions
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
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(err)
    })
}

//intern questions function
iQuestions = function() {
    inquirer.prompt(internQuestions)
    .then((data => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        console.log(intern)
        teamMembers.push(intern)
        console.log(teamMembers)
        
        if(data.position === 'Intern'){
            iQuestions();
        }if(data.position === 'Engineer'){
            eQuestions();
        }if(data.position ===  'Finish building my team'){
            console.log("Thank you!")
            let markdown = generateHTML(teamMembers);
            writeToFile('./index.html', markdown)


        }
        //return data;
}))}

//Engineer questions function
eQuestions = function() {
    inquirer.prompt(engineerQuestions)
    .then((data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        console.log(engineer)
        teamMembers.push(engineer)
        console.log(teamMembers)
    
        if(data.position === 'Engineer'){
            eQuestions();
        }if(data.position === 'Intern'){
            iQuestions();
        }if(data.position ===  'Finish building my team'){
            console.log("Thank you!")
            let markdown = generateHTML(teamMembers);
            writeToFile('./index.html', markdown)

        } 
        return data;
}))}

//manager questions function
mQuestions = function(){
        inquirer.prompt(managerQuestions)
    .then(data => {
            
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            console.log(manager)
            teamMembers.push(manager)
            console.log(teamMembers)

           if(data.position === 'Engineer'){
                    eQuestions()        
            }
            else{
                    iQuestions()
            }
            return data;
    })
    
}

mQuestions();
    

    
