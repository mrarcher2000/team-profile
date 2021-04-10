const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const questions = [
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
]