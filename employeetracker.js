const inquirer = require('inquirer');

const DB = require('./class');

function loadQuestions(){
  
  inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'Would you like to do?',
    choices: ['View all Employees','View all Roles','View all Departments','Add Employee','Add Role','Add Department','Update Employee Role','QUIT'],
  }).then(data => {
    switch(data.choice) {
      case 'View all Employees':
        viewEmployees()
        break;
      case 'View all Roles':
        viewRoles();
        // code block
        break;
        case 'View all Departments':
        viewDepartments()
        break;
      default:
        // code block
    }

  })
}

  
