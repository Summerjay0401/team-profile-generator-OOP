const fs = require('fs');
const inquirer =require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        name: "id",
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
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
        name: "gitHub",
        when: (answers) => answers.role === 'Engineer'
    }, 
    {
        type: "input",
        message: "What is the name of your School?",
        name: "school",
        when: (answers) => answers.role === 'Intern'
    }, 
    {
        type: "confirm",
        name: "is_finished",
        message: "Do you want to add more team members?",
      },
]


const createEmployee = (employee) => {
    if (employee.role === "Manager")
        return new Manager(employee.id, employee.name, employee.email, employee.officeNumber);

    if (employee.role === "Engineer")
        return new Engineer(employee.id, employee.name, employee.email, employee.gitHub);

    if (employee.role === "Intern")
        return new Intern(employee.id, employee.name, employee.email, employee.school);
};

let employees = [];

const getAnswers = () => {
    return inquirer.prompt (questions).then((answers)=> {
        employees.push(createEmployee(answers));
        if (answers.is_finished === false) {
            return employees;
        }
        else {
            return getAnswers();
        }
    }); 
}

function writeToFile(data) {

    const folder = "./dist";
    const fileName = "index.html";

    if(fs.existsSync(folder) === false)
        fs.mkdirSync(folder, {
            recursive: true
        })

    fs.writeFile(`${folder}/${fileName}`, data, err => {
        if (err) return console.log(err);

        console.log(`Your ${folder}/${fileName} file has been generated`);
    });
}

function init() {

    getAnswers()
    .then((employees) => { 
        const html = templateHelper(employees)
        writeToFile(html);
    })
    .catch((error) => {});

}

init();

