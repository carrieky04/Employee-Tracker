const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');



// Create database connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'PassWord(1216)',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );




// Inquirer Question Objects
const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'Choose from the options below: ',
        choices: ['View All Departments', 
        'View All Roles', 'View All Employees', 
        'Add a Department', 'Add a Role', 
        'Add an Employee', 'Update an Employee Role', 'Done'],
    }
]

const department = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'name',
    }   
]

const role = [
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary',
    },
    {
        type: 'list',
        message: 'In which department does this role belong to?',
        name: 'department',
        choices: ['Engineering', 'Finance', 'Legal', 'Sales']
    }
]

const employee = [
    {
        type: 'input',
        message: 'First name of employee?',
        name: 'first name',
    },
    {
        type: 'input',
        message: 'Last name of employee?',
        name: 'last name',
    },
    {
        type: 'list',
        message: 'Employee Role?',
        name: 'role',
        choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 
        'Software Engineer', 'Account Manager', 'Accountant', 
        'Legal Team Lead', 'Lawyer']
    },
    {
        type: 'list',
        message: 'Who is the Manager of employee?',
        name: 'manager',
        choices: ['None', 'Christopher Wallace', 'Nasir Jones', 
        'Lauryn Hill', 'Calvin Broadus']
    }
]

// Menu prompt
const showMenu = () => {
    inquirer
        .prompt(menu)
        .then((answers) => {
            console.log(answers);
            switch (answers.menu) {
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update an Employee':
                    updateEmployee();
                    break; 
                case 'Done':
                    console.log('>>>>>> DONE <<<<<<')
            }

        })
}

const viewAllDepartments = () => {
    db.query('Select * From department', (err, result) => {
        if (err) {
            console.log(err);    
        } 
        console.table(result);
        showMenu();
    })
}

const viewAllRoles = () => {
    db.query('Select * From role', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

const viewAllEmployees = () => {
    db.query('Select * From employee', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

const addDepartment = () => {
    inquirer
        .prompt(department)
        .then((answers) => {
            console.log(answers);
            // showMenu();
        })
}

const addRole = () => {
    inquirer
        .prompt(role)
        .then((answers) => {
            console.log(answers);
            // showMenu();
        })
}

const addEmployee = () => {
    inquirer
        .prompt(employee)
        .then((answers) => {
            console.log(answers);
            // showMenu();
        })
}

const updateEmployee = () => {
    console.table(employeeTable);
    addEmployee();
}

showMenu();

