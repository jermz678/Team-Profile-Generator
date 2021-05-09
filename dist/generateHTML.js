//const Engineer = require("../lib/Engineer");

function employeeCard (teamMembers){
    let team = teamMembers.map((member) => {
    if(member.role === 'Engineer'){
        return `<div class="card" style="width: 18rem;" style="display:flex; justify-content: center">
        <div class="card-body">
            <h2 class="card-title" style="background-color:#fed8b1"> ${member.role} </h2>
            <h3 class="card-subtitle"> Name: ${member.name} </h3>
            <h4  class="card-text"> ID: ${" "}${member.id} </h4>
            <h4  class="card-text"> Email: <a href="mailto:${member.email}">${member.email}</a> </h4>
            <h4  class="card-text"> Github: <a href="https://github.com/${member.github}" target="blank">${member.github}</a> </h4>
        </div>    
    </div>`
    }
    if(member.role === 'Intern'){
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title" style="background-color:#fed8b1"> ${member.role} </h2>
            <h3 class="card-subtitle"> Name: ${member.name} </h3>
            <h4  class="card-text"> ID: ${member.id} </h4>
            <h4  class="card-text"> Email: <a href="mailto:${member.email}">${member.email}</a> </h4>
            <h4  class="card-text"> School:${member.school} </h4>
        </div>    
    </div>`
    }
    if(member.role === 'Manager'){
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title" style="background-color:#ADD8E6"> ${member.role} </h2>
            <h3 class="card-subtitle"> Name: ${member.name} </h3>
            <h4  class="card-text"> ID: ${member.id} </h4>
            <h4  class="card-text"> Email: <a href="mailto:${member.email}">${member.email}</a> </h4>
            <h4  class="card-text"> Office Number: ${member.officeNumber} </h4>
        </div>    
    </div>`
    }
}).join("")
    return team;
}

function logMembers(teamMembers){
    console.log(teamMembers)

}

function generateHTML(teamMembers) {
    logMembers(teamMembers);
    //teamMembers.forEach(employeeCard)
    let members = employeeCard(teamMembers) 
    
   return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header style="background-color: red; text-align:center; height: 3.5rem; margin-bottom: 25px;">
            <h1> My Team
            </h1>
        </header>
        <section style="display: flex; justify-content: space-around;"> ${members}
        </section>
        </body>
    </html>`

    


}
module.exports = generateHTML;