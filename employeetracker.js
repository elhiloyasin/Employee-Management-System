const inquirer = require('inquirer');
const { addRole } = require('./class');

const DB = require('./class');
require('console.table');
loadQuestions()
function loadQuestions() {

  inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'Would you like to do?',
    choices: ['View all Employees', 'View all Roles', 'View all Departments', 'Add Employee', 'Add Role', 'Add Department', 'Update Employee Role', 'QUIT'],
  }).then(data => {
    switch (data.choice) {
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
      case 'Add Department':
        AddDepartments()
        break;
      case 'Add Role':
        AddRoles()
        break;
      case 'Add Employee':
        AddEmployees()
        break;
      case 'Update Employee Role':
        UpdateEmployeeRole()
        break;
      default:
        quit();
    }
  })
}

function viewEmployees() {
  DB.findEmployee().then(([data]) => {
    console.table(data)
    loadQuestions();
  })
}

function viewRoles() {
  DB.findRole().then(([data]) => {
    console.table(data)
    loadQuestions();
  })
}

function viewDepartments() {
  DB.findDepartment().then(([data]) => {
    console.table(data)
    loadQuestions();
  })
}

function AddEmployees() {

  inquirer.prompt([{
    name: 'first_name',
    type: 'input',
    message: 'What is the Employees first name?',

  },
  {
    name: 'last_name',
    type: 'input',
    message: 'What is the Employees last name?',
  }]
  ).then(data => {
    let firstName = data.first_name
    let lastName = data.last_name
    DB.findRole()
      .then(([data]) => {
        const roleChoices = data.map(({ id, title }) => ({
          name: title,
          value: id
        }))
        inquirer.prompt({
          name: 'roleId',
          type: 'input',
          message: 'What is the Employees role?',
          choices: roleChoices
        },
        )
          .then(data => {
            let role = data.roleId
            let employee = {
              role_id: role,
              first_name: firstName,
              last_name: lastName
            }
            DB.addEmployee(employee)
            loadQuestions();
          })
      })
  })

}

function AddRoles() {
  DB.findDepartment()
    .then(([data]) => {
      const departmentChoices = data.map(({ id, name }) => ({
        name: name,
        value: id
      }))
      inquirer.prompt([{
        name: 'title',
        type: 'input',
        message: 'What is the name of the role?',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role?',
      },
      {
        name: 'department_id',
        type: 'input',
        message: 'Which department does the role belong to?',
        choices: departmentChoices
      }
      ]
      ).then(data => {
        DB.addRole(data)
        loadQuestions()
      })
    })
}

function AddDepartments() {
  inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'What is the name of the department?',
  },
  ).then(data => {
    DB.addDepartment(data)
    loadQuestions()
  })
}

function UpdateEmployeeRole() {
  DB.findEmployee().then(([data]) => {
    console.log('hello');
    const employeeChoices = data.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }))
    inquirer.prompt({
      name: 'employee_id',
      type: 'list',
      message: 'Which employees role is getting updated?',
      choices: employeeChoices
    },
    ).then(data => {
      let id = data.employee_id
      DB.findRole().then(([data]) => {
        const roleChoices = data.map(({ id, title }) => ({
          name: title,
          value: id
        }))
        inquirer.prompt({
          name: 'role_id',
          type: 'list',
          message: 'Which employees role do you want to assignt to the employee',
          choices: roleChoices
        },
        ).then(data => DB.updateEmployeeRole(id, data.role_id))
          .then(() => loadQuestions())
      })
    })

  })

}
function quit() {
  process.exit()

}




