const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeArray = require('./src/employeeArray');


const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Team Manager's Name: "
    },
    {
        type: 'number',
        name: 'id',
        message: 'Employee ID Number: '
    },
    {
        type: 'input',
        name: 'email',
        message: "Manager's Email Address: "
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Manager's Office Number (if applicable): "
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "Engineer's Employee ID: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Engineer's Email Address: ",
    },
    {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub Username: "
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name? "
    },
    {
        type: 'number',
        name: 'id',
        message: "Intern's Employee ID Number: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Intern's Email Address: "
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern associated with? If none, press enter."
    }
];

const mainMenu = [
    {
        type: 'list',
        name: 'mainMenu',
        message: "Welcome! Let's create your Team Profile!\nTo add a new Team Member, choose an option below: ",
        choices: ['Manager', 'Engineer', 'Intern']
    }
];


inquirer
    .prompt(mainMenu)
    .then(answers => {
        if (answers.mainMenu === 'Manager'){
            inquirer.prompt(managerQuestions).then(answers => {
                let name = answers.name;  
                let id = answers.id;
                let email = answers.email;
                let officeNumber = answers.officeNumber;
                const manager = new Manager(name, id, email, officeNumber);

                employeeArray.push(manager);
                console.log(employeeArray);
            });
        };
    });