const fs = require('fs/promises');
const inquirer =require('inquirer');

const templateHelper = require('./src/templateHelper');

const questions = [
    {
        type: "list",
        message: "Select Role",
        name: "role",
        choices:[
            "Manager", 
            "Engineer", 
            "Intern", 
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
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitUsername",
        when: (answers) => answers.role === 'Engineer'
    }, 
    {
        type: "input",
        message: "What is the name of your School?",
        name: "schoolName",
        when: (answers) => answers.role === 'Intern'
    }, 
    {
        type: "confirm",
        name: "is_finished",
        message: "Do you want to add more team members?",
      },
]

let employees = [];

const getAnswers = () => {
    return inquirer.prompt (questions).then((answers)=> {
        employees.push(answers);
        if (answers.is_finished === false) {
            return employees;
        }
        else {
            return getAnswers();
        }
    }); 
}

function init() {

    getAnswers()
    .then((employees) => templateHelper(employees))
    .catch((error) => {});
   
}

init();

// {role,name,idNumber,emailAddress,officeNumber,gitUsername,schoolName,is_finished}