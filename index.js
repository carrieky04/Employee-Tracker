const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

// Create database connection
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "PassWord(1216)",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

// Inquirer Question Objects
const menu = [
  {
    type: "list",
    name: "menu",
    message: "Choose from the options below: ",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee Role",
      "Done",
    ],
  },
];

const department = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "name",
  },
];

const role = [
  {
    type: "input",
    message: "What is the name of the role?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "salary",
  },
  {
    type: "list",
    message: "In which department does this role belong to?",
    name: "department",
    choices: ["Engineering", "Finance", "Legal", "Sales"],
  },
];

const employee = [
  {
    type: "input",
    message: "First name of employee?",
    name: "first",
  },
  {
    type: "input",
    message: "Last name of employee?",
    name: "last",
  },
  {
    type: "list",
    message: "Employee Role?",
    name: "role",
    choices: [
      "Sales Lead",
      "Sales Person",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
    ],
  },
  {
    type: "list",
    message: "Who is the Manager of employee?",
    name: "manager",
    choices: [
      "None",
      "Christopher Wallace",
      "Nasir Jones",
      "Lauryn Hill",
      "Calvin Broadus",
    ],
  },
];

const update = [
  {
    type: "list",
    message: "Which employee role do you want to update?",
    name: "employee",
    choices: [
      "Christopher Wallace",
      "Tupac Shakur",
      "Nasir Jones",
      "Melissa  Elliott",
      "Lauryn Hill",
      "Onika Maraj",
      "Calvin Broadus",
      "Shawn Carter",
    ],
  },
  {
    type: "list",
    message: "Which role do you want to assign to the employee?",
    name: "role",
    choices: [
      "Sales Lead",
      "Sales Person",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
    ],
  },
];

// Menu prompt
const showMenu = () => {
  inquirer.prompt(menu).then((answers) => {
    console.log(answers);
    switch (answers.menu) {
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View All Employees":
        viewAllEmployees();
        break;
      case "Add a Department":
        addDepartment();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Add an Employee":
        addEmployee();
        break;
      case "Update an Employee Role":
        updateEmployee();
        break;
      case "Done":
        console.log(">>>>>> DONE <<<<<<");
    }
  });
};

const viewAllDepartments = () => {
  db.query("Select * From department", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.table(res);
      showMenu();
    }
  });
};

const viewAllRoles = () => {
  db.query("Select * From role", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.table(res);
      showMenu();
    }
  });
};

const viewAllEmployees = () => {
  db.query("Select * From employee", function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.table(res);
      showMenu();
    }
  });
};

const addDepartment = () => {
  inquirer.prompt(department).then((answers) => {
    const sql = `Insert Into department(name) Values(?)`;
    const params = [answers.name];

    db.query(sql, params, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Department Added!");
      }
    });
    showMenu();
  });
};

const addRole = () => {
  inquirer.prompt(role).then((answers) => {
    const sql = `SELECT id FROM department WHERE name = ?`;
    const params = [answers.department];

    db.query(sql, params, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        const sql1 = `Insert Into role (title, salary, department_id ) VALUES (?, ?, ?)`;
        const params = [answers.title, answers.salary, res[0].id];

        db.query(sql1, params, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Role Added!");
          }
        });
      }
    });
    showMenu();
  });
};

const addEmployee = () => {
  inquirer.prompt(employee).then((answers) => {
    const sql = `SELECT id FROM employee WHERE first_name = ? and last_name = ?`;
    const arrayOfNames = answers.manager.split(" ");
    const params = [arrayOfNames[0], arrayOfNames[1]];

    db.query(sql, params, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("This is manager id", res);
        let managerId = res[0].id;

        const sql1 = `SELECT id FROM role WHERE title = ?`;
        const params = [answers.role];

        db.query(sql1, params, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log("This is role id", res);
            let roleId = res[0].id;
            console.log("Success!");

            const sql2 = `Insert Into employee (first_name, last_name, role_id, manager_id ) VALUES (?, ?, ?, ?)`;
            const params = [answers.first, answers.last, roleId, managerId];

            db.query(sql2, params, (err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Employee Added!");
              }
            });
          }
        });
      }
    });

    showMenu();
  });
};

const updateEmployee = () => {
  inquirer.prompt(update).then((answers) => {
    console.log(answers)
    const sql = `SELECT first_name, last_name FROM employee`;
    const arrayOfNames = answers.employee.split(" ");
    const params = [arrayOfNames[0], arrayOfNames[1]];

    db.query(sql, params, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("This is employee", res);
        let employeeId = res[0].id;

        const sql1 = `SELECT id FROM role WHERE title = ?`;
        const params = [answers.role];

        db.query(sql1, params, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log("This is role id", res);
            let roleId = res[0].id;
            console.log("Success!");

            const sql2 = `UPDATE employee SET role_id = ? WHERE id = ?`;
            const params = [roleId, employeeId];

            db.query(sql2, params, (err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Employee Updated!");
              }
            });
          }
        });
      }
    });
    showMenu();
  });
};

showMenu();
