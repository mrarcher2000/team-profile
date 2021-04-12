const employeeArray = require('./employeeArray.js');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');



const parsedArrayFunc = function(employee){
        if (employee.getRole() === 'Manager') {
            return `<div class='card m-4'>
            <div class='card-body'>
                <h2 class='card-header bg-blue'>${employee.name}</h2><br>
                <h3 class='card-subtitle text-muted'>${employee.getRole()}  <i class="bi bi-cup"></i></h3>
                <div class='card-text'>
                    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${employee.id}</li>
                        <li class='list-group-item'>Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                        <li class='list-group-item'>Office Number: ${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
            `;
        };

        if (employee.getRole() === 'Engineer') {
            return `<div class='card m-4'>
            <div class='card-body'>
                <h2 class='card-header bg-blue'>${employee.name}</h2><br>
                <h3 class='card-subtitle text-muted'>${employee.getRole()}  <i class="bi bi-file-code"></i></h3>
                <div class='card-text'>
                    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${employee.id}</li>
                        <li class='list-group-item'>Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                        <li class='list-group-item'>Github:<a href='https://github.com/${employee.getGithub()}'>${employee.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
            `;
        }

        if (employee.getRole() === 'Intern') {
            return `<div class='card m-4'>
            <div class='card-body'>
                <h2 class='card-header bg-blue'>${employee.name}</h2><br>
                <h3 class='card-subtitle text-muted'>${employee.getRole()}  <i class="bi bi-file-person-fill"></i></h3>
                <div class='card-text'>
                    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${employee.id}</li>
                        <li class='list-group-item'>Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                        <li class='list-group-item'>School: ${employee.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        }

        else {
            return ``;
        };
};


const generateEmployeeCard = function(employeeArray) {

    var parsedArray = [];

    for (let i=0; i <employeeArray.length; i++){
        
        var newEmployeeEl = parsedArrayFunc(employeeArray[i]);

        parsedArray.push(newEmployeeEl);
    } 
    
    
     return parsedArray;
};

const generateProfile = function(employeeArray) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
    
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
        <link rel='stylesheet' href='./style.css'>
    </head>
    <body>
        
        <div class='navbar bg-red text-light'>
            <h1 class='text-center'>My Team</h1>
        </div>
    
        <br><br><br>
    
        <div class='d-flex text-center' id='employees'>
    
         ${generateEmployeeCard(employeeArray)}
    
        </div>
    
        
    
    
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>
    `;

};


module.exports = generateProfile;