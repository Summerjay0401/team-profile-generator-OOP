const fs = require('fs/promises');
const inquirer =require('inquirer');

const { generateHTML } = require('./utils/generateHTML.js');

const questions = [
    {
        type: "list",
        message: "Do you want to add a member on your team?",
        name: "teamMember",
        choices:[
            "Manager", 
            "Engineer", 
            "Intern", 
            "Done adding team members", 
        ]
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    }, 
    {
        type: "input",
        message: "What is your ID number?",
        name: "idNumber",
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "emailAddress",
    }, 
    {
        type: "input",
        message: "What is your Office Number?",
        name: "officeNumber",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitUsername",
    }, 
    {
        type: "input",
        message: "What is the name of your School?",
        name: "schoolName",
    }, 
]

function init() {

        inquirer.prompt (questions).then(({teamMember,name,idNumber,emailAddress,officeNumber,gitUsername,schoolName})=> {

        const myTeam = generateHTML({teamMember,name,idNumber,emailAddress,officeNumber,gitUsername,schoolName});

        writeToFile("dist/index.html", myTeam);
    });    
}

init();